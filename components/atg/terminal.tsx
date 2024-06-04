"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";
// import { CurlAPI, commandStart, commandStop, commandTest } from "@/app/api/hello/atg";

function MainTerminal({ inputRef }:{inputRef:React.RefObject<HTMLInputElement>}) {
  return (
    <div>
      <TerminalSession  inputRef={inputRef} />
    </div>
  );
}

function TerminalSession({ inputRef }:{inputRef:React.RefObject<HTMLInputElement>}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal, popTerminal } =
    useTerminal();
  const Emoji = "\u{1F430} Keploy"; // 🐰
  const [input, setInputValue] = useState<string>("");

  useEffect(() => {
    resetTerminal();
    pushToHistory(
      <>
        <div>
          <strong>Welcome!</strong> to the terminal.
        </div>
        <div style={{ fontSize: 20 }}>
          It contains{" "}
          <span style={{ color: "yellow" }}>
            <strong>Keploy</strong>
          </span>
          . Awesome, right?
        </div>
        <br />
        <div>You can write commands here to interact with the terminal.</div>
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        const data = "data";
        // ReRender();
        await pushToHistory(
          <>
            <div>
              {Emoji}: ${data}
            </div>
          </>
        );
      },
      fetch: async () => {
        // ReRender();
      },
      stop: async () => {
        const data = "await commandStop(`Stop`)";
        setTimeout(() => {
          // ReRender();
        }, 10000);
        await pushToHistory(
          <>
            <div>
              {Emoji}: ${data}
            </div>
          </>
        );
      },
      'keploy test -c "npm run coverage" --delay 10 --coverage': async () => {
        // Display loading message
        await pushToHistory(
          <>
            <div className="flex items-center">
              <span className="animate-spin text-white m-2">/</span>
              {Emoji}: Loading...
              <span className="animate-spin text-white m-2">/</span>
            </div>
          </>
        );

        try {
          // Fetch data
          const data = "await commandTest(`test`)";
          const usingJest = data[0];
          const TotalCoverage = data[1];
          await popTerminal();
          await pushToHistory(
            <>
              <div>
                {Emoji}: using Jest:{usingJest}% && total coverage is:
                {TotalCoverage}
              </div>
            </>
          );
        } catch (error) {
          await popTerminal();
          console.error("An error occurred:", error);
          await pushToHistory(
            <>
              <div>{Emoji}: Error occurred while fetching data</div>
            </>
          );
        }
      },
      alert: async () => {
        alert("Hello!");
        await pushToHistory(
          <>
            <div>
              {Emoji}:<strong>Alert</strong>
              <span style={{ color: "orange", marginLeft: 10 }}>
                <strong> Shown in the browser</strong>
              </span>
            </div>
          </>
        );
      },
      __notFound__: async () => {
        await pushToHistory(
          <>
            <div style={{ color: "red" }}>{Emoji}: Command not found</div>
          </>
        );
      },
      "curl --request GET   --url http://localhost:8000/students": async () => {
        const data = "await CurlAPI()";
        await pushToHistory(
          <>
            <div>{Emoji}: API captured</div>
          </>
        );
      },
      "": async () => {
        await pushToHistory(
          <>
            <div>{Emoji}:</div>
          </>
        );
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    [pushToHistory]
  );

  return (
    <div>
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
