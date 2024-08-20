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
import { useRunCommandSubscription } from "@/app/api/automatic-test-generator/Subscription";
import {
  makeKeployTestDir,
  replaceAnsiColors,
  replaceDates,
} from "../../Editor/utils/api-functions";
import { StepforTests } from "../../utils/types";
import { Directory } from "../../Editor/utils/file-manager";

const Emoji = "User@1231-Keploy:"; // 🐰

function TestCoverageTerminalSession({
  inputRef,
  TestTheme,
  setStepsForTesting,
  TestSetTerminalHeightStatus,
  setRootDir,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  TestTheme: boolean;
  setStepsForTesting: Dispatch<SetStateAction<StepforTests>>;
  TestSetTerminalHeightStatus: (val: string) => void;
  setRootDir: Dispatch<SetStateAction<Directory>>;
 
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    storedCodeSubmissionId
  );
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [command, setCommandSub] = useState<string>("TEST");
  const [SocketErrors, setSocketErrors] = useState<string | null>(null);
  const [commandsTrue, setOtherCommandsTrue] = useState<boolean>(false);
  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });
  const [loader, setLoader] = useState<boolean>(false);
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
        setLoader(false);
      }

      if (
        data.runCommand === "[GIN-debug] Listening and serving HTTP on :5000" ||
        data.runCommand.includes("Server started on port 5000")
      ) {
        setOtherCommandsTrue(true);
        setStepsForTesting((prev) => ({ ...prev, Replaying_tests: true }));
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
          {<p className="font-bold">{Emoji}</p>}
          <p className="text-accent-100 font-bold">~/$</p> {error.message}
        </div>
      );
      setStepsForTesting((prev) => ({
        ...prev,
        generate_report: true,
        Replaying_tests: true,
      }));
    } else if (loading) {
      setLoader(true);
    }
  }, [data, error, loading, pushToHistory,setStepsForTesting,loader]);

  // useEffect(() => {
  //   if (!initialPushRef.current) {
  //     pushToHistory(
  //       <div className="flex">
  //         {<p className="font-bold">{Emoji}</p>}
  //         <p className="text-accent-100 font-bold">~/$</p> Keploy Testing
  //         starting....
  //       </div>
  //     );
  //     initialPushRef.current = true;
  //   }
  // }, [pushToHistory , loader , ]);

  const commands = useMemo(
    () => ({
      'keploy testcoverage -c "test"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          if (commandsTrue) {
            await makeKeployTestDir({ setRootDir });
           setStepsForTesting((prev) => ({ ...prev, generate_report: true }));
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
    [commandsTrue, codeSubmissionId, handleSubmit, pushToHistory, resetTerminal]
  );
  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.value = `keploy testcoverage -c "test"`;
      setTimeout(() => {
        commands['keploy testcoverage -c "test"']();
      }, 1000);
    }
  }, [commands, inputRef]);

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
        terminalTheme={TestTheme}
        SetTerminalHeight={TestSetTerminalHeightStatus}
        Loading={loader}
      />
    </div>
  );
}

export default TestCoverageTerminalSession;
