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
import { Directory } from "./Editor/utils/file-manager";
import { Type } from "./Editor/utils/file-manager";
import StepsForRecording from "./Utils/types";
import RecordTerminalSession from "./Terminal/TerminalComponents/RecordTerminal";
import DeduplicateTerminalSession from "./Terminal/TerminalComponents/DedupulicationTerminal";
import TestCoverageTerminalSession from "./Terminal/TerminalComponents/TestingTerminal";
const Emoji = "User@1231-Keploy:"; // 🐰

function MainTerminal({
  inputRef,
  functionName,
  setRootDir,
  stepsForRecording,
  terminalTheme,
  setTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  stepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  terminalTheme: boolean;
  setTerminalHeightStatus: (val: string) => void;
}) {
  return (
    <div className="h-full">
      {functionName === "record" && (
        <RecordTerminalSession
          inputRef={inputRef}
          setRootDir={setRootDir}
          setStepsForRecording={stepsForRecording}
          RecordTheme={terminalTheme}
          RecordSetTerminalHeightStatus={setTerminalHeightStatus}
        />
      )}
      {functionName === "deduplicate" && (
        <DeduplicateTerminalSession
          inputRef={inputRef}
          DedupTheme={terminalTheme}
          DeDupSetTerminalHeightStatus={setTerminalHeightStatus}
        />
      )}
      {functionName === "testcoverage" && (
        <TestCoverageTerminalSession
          inputRef={inputRef}
          TestTheme={terminalTheme}
          TestSetTerminalHeightStatus={setTerminalHeightStatus}
        />
      )}
    </div>
  );
}


export default MainTerminal;
