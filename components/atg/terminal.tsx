"use client";
import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";
import { curlCommand, useRunCommandSubscription } from "@/app/api/hello/atg"; // Update with actual path
import { fetchTestSets } from "@/app/api/hello/atg";
import { Button } from "@mui/material";
import { Directory } from "./Editor/utils/file-manager";
import { Type } from "./Editor/utils/file-manager";
// import { Button } from "@mui/material";

const Emoji = "\u{1F430} Keploy"; // 🐰

function MainTerminal({
  inputRef,
  functionName,
  setRootDir,
  hideTerminal,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  hideTerminal: () => void;
}) {
  return (
    <div className="h-full">
      {functionName === "record" && (
        <RecordTerminalSession
          inputRef={inputRef}
          setRootDir={setRootDir}
          hideTerminal={hideTerminal}
        />
      )}
      {functionName === "deduplicate" && (
        <DeduplicateTerminalSession
          inputRef={inputRef}
          hideTerminal={hideTerminal}
        />
      )}
      {functionName === "testcoverage" && (
        <TestCoverageTerminalSession
          inputRef={inputRef}
          hideTerminal={hideTerminal}
        />
      )}
    </div>
  );
}

function RecordTerminalSession({
  inputRef,
  setRootDir,
  hideTerminal,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  hideTerminal: () => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal, popTerminal } =
    useTerminal();
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    storedCodeSubmissionId
  );
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [command, setCommandSub] = useState<string>("RECORD");
  const [SocketErrors, setSocketErrors] = useState<string | null>(null);
  const [commandsTrue, setOtherCommandsTrue] = useState<boolean>(false);
  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });

  const initialPushRef = useRef(false);
  const intialRecordingRef = useRef(false);

  useEffect(() => {
    if (data) {
      if (
        data.runCommand == "[GIN-debug] Listening and serving HTTP on :5000"
      ) {
        setOtherCommandsTrue(true);
      }
      pushToHistory(
        <div>
          <pre>{data.runCommand}</pre>
        </div>
      );
    } else if (error) {
      setSocketErrors(error.message);
      pushToHistory(
        <div>
          {Emoji}: {error.message}
        </div>
      );
    } else if (loading) {
      pushToHistory(<div>{Emoji}: Loading...</div>);
    }
  }, [data, error, loading, pushToHistory]);

  useEffect(() => {
    if (!initialPushRef.current) {
      pushToHistory(<>{Emoji}: Keploy recording starting....</>);
      initialPushRef.current = true;
    }
  }, [pushToHistory]);

  const makeKeployTestDir = () => {
    setRootDir((prevRootDir) => {
      // Check if the directory already exists
      const dirExists = prevRootDir.dirs.some(
        (dir) => dir.name === "keployTest"
      );

      if (dirExists) {
        console.log("Directory already exists.");
        return prevRootDir;
      }

      // Create a new directory object
      const newDir = {
        id: "test_root",
        name: "keployTest",
        parentId: "root",
        type: Type.DIRECTORY,
        depth: 1,
        dirs: [],
        files: [],
      };

      // Add the new directory to the root's dirs array
      const updatedDirs = [...prevRootDir.dirs, newDir];

      // Return the updated root directory
      return {
        ...prevRootDir,
        dirs: updatedDirs,
      };
    });
  };
  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          if (commandsTrue) {
            const Curlresponse = await curlCommand(
              codeSubmissionId,
              "curl -X GET http://localhost:5000/animals"
            );

            makeKeployTestDir();
            intialRecordingRef.current = true;
          }
        }
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }}>{Emoji}: Command not found</div>
        );
      },
      "": async () => {
        await pushToHistory(<div>{Emoji}:</div>);
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    [commandsTrue]
  );

  useEffect(() => {
    if (inputRef.current) {
      setCommandSub("RECORD");
      setTimeout(() => {
        commands['keploy record -c "npm run dev"']();
      }, 1000);
    }
  }, [commands, inputRef]);

  return (
    <div className="h-full">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{Emoji}:</>}
        commands={commands}
        inputRef={inputRef}
        hideTerminal={hideTerminal}
      />
    </div>
  );
}

function DeduplicateTerminalSession({
  inputRef,
  hideTerminal,
}: {
  inputRef: React.RefObject<HTMLInputElement>;

  hideTerminal: () => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  let intialRenderRef = useRef(true);

  const commands = useMemo(
    () => ({
      'keploy deduplicate -c "Deduplicate ababy"': async () => {
        await pushToHistory(<div>{Emoji}: Deduplicate command executed</div>);
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }}>{Emoji}: Command not found</div>
        );
      },
      "": async () => {
        await pushToHistory(<div>{Emoji}:</div>);
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    []
  );

  useEffect(() => {
    if (inputRef.current && intialRenderRef.current) {
      inputRef.current.value = `keploy deduplicate -c "Deduplicate ababy"`;
      commands[`keploy deduplicate -c "Deduplicate ababy"`]();
      console.log("here in useffect here");
      intialRenderRef.current = false;
    }
  }, []);

  return (
    <div className="h-full">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{Emoji}:</>}
        commands={commands}
        inputRef={inputRef}
        hideTerminal={hideTerminal}
      />
    </div>
  );
}

function TestCoverageTerminalSession({
  inputRef,
  hideTerminal,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  hideTerminal: () => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  const Emoji = "\u{1F430} Keploy"; // 🐰
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

  const initialPushRef = useRef(false);
  const intialRecordingRef = useRef(false);

  useEffect(() => {
    if (data) {
      pushToHistory(
        <div>
          <pre>{data.runCommand}</pre>
        </div>
      );
    } else if (error) {
      setSocketErrors(error.message);
      pushToHistory(
        <div>
          {Emoji}: {error.message}
        </div>
      );
    } else if (loading) {
      pushToHistory(<div>{Emoji}: Loading...</div>);
    }
  }, [data, error, loading, pushToHistory]);

  useEffect(() => {
    if (!initialPushRef.current) {
      pushToHistory(<>{Emoji}: Keploy Testing starting....</>);
      initialPushRef.current = true;
    }
  }, [pushToHistory]);

  const commands = useMemo(
    () => ({
      'keploy testcoverage -c "test"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          intialRecordingRef.current = true;
        }
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }}>{Emoji}: Command not found</div>
        );
      },
      "": async () => {
        await pushToHistory(<div>{Emoji}:</div>);
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    []
  );
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `keploy testcoverage -c "test"`;
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
        promptLabel={<>{Emoji}:</>}
        commands={commands}
        inputRef={inputRef}
        hideTerminal={hideTerminal}
      />
    </div>
  );
}

export default MainTerminal;
