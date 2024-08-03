import React, { useState, useEffect, useMemo, useRef } from "react";
import { Terminal } from "..";
import { useTerminal } from "../hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg";

const Emoji = "User@1231-Keploy:"; // 🐰

function TestCoverageTerminalSession({
  inputRef,
  TestTheme,
  TestSetTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  TestTheme: boolean;
  TestSetTerminalHeightStatus: (val: string) => void;
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
        <div className="flex">
          {<p className="font-bold">{Emoji}</p>}
          <p className="text-accent-100 font-bold">~/$</p> {error.message}
        </div>
      );
    } else if (loading) {
      pushToHistory(
        <div className="flex">
          {<p className="font-bold">{Emoji}</p>}
          <p className="text-accent-100 font-bold">~/$</p> Loading...
        </div>
      );
    }
  }, [data, error, loading, pushToHistory]);

  useEffect(() => {
    if (!initialPushRef.current) {
      pushToHistory(
        <div className="flex">
          {<p className="font-bold">{Emoji}</p>}
          <p className="text-accent-100 font-bold">~/$</p> Keploy Testing
          starting....
        </div>
      );
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
      />
    </div>
  );
}

export default TestCoverageTerminalSession;
