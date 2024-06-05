"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg"; // Update with actual path
import { Button } from "@mui/material";

function MainTerminal({
  inputRef,
  functionName,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
}) {
  return (
    <div className="h-full">
      <TerminalSession inputRef={inputRef} functionName={functionName} />
    </div>
  );
}

function TerminalSession({
  inputRef,
  functionName,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal, popTerminal } =
    useTerminal();
  const Emoji = "\u{1F430} Keploy"; // 🐰

  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(
    "41ed2669-f518-40ee-94fa-b197a774e695"
  );
  const [command, setCommandSub] = useState<string>("RECORD");

  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });

  useEffect(() => {
    if (data) {
      pushToHistory(
        <div>
          <pre>{data.runCommand}</pre>
        </div>
      );
    }
  }, [data, pushToHistory]);

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        handleSubmit();
        // console.log(data, "hey guys", error);
        // pushToHistory(
        //   <div>
        //     {loading && <p>Loading...</p>}
        //     {error && <p>Error: {error.message}</p>}
        //     {data && <pre>{data.runCommand}</pre>}
        //   </div>
        // );
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
      [functionName]: async () => {
        await pushToHistory(
          <div>
            {Emoji}: {functionName} executed
          </div>
        );
      },
    }),
    [pushToHistory, popTerminal, resetTerminal, functionName, data]
  );

  useEffect(() => {
    if (functionName === "record") {
      if (inputRef.current) {
        inputRef.current.value = `keploy record -c "npm run dev"`;
        inputRef.current.focus();
        setCommandSub("RECORD");
        setTimeout(() => {
          commands['keploy record -c "npm run dev"']();
        }, 1000);
      } else {
        console.log("dp2222");
      }
    }
  }, [functionName, commands, inputRef]);

  return (
    <>
      <div className="h-full">
        <Terminal
          history={history}
          ref={setTerminalRef}
          promptLabel={<>{Emoji}:</>}
          commands={commands}
          inputRef={inputRef}
        />
      </div>
    </>
  );
}

export default MainTerminal;
