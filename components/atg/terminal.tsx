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
// import { Button } from "@mui/material";

const Emoji = "\u{1F430} Keploy"; // 🐰

function MainTerminal({
  inputRef,
  functionName,
  setRootDir,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  setRootDir: Dispatch<SetStateAction<Directory>>;
}) {
  return (
    <div className="h-full">
      {functionName === "record" && (
        <RecordTerminalSession inputRef={inputRef} />
      )}
      {functionName === "deduplicate" && (
        <DeduplicateTerminalSession inputRef={inputRef} />
      )}
      {functionName === "testcoverage" && (
        <TestCoverageTerminalSession inputRef={inputRef} />
      )}
    </div>
  );
}

function RecordTerminalSession({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal, popTerminal } =
    useTerminal();
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    storedCodeSubmissionId
  );
  const [testSets, setTestSets] = useState<string[]>([""]);
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

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          if (commandsTrue) {
            const Curlresponse = await curlCommand(
              codeSubmissionId,
              "curl -X GET http://localhost:5000/"
            );
            if (Curlresponse.success) {
              console.log("hit it");
            } else {
              console.log("not hit it");
            }
            await delay(2000);
            const response = await fetchTestSets(codeSubmissionId);
            if (response.success) {
              const runCommandSets = response.data.data.runCommand;
              const newTestSets = runCommandSets.split("\n");
              setTestSets(newTestSets);
              console.log(testSets);
              pushToHistory(
                <div>
                  <pre>{JSON.stringify(response.data, null, 2)}</pre>
                </div>
              );
            } else {
              console.error("Error fetching test sets:", response.error);
              pushToHistory(
                <div style={{ color: "red" }}>
                  {Emoji}: Error fetching test sets: {response.error}
                </div>
              );
            }
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
      />
    </div>
  );
}

function DeduplicateTerminalSession({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

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
    [pushToHistory, resetTerminal]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `keploy deduplicate -c "Deduplicate ababy"`;
      inputRef.current.focus();
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
      />
    </div>
  );
}

function TestCoverageTerminalSession({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
  const Emoji = "\u{1F430} Keploy"; // 🐰

  const commands = useMemo(
    () => ({
      'keploy testcoverage -c "test"': async () => {
        await pushToHistory(<div>{Emoji}: Test coverage command executed</div>);
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
    [pushToHistory, resetTerminal]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `keploy testcoverage -c "test"`;
      inputRef.current.focus();
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
      />
    </div>
  );
}

export default MainTerminal;
