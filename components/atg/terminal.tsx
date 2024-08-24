"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import {
  useFetchTestSetsSubscription,
  useFetchTestListSubscription,
  useFetchMockSubscription,
  useFetchTestRunSubscription,
  useFetchReportSubscription,
  useFetchDetailedReportSubscription,
  useFetchTestSubscription,
} from "@/app/api/automatic-test-generator/Subscription"; // Update import path accordingly

import { Directory } from "./Editor/utils/file-manager";
import { StepforTests, StepsForRecording, StepsforDedup } from "./utils/types";
import {
  makeKeployTestDir,
  replaceAnsiColors,
  replaceDates,
} from "./Editor/utils/api-functions";
import { useTerminal } from "./Terminal/hooks";
import {
  useRunCommandSubscription,
  useRemovingDuplicateSubscription,
} from "@/app/api/automatic-test-generator/Subscription";
import { Terminal } from "./Terminal";
const Emoji = "User@1231-Keploy:"; // 🐰

function CombinedTerminalPage({
  inputRef,
  functionName,
  RootDir,
  setRootDir,
  stepsForRecording,
  stepsForTesting,
  stepsForDedup,
  terminalTheme,
  setTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  RootDir: Directory;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  stepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  stepsForTesting: Dispatch<SetStateAction<StepforTests>>;
  stepsForDedup: Dispatch<SetStateAction<StepsforDedup>>;
  terminalTheme: boolean;
  setTerminalHeightStatus: (val: string) => void;
}) {
  const {
    history: recordHistory,
    pushToHistory: pushToRecordHistory,
    setTerminalRef: setRecordTerminalRef,
    resetTerminal: resetRecordTerminal,
  } = useTerminal();
  const {
    history: dedupHistory,
    pushToHistory: pushToDedupHistory,
    setTerminalRef: setDedupTerminalRef,
    resetTerminal: resetDedupTerminal,
  } = useTerminal();
  const {
    history: testHistory,
    pushToHistory: pushToTestHistory,
    setTerminalRef: setTestTerminalRef,
    resetTerminal: resetTestTerminal,
  } = useTerminal();

  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId] = useState<string>(storedCodeSubmissionId);
  const [commandsTrue, setCommandsTrue] = useState<boolean>(false);

  const { handleSubmit: fetchTestSets } =
    useFetchTestSetsSubscription(codeSubmissionId);
  const { handleSubmit: fetchTestList } =
    useFetchTestListSubscription(codeSubmissionId);
  const { handleSubmit: fetchTests } =
    useFetchTestSubscription(codeSubmissionId);
  const { handleSubmit: fetchMocks } =
    useFetchMockSubscription(codeSubmissionId);
  const { handleSubmit: fetchTestRuns } =
    useFetchTestRunSubscription(codeSubmissionId);
  const { handleSubmit: fetchReports } =
    useFetchReportSubscription(codeSubmissionId);
  const { handleSubmit: fetchDetailedReports } =
    useFetchDetailedReportSubscription(codeSubmissionId);

  const {
    data: recordData,
    loading: recordLoading,
    error: recordError,
    handleSubmit: recordHandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST_GENERATE",
  });

  const {
    data: dedupDataFirst,
    loading: dedupLoadingFirst,
    error: dedupErrorFirst,
    handleSubmit: DeduphandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "DEDUP",
    testSetName: "test-set-0",
  });

  const {
    data: testData,
    loading: testLoading,
    error: testError,
    handleSubmit: testHandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST",
  });

  // Consolidated commands in a single useMemo
  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        recordHandleSubmit();
        if (!commandsTrue) {
          setCommandsTrue(true);
          await makeKeployTestDir({
            setRootDir,
            fetchTestSets,
            fetchTestList,
            fetchMocks,
            fetchTestRuns,
            fetchReports,
            fetchDetailedReports,
            fetchTests,
          });
          stepsForRecording((prev) => ({ ...prev, GenerateTest: true }));
        }
      },
      'keploy deduplicate -c "Deduplicate ababy"': async () => {
        if (!commandsTrue) {
          const { handleSubmit } =
            useRemovingDuplicateSubscription(codeSubmissionId);
          const { data, loading, error } = handleSubmit("test-set-0");
          if (data && !loading) {
            stepsForDedup((prev) => ({ ...prev, Duplicates_removed: true }));
            setCommandsTrue(true);
          } else if (error) {
            console.error("Error removing duplicates:", error.message);
          }
        }
      },
      'keploy testcoverage -c "test"': async () => {
        if (!commandsTrue) {
          testHandleSubmit();
          setCommandsTrue(true);
          await makeKeployTestDir({
            setRootDir,
            fetchTestSets,
            fetchTestList,
            fetchMocks,
            fetchTestRuns,
            fetchReports,
            fetchDetailedReports,
            fetchTests,
          });
          stepsForTesting((prev) => ({ ...prev, generate_report: true }));
        }
      },
      __notFound__: () => {
        const pushToHistory =
          functionName === "record"
            ? pushToRecordHistory
            : functionName === "deduplicate"
            ? pushToDedupHistory
            : pushToTestHistory;

        pushToHistory(
          <div style={{ color: "red" }} className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p> Command not found
          </div>
        );
      },
      "": () => {
        const pushToHistory =
          functionName === "record"
            ? pushToRecordHistory
            : functionName === "deduplicate"
            ? pushToDedupHistory
            : pushToTestHistory;

        pushToHistory(
          <div className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p>
          </div>
        );
      },
      clear: () => {
        const resetTerminal =
          functionName === "record"
            ? resetRecordTerminal
            : functionName === "deduplicate"
            ? resetDedupTerminal
            : resetTestTerminal;

        resetTerminal();
      },
    }),
    [
      commandsTrue,
      codeSubmissionId,
      recordHandleSubmit,
      testHandleSubmit,
      setRootDir,
      stepsForRecording,
      stepsForDedup,
      stepsForTesting,
      functionName,
      pushToRecordHistory,
      pushToDedupHistory,
      pushToTestHistory,
      resetRecordTerminal,
      resetDedupTerminal,
      resetTestTerminal,
    ]
  );

  // Unified command execution based on functionName
  useEffect(() => {
    if (functionName === "record") {
      setTimeout(() => {
        commands['keploy record -c "npm run dev"']();
      }, 500);
    } else if (functionName === "deduplicate") {
      setTimeout(() => {
        commands['keploy deduplicate -c "Deduplicate ababy"']();
      }, 500);
    } else if (functionName === "testcoverage") {
      setTimeout(() => {
        commands['keploy testcoverage -c "test"']();
      }, 1000);
    }
  }, [
    functionName,
    commands,
    pushToRecordHistory,
    pushToDedupHistory,
    pushToTestHistory,
  ]);

  // Handling output and errors for each terminal type
  useEffect(() => {
    if (functionName === "record" && recordData) {
      recordData.runCommand = replaceDates(recordData.runCommand);
      recordData.runCommand = replaceAnsiColors(recordData.runCommand);

      if (recordData.runCommand.match(/<span style="color: [^>]+;">/)) {
        recordData.runCommand += "</span>";
      }

      if (recordData.runCommand.includes("proxy stopped...")) {
        setCommandsTrue(false);
      }

      pushToRecordHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: recordData.runCommand }}
          ></p>
        </div>
      );
    } else if (functionName === "deduplicate" && dedupDataFirst) {
      dedupDataFirst.runCommand = replaceDates(dedupDataFirst.runCommand);
      dedupDataFirst.runCommand = replaceAnsiColors(dedupDataFirst.runCommand);

      if (dedupDataFirst.runCommand.match(/<span style="color: [^>]+;">/)) {
        dedupDataFirst.runCommand += "</span>";
      }

      if (
        dedupDataFirst.runCommand.includes("proxy stopped...") ||
        dedupDataFirst.runCommand.includes(
          "eBPF resources released successfully..."
        )
      ) {
        setCommandsTrue(false);
      }

      pushToDedupHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: dedupDataFirst.runCommand }}
          ></p>
        </div>
      );
    } else if (functionName === "testcoverage" && testData) {
      testData.runCommand = replaceDates(testData.runCommand);
      testData.runCommand = replaceAnsiColors(testData.runCommand);

      if (testData.runCommand.match(/<span style="color: [^>]+;">/)) {
        testData.runCommand += "</span>";
      }

      if (testData.runCommand.includes("proxy stopped...")) {
        setCommandsTrue(false);
      }

      pushToTestHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: testData.runCommand }}
          ></p>
        </div>
      );
    }
  }, [
    recordData,
    dedupDataFirst,
    testData,
    functionName,
    pushToRecordHistory,
    pushToDedupHistory,
    pushToTestHistory,
  ]);

  return (
    <div className="h-full">
      <Terminal
        history={
          functionName === "record"
            ? recordHistory
            : functionName === "deduplicate"
            ? dedupHistory
            : testHistory
        }
        ref={
          functionName === "record"
            ? setRecordTerminalRef
            : functionName === "deduplicate"
            ? setDedupTerminalRef
            : setTestTerminalRef
        }
        promptLabel={
          <p className="font-bold flex">
            {Emoji}
            <p className="text-accent-100">~/$</p>
          </p>
        }
        commands={commands}
        inputRef={inputRef}
        terminalTheme={terminalTheme}
        SetTerminalHeight={setTerminalHeightStatus}
        Loading={
          functionName === "record"
            ? recordLoading
            : functionName === "deduplicate"
            ? dedupLoadingFirst
            : testLoading
        }
      />
    </div>
  );
}

export default CombinedTerminalPage;
