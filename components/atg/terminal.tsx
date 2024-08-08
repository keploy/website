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
import {StepforTests, StepsForRecording} from "./Utils/types";
import RecordTerminalSession from "./Terminal/TerminalComponents/RecordTerminal";
import DeduplicateTerminalSession from "./Terminal/TerminalComponents/DedupulicationTerminal";
import TestCoverageTerminalSession from "./Terminal/TerminalComponents/TestingTerminal";
const Emoji = "User@1231-Keploy:"; // 🐰

function MainTerminal({
  inputRef,
  functionName,
  RootDir,
  setRootDir,
  stepsForRecording,
  stepsForTesting,
  terminalTheme,
  setTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  RootDir: Directory;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  stepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  stepsForTesting: Dispatch<SetStateAction<StepforTests>>;
  terminalTheme: boolean;
  setTerminalHeightStatus: (val: string) => void;
}) {
  return (
    <div className="h-full">
      {functionName === "record" && (
        <RecordTerminalSession
          inputRef={inputRef}
          rootDir={RootDir}
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
          setStepsForTesting={stepsForTesting}
          TestTheme={terminalTheme}
          TestSetTerminalHeightStatus={setTerminalHeightStatus}
          setRootDir={setRootDir}
        />
      )}
    </div>
  );
}


export default MainTerminal;
