import React, {
  useMemo,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Terminal } from "..";
import { useTerminal } from "../hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg";
import {
  replaceAnsiColors,
  replaceDates,
} from "../../Editor/utils/api-functions";
import { StepsforDedup } from "../../Utils/types";
const Emoji = "User@1231-Keploy:"; // 🐰

function DeduplicateTerminalSession({
  inputRef,
  DedupTheme,
  DeDupSetTerminalHeightStatus,
  stepForDedup,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  DedupTheme: boolean;
  DeDupSetTerminalHeightStatus: (val: string) => void;
  stepForDedup: Dispatch<SetStateAction<StepsforDedup>>;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  const [command, setCommandFirst] = useState<string>("DEDUP");
  const [commandSecond, setCommandSecond] =
    useState<string>("REMOVE_DUPLICATES");
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [OtherCommand, setOtherCommandsTrue] = useState<boolean>(false);
  const [socketErrors, setSocketErrors] = useState<string | null>(null);
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    storedCodeSubmissionId
  );
  const [loader, setLoader] = useState<boolean>(false);
  const intialRecordingRef = useRef(false);
  // Subscription for the first command
  const {
    data: dataFirst,
    loading: loadingFirst,
    error: errorFirst,
    handleSubmit: handleSubmitFirst,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command,
    testSetName: "test-set-0",
  });

  // Subscription for the second command
  const {
    data: dataSecond,
    loading: loadingSecond,
    error: errorSecond,
    handleSubmit: handleSubmitSecond,
  } = useRunCommandSubscription({
    codeSubmissionId,
    command: commandSecond,
    testSetName: "test-set-0",
  });

  let intialRenderRef = useRef(true);

  // Effect for dataFirst
  useEffect(() => {
    if (dataFirst) {
      dataFirst.runCommand = replaceDates(dataFirst.runCommand);
      dataFirst.runCommand = replaceAnsiColors(dataFirst.runCommand);

      if (dataFirst.runCommand.match(/<span style="color: [^>]+;">/)) {
        dataFirst.runCommand += "</span>";
      }

      if (dataFirst.runCommand.includes("proxy stopped...")) {
        localStorage.setItem("fetchTestListBool", JSON.stringify(true));
      }

      if (dataFirst.runCommand.includes("error in verifying the API key")) {
      }

      if (
        dataFirst.runCommand ===
          "[GIN-debug] Listening and serving HTTP on :5000" ||
        dataFirst.runCommand.includes("Server started on port 5000")
      ) {
        stepForDedup((prev) => ({ ...prev, Dedup: true }));
        setOtherCommandsTrue(true);
        setLoader(true);
      }
      pushToHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: dataFirst.runCommand }}
          ></p>
        </div>
      );
    } else if (errorFirst) {
      setSocketErrors(errorFirst.message);
      stepForDedup((prev) => ({ Dedup: true, Duplicates_removed: true }));
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> {errorFirst.message}
        </div>
      );
    } else if (loadingFirst) {
      setLoader(true);
    }
  }, [dataFirst, errorFirst, loadingFirst, pushToHistory, loader]);

  // Effect for dataSecond
  useEffect(() => {
    if (dataSecond) {
      dataSecond.runCommand = replaceDates(dataSecond.runCommand);
      dataSecond.runCommand = replaceAnsiColors(dataSecond.runCommand);

      if (dataSecond.runCommand.match(/<span style="color: [^>]+;">/)) {
        dataSecond.runCommand += "</span>";
      }

      // if (dataSecond.runCommand.includes("proxy stopped...")) {
      //   localStorage.setItem("fetchTestListBool", JSON.stringify(true));
      //   setLoader(false);
      // }

      // if (dataSecond.runCommand.includes("error in verifying the API key")) {
      //   setLoader(false);
      // }

      if (dataSecond.runCommand === "deleted redundant testcases") {
        stepForDedup((prev) => ({ ...prev, Duplicates_removed: true }));
        setLoader(false);
      }
      pushToHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: dataSecond.runCommand }}
          ></p>
        </div>
      );
    } else if (errorSecond) {
      setSocketErrors(errorSecond.message);
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> {errorSecond.message}
        </div>
      );
    } else if (loadingSecond) {
      setLoader(true);
    }
  }, [dataSecond, errorSecond, loadingSecond, pushToHistory, loader]);

  const commands = useMemo(
    () => ({
      'keploy deduplicate -c "Deduplicate ababy"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmitFirst();
          if (OtherCommand) {
            handleSubmitSecond();
            console.log("here is coming");
            // await makeKeployTestDir({ setRootDir });
            // setStepsForRecording((prev) => ({ ...prev, GenerateTest: true }));
            //add a time buffer here.
            // SetTestSets(rootDir.dirs[1],setRootDir)
            intialRecordingRef.current = true;
          }
        }
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }} className="flex">
            {<p className="font-bold">{Emoji}</p>}
            <p className="text-accent-100 font-bold">~/$</p> Command not found
          </div>
        );
      },
      "": async () => {
        await pushToHistory(
          <div className="flex">
            {<p className="font-bold">{Emoji}</p>}
            <p className="text-accent-100 font-bold">~/$</p>{" "}
          </div>
        );
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    []
  );

  useEffect(() => {
    if (inputRef.current && codeSubmissionId) {
      setCommandFirst("DEDUP");
      setCommandSecond("REMOVE_DUPLICATES");
      setTimeout(() => {
        commands['keploy deduplicate -c "Deduplicate ababy"']();
      }, 500);
    }
  }, [commands, inputRef, codeSubmissionId]);

  return (
    <div className="h-full">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={
          <p className="font-bold flex">
            {Emoji}
            <p className="text-accent-100">~/$</p>
          </p>
        }
        commands={commands}
        inputRef={inputRef}
        terminalTheme={DedupTheme}
        SetTerminalHeight={DeDupSetTerminalHeightStatus}
        Loading={loader}
      />
    </div>
  );
}

export default DeduplicateTerminalSession;
