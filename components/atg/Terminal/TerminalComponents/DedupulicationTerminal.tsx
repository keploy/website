import React, { useMemo, useEffect, useRef , useState } from "react";
import { Terminal } from "..";
import { useTerminal } from "../hooks";

const Emoji = "User@1231-Keploy:"; // 🐰

function DeduplicateTerminalSession({
  inputRef,
  DedupTheme,
  DeDupSetTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  DedupTheme: boolean;
  DeDupSetTerminalHeightStatus: (val: string) => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();
    const [command, setCommandSub] = useState<string>("TEST_GENERATE");
  
  let intialRenderRef = useRef(true);

  const commands = useMemo(
    () => ({
      'keploy deduplicate -c "Deduplicate ababy"': async () => {
        await pushToHistory(
          <div className="flex">
            {<p className="font-bold">{Emoji}</p>}
            <p className="text-accent-100 font-bold">~/$</p> Deduplicate command
            executed
          </div>
        );
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
    if (inputRef.current && intialRenderRef.current) {
      inputRef.current.value = `keploy deduplicate -c "Deduplicate ababy"`;
      commands[`keploy deduplicate -c "Deduplicate ababy"`]();
      intialRenderRef.current = false;
    }
  }, []);

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
      />
    </div>
  );
}

export default DeduplicateTerminalSession;
