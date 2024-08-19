import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { Terminal } from "..";
import { useTerminal } from "../hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg";
import { Directory, Type } from "../../Editor/utils/file-manager";
import { StepsForRecording } from "../../Utils/types";
import {
  makeKeployTestDir,
  replaceDates,
  replaceAnsiColors,
} from "../../Editor/utils/api-functions";
const Emoji = "User@1231-Keploy:"; // 🐰

function RecordTerminalSession({
  inputRef,
  rootDir,
  setRootDir,
  setStepsForRecording,
  RecordTheme,
  RecordSetTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  rootDir: Directory;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  setStepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  RecordTheme: boolean;
  RecordSetTerminalHeightStatus: (val: string) => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [command, setCommandSub] = useState<string>("TEST_GENERATE");
  const [SocketErrors, setSocketErrors] = useState<string | null>(null);
  const [commandsTrue, setOtherCommandsTrue] = useState<boolean>(false);
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    storedCodeSubmissionId
  );
  const [loader, setLoader] = useState<boolean>(false);
  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });
  const initialPushRef = useRef(false);
  const intialRecordingRef = useRef(false);


  useEffect(() => {
    if (data) {
      data.runCommand = replaceDates(data.runCommand);
      data.runCommand = replaceAnsiColors(data.runCommand);

      if (data.runCommand.match(/<span style="color: [^>]+;">/)) {
        data.runCommand += "</span>";
      }

      if (data.runCommand.includes("proxy stopped...")) {
        localStorage.setItem("fetchTestListBool", JSON.stringify(true));
        setLoader(false);
      }

      if (data.runCommand.includes("error in verifying the API key")) {
        setLoader(false);
      }

      if (
        data.runCommand === "[GIN-debug] Listening and serving HTTP on :5000" ||
        data.runCommand.includes("Server started on port 5000")
      ) {
        setOtherCommandsTrue(true);
        setStepsForRecording((prev) => ({ ...prev, schemaValidation: true }));
      }
      pushToHistory(
        <div>
          <p
            className="inline"
            dangerouslySetInnerHTML={{ __html: data.runCommand }}
          ></p>
        </div>
      );
    } else if (error) {
      setSocketErrors(error.message);
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> {error.message}
        </div>
      );
      setStepsForRecording((prev) => ({
        ...prev,
        schemaValidation: true,
        GenerateTest: true,
      }));
    } else if (loading) {
      setLoader(true);
      // console.log(loader);
    }
  }, [data, error, loading, pushToHistory, setStepsForRecording, loader]);

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          if (commandsTrue) {
            await makeKeployTestDir({ setRootDir });
            setStepsForRecording((prev) => ({ ...prev, GenerateTest: true }));
            //add a time buffer here.
            // SetTestSets(rootDir.dirs[1],setRootDir)
            intialRecordingRef.current = true;
          }
        }
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }} className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p> Command not found
          </div>
        );
      },
      "": async () => {
        await pushToHistory(
          <div className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p>
          </div>
        );
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    [commandsTrue, codeSubmissionId, handleSubmit, pushToHistory, resetTerminal]
  );

  useEffect(() => {
    if (inputRef.current && codeSubmissionId) {
      setCommandSub("TEST_GENERATE");
      setTimeout(() => {
        commands['keploy record -c "npm run dev"']();
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
        terminalTheme={RecordTheme}
        SetTerminalHeight={RecordSetTerminalHeightStatus}
        Loading={loader}
      />
    </div>
  );
}

export default RecordTerminalSession;
