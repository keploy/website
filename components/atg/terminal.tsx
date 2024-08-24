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
  const [codeSubmissionId, setCodeSubmissionId] = useState<string>(
    storedCodeSubmissionId
  );
  const [commandsTrue, setCommandsTrue] = useState<boolean>(false);
  const [Downloading, setDownloading] = useState<boolean>(false);
  const [recordCompleted, setRecordCompleted] = useState<boolean>(false);
  const [dedupCompleted, setDedupCompleted] = useState<boolean>(false);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
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
    data: loadingData,
    loading: DownloadLoader,
    error: loadingError,
    handleSubmit: loadinghandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST_GENERATE",
    completed() {
      setCompletedTrue(setDownloading);
      console.log("Downloading is completed");
    },
  });

  const {
    data: recordData,
    loading: recordLoading,
    error: recordError,
    handleSubmit: recordHandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST_GENERATE",
    completed() {
      setCompletedTrue(setRecordCompleted);
    },
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
    completed() {
      setCompletedTrue(setDedupCompleted);
    },
  });

  const {
    data: testData,
    loading: testLoading,
    error: testError,
    handleSubmit: testHandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST",
    completed() {
      setCompletedTrue(setTestCompleted);
    },
  });
  //when the recording subscription has ended we execute this
  useEffect(() => {
    const executeCommands = async () => {
      if (commandsTrue) {
        setCommandsTrue(false);
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
      }
      stepsForRecording((prev) => ({ ...prev, GenerateTest: true }));
      setLoader(false);
    };

    if (recordCompleted) {
      executeCommands();
    }
  }, [recordCompleted]);


  //when the dedup subscription has ended we execute this
  useEffect(() => {
    stepsForDedup((prev) => ({ ...prev, Duplicates_removed: true }));
    setCommandsTrue(true);
  }, [dedupCompleted]);


  //when the testing subscription has ended we execute this
  useEffect(() => {
    const executeCommands = async () => {
      if (commandsTrue) {
        setCommandsTrue(false);
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
      }
      stepsForTesting((prev) => ({ ...prev, generate_report: true }));
    };

    if (testCompleted) {
      executeCommands();
    }
    stepsForTesting((prev) => ({ ...prev, generate_report: true }));
  }, [testCompleted]);

  const setCompletedTrue = (
    setCompleted: Dispatch<SetStateAction<boolean>>
  ) => {
    setCompleted(true);
  };
  // Consolidated commands in a single useMemo
  const commands = useMemo(
    () => ({
      record: async () => {
        setLoader(true);
        loadinghandleSubmit();
        if (Downloading) {
          recordHandleSubmit();
        }
        console.log("record executed");
      },
      dedup: async () => {
        if (commandsTrue) {
          const { handleSubmit } =
            useRemovingDuplicateSubscription(codeSubmissionId);
          const { data, loading, error } = handleSubmit("test-set-0");
          if (data && !loading) {
            stepsForDedup((prev) => ({ ...prev, Duplicates_removed: true }));
            setCommandsTrue(false);
          } else if (error) {
            console.error("Error removing duplicates:", error.message);
          }
        }
      },
      test: async () => {
        testHandleSubmit();
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
      Downloading,
    ]
  );

  // Unified command execution based on functionName
  useEffect(() => {
    if (functionName === "record") {
      setTimeout(() => {
        commands["record"]();
      }, 500);
    } else if (functionName === "deduplicate") {
      setTimeout(() => {
        commands["dedup"]();
      }, 500);
    } else if (functionName === "testcoverage") {
      setTimeout(() => {
        commands["test"]();
      }, 1000);
    }
  }, [functionName, commands]);

  // Handling output and errors for each terminal type
  useEffect(() => {
    if (functionName === "record" && recordData) {
      recordData.runCommand = replaceDates(recordData.runCommand);
      recordData.runCommand = replaceAnsiColors(recordData.runCommand);

      if (recordData.runCommand.match(/<span style="color: [^>]+;">/)) {
        recordData.runCommand += "</span>";
      }

      if (
        recordData.runCommand ===
          "[GIN-debug] Listening and serving HTTP on :5000" ||
        recordData.runCommand.includes("Server started on port 5000")
      ) {
        stepsForRecording((prev) => ({ ...prev, schemaValidation: true }));
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
            ? loader
            : functionName === "deduplicate"
            ? dedupLoadingFirst
            : testLoading
        }
      />
    </div>
  );
}

export default CombinedTerminalPage;
