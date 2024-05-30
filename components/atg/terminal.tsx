"use client";
import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";
import { CurlAPI, commandStart, commandStop, commandTest } from "@/app/api";
function MainTerminal({
  onRerenderEditor,
  inputRef,
}: {
  onRerenderEditor?: any;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const Emoji = "\u{1F430} Keploy"; // 🐰
  // State to manage multiple terminal sessions
  const [tabs, setTabs] = useState([{ id: 1, title: "Tab 1" }]);
  const [nextTabId, setNextTabId] = useState(2);
  const [activeTab, setActiveTab] = useState(1);

  const addNewTerminal = () => {
    const newTabId = nextTabId;
    setNextTabId(nextTabId + 1);
    if (newTabId > 3) {
      return;
    }
    const newTabTitle = `Tab ${newTabId}`;
    setTabs([...tabs, { id: newTabId, title: newTabTitle }]);
    setActiveTab(newTabId);
  };

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex bg-stone-800 sticky top-0 z-50 opacity-90">
        <div
          className="cursor-pointer bg-neutral-400 hover:bg-neutral-500 border-none text-slate-700 text-center no-underline font-bold inline-block text-base m-2 px-4 py-2 rounded-full"
          onClick={addNewTerminal}
        >
          +
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer px-4 py-2 m-2 rounded-lg ${
              activeTab === tab.id
                ? "bg-neutral-500 text-white"
                : "bg-neutral-400 text-gray-800"
            }`}
            onClick={() => switchTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {tabs.map((tab) => (
        <TerminalSession
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          ReRender={onRerenderEditor}
          inputRef={inputRef}
        />
      ))}
    </div>
  );
}

function TerminalSession({
  tab,
  isActive,
  ReRender,
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal, popTerminal } =
    useTerminal();
  const Emoji = "\u{1F430} Keploy"; // 🐰
  const [input, setInputValue] = useState<string>("");

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <div>
          <strong>Welcome!</strong> to {tab.title}.
        </div>
        <div style={{ fontSize: 20 }}>
          It contains{" "}
          <span style={{ color: "yellow" }}>
            <strong>Keploy</strong>
          </span>
          . Awesome, right?
        </div>
        <br />
        <div>You can write commands here to interact with {tab.title}.</div>
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        const data = await commandStart(`Start`);
        ReRender();
        await pushToHistory(
          <>
            <div>
              {Emoji}: ${data}
            </div>
          </>
        );
      },
      fetch: async () => {
        ReRender();
      },
      stop: async () => {
        const data = await commandStop(`Stop`);
        setTimeout(() => {
          ReRender();
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
          const data = await commandTest(`test`);
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
        const data = await CurlAPI();
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

  return isActive ? (
    <div>
      <div>
      </div>
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{Emoji}:</>}
        commands={commands}
        inputRef={inputRef}
      />
    </div>
  ) : null;
}

export default MainTerminal;
