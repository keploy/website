"use client";
import React, {
  Dispatch,
  SetStateAction,
} from "react";
import { Directory } from "./Editor/utils/file-manager";
import {StepforTests, StepsForRecording, StepsforDedup} from "./utils/types";
import RecordTerminalSession from "./Terminal/TerminalComponents/RecordTerminal";
import DeduplicateTerminalSession from "./Terminal/TerminalComponents/DedupulicationTerminal";
import TestCoverageTerminalSession from "./Terminal/TerminalComponents/TestingTerminal";

function MainTerminal({
  inputRef,
  functionName,
  RootDir,
  setRootDir,
  stepsForRecording,
  stepsForTesting,
  stepsForDedup,
  terminalTheme,
  setTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  functionName: string;
  RootDir: Directory;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  stepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  stepsForTesting: Dispatch<SetStateAction<StepforTests>>;
  stepsForDedup:Dispatch<SetStateAction<StepsforDedup>>;
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
          stepForDedup={stepsForDedup}
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
