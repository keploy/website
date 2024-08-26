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


export const processAndRenderRunCommand = (
  data: any,
  stepsUpdater: Dispatch<SetStateAction<any>>,
  pushToHistory: (content: JSX.Element) => void,
  stepKey: string
) => {
  if (!data) return;

  data.runCommand = replaceDates(data.runCommand);
  data.runCommand = replaceAnsiColors(data.runCommand);

  // Close unclosed span tags if any
  if (data.runCommand.match(/<span style="color: [^>]+;">/)) {
    data.runCommand += "</span>";
  }

  // Update specific steps based on conditions
  if (
    data.runCommand === "[GIN-debug] Listening and serving HTTP on :5000" ||
    data.runCommand.includes("Server started on port 5000")
  ) {
    stepsUpdater((prev) => ({ ...prev, [stepKey]: true }));
  }

  // Push the processed command output to the history
  pushToHistory(
    <div>
      <p className="inline" dangerouslySetInnerHTML={{ __html: data.runCommand }}></p>
    </div>
  );
};

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
    const RunningAgain =
    localStorage.getItem("one_time") || "true";
  const [runningAgain,setrunningAgain] = useState<string>(RunningAgain);
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
    latestData: loadingData,
    handleSubmit: loadinghandleSubmit,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST_GENERATE",
    completed() {
      setCompletedTrue(setDownloading);
    },
  });

  const { handleSubmit: recordHandleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST_GENERATE",
    completed() {
      setCompletedTrue(setRecordCompleted);
    },
    stepsUpdater: stepsForRecording,
    pushToHistory: pushToRecordHistory,
    stepKey: "schemaValidation",
  });

  const { handleSubmit: DeduphandleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command: "DEDUP",
    testSetName: "test-set-0",
    completed() {
      setCompletedTrue(setDedupCompleted);
    },
    stepsUpdater: stepsForDedup,
    pushToHistory: pushToDedupHistory,
    stepKey: "Dedup",
  });

  const { handleSubmit: testHandleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command: "TEST",
    completed() {
      setCompletedTrue(setTestCompleted);
    },
    stepsUpdater: stepsForTesting,
    pushToHistory: pushToTestHistory,
    stepKey: "Replaying_tests",
  });

  useEffect(() => {
    if (inputRef.current && loadingData) {
      inputRef.current.value = loadingData.runCommand;
    }

    if (Downloading) {
      setLoader(true);
    }
  }, [loadingData, Downloading]);

  //when the recording subscription has ended we execute this
  useEffect(() => {
    const executeCommands = async () => {
      console.log("making keploy dir");
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
        recording: true,
      });
      stepsForRecording((prev) => ({ schemaValidation:true, GenerateTest: true }));
      setLoader(false);
    };

    if (recordCompleted) {
      executeCommands();
    }
  }, [recordCompleted]);

  //when the dedup subscription has ended we execute this
  useEffect(() => {
    const executeCommands = async () => {
      try {
        const { handleSubmit } =
          useRemovingDuplicateSubscription(codeSubmissionId);
        const { data, loading, error } = await handleSubmit("test-set-0");

        if (data && !loading) {
        } else if (error) {
          console.error("Error removing duplicates:", error.message);
        }
      } catch (err) {
        console.error("Unexpected error during removing duplicates:", err);
      }
      setLoader(false);
      stepsForDedup((prev) => ({ Dedup: true, Duplicates_removed: true }));
    };

    if (dedupCompleted) {
      executeCommands();
    }
  }, [dedupCompleted]);

  //when the testing subscription has ended we execute this
  useEffect(() => {
    const executeCommands = async () => {
      await makeKeployTestDir({
        setRootDir,
        fetchTestSets,
        fetchTestList,
        fetchMocks,
        fetchTestRuns,
        fetchReports,
        fetchDetailedReports,
        fetchTests,
        testing: true,
      });
      stepsForTesting((prev) => ({ Replaying_tests:true, generate_report: true }));
      setLoader(false);
    };

    if (testCompleted) {
      executeCommands();
    }
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
        if(runningAgain == "true"){
          loadinghandleSubmit();
        }
        if (Downloading || runningAgain == "false" ) {
          recordHandleSubmit();
        }
      },
      dedup: async () => {
        setLoader(true);
        DeduphandleSubmit();
      },
      test: async () => {
        setLoader(true);
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

  //   if (functionName === "record" && recordData) {
  //     recordData.runCommand = replaceDates(recordData.runCommand);
  //     recordData.runCommand = replaceAnsiColors(recordData.runCommand);

  //     if (recordData.runCommand.match(/<span style="color: [^>]+;">/)) {
  //       recordData.runCommand += "</span>";
  //     }

  //     if (
  //       recordData.runCommand ===
  //         "[GIN-debug] Listening and serving HTTP on :5000" ||
  //       recordData.runCommand.includes("Server started on port 5000")
  //     ) {
  //       stepsForRecording((prev) => ({ ...prev, schemaValidation: true }));
  //     }

  //     pushToRecordHistory(
  //       <div>
  //         <p
  //           className="inline"
  //           dangerouslySetInnerHTML={{ __html: recordData.runCommand }}
  //         ></p>
  //       </div>
  //     );
  //   } else if (functionName === "deduplicate" && dedupDataFirst) {
  //     dedupDataFirst.runCommand = replaceDates(dedupDataFirst.runCommand);
  //     dedupDataFirst.runCommand = replaceAnsiColors(dedupDataFirst.runCommand);

  //     if (
  //       dedupDataFirst.runCommand ===
  //         "[GIN-debug] Listening and serving HTTP on :5000" ||
  //       dedupDataFirst.runCommand.includes("Server started on port 5000")
  //     ) {
  //       stepsForDedup((prev) => ({ ...prev, Dedup: true }));
  //     }

  //     if (dedupDataFirst.runCommand.match(/<span style="color: [^>]+;">/)) {
  //       dedupDataFirst.runCommand += "</span>";
  //     }

  //     pushToDedupHistory(
  //       <div>
  //         <p
  //           className="inline"
  //           dangerouslySetInnerHTML={{ __html: dedupDataFirst.runCommand }}
  //         ></p>
  //       </div>
  //     );
  //   } else if (functionName === "testcoverage" && testData) {
  //     testData.runCommand = replaceDates(testData.runCommand);
  //     testData.runCommand = replaceAnsiColors(testData.runCommand);

  //     if (testData.runCommand.match(/<span style="color: [^>]+;">/)) {
  //       testData.runCommand += "</span>";
  //     }

  //     if (
  //       testData.runCommand ===
  //         "[GIN-debug] Listening and serving HTTP on :5000" ||
  //       testData.runCommand.includes("Server started on port 5000")
  //     ) {
  //       stepsForTesting((prev) => ({ ...prev, Replaying_tests: true }));
  //     }

  //     pushToTestHistory(
  //       <div>
  //         <p
  //           className="inline"
  //           dangerouslySetInnerHTML={{ __html: testData.runCommand }}
  //         ></p>
  //       </div>
  //     );
  //   }
  // }, [
  //   recordData,
  //   dedupDataFirst,
  //   testData,
  //   functionName,
  //   pushToRecordHistory,
  //   pushToDedupHistory,
  //   pushToTestHistory,
  // ]);

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
            ? loader
            : loader
        }
      />
    </div>
  );
}

export default CombinedTerminalPage;
