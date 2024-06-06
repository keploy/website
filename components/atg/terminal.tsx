"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg"; // Update with actual path
import { Button } from "@mui/material";

const Emoji = "\u{1F430} Keploy"; // 🐰

function MainTerminal({
  inputRef,
  functionName,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
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
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    "16d32d13-3761-4512-95db-92adce721d0a"
  );
  const [command, setCommandSub] = useState<string>("RECORD");
  const [SocketErrors, setSocketErrors] = useState<string | null>(null);
  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });

  const initialPushRef = useRef(false); // Ref to track the initial push

  useEffect(() => {
    if (data) {
      pushToHistory(
        <div>
          <pre>{data.runCommand}</pre>
        </div>
      );
    } else if (error) {
      setSocketErrors(error.message);
      pushToHistory(<div>{Emoji}: {error.message}</div>);
    }
  }, [data, pushToHistory]);

  useEffect(() => {
    if (!initialPushRef.current) {
      pushToHistory(<>{Emoji}: Keploy recording starting....</>);
      initialPushRef.current = true;
    }
  }, []);

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        handleSubmit();
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
    [pushToHistory, popTerminal, resetTerminal, data]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `keploy record -c "npm run dev"`;
      inputRef.current.focus();
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
