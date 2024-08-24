import React, { useEffect, FC } from "react";
import SideBarNormal from "./SideBarContent/SideBarNormal";
import { submitCodeSnippet } from "@/app/api/automatic-test-generator/Mutation"; // Ensure correct import path
import { StepsForRecording, StepforTests, StepsforDedup } from "../utils/types";
import { GolangSchema, JavaScriptSchema, PythonSchema } from "../utils/schema";

interface SideBarHandleProps {
  Stage: number;
  onNext: () => void;
  showTerminal: () => void;
  functionName: string;
  onReset: () => void;
  removeSideContent: () => void;
  stepsForRecording: StepsForRecording;
  stepsForTesting: StepforTests;
  stepsForDedup: StepsforDedup;
  SideBarTheme: boolean;
  CodeLanguage: string;
  CodeContent?: string;
  sidebarState: {
    activeStep: number;
    subStepIndex: number;
    dedupStepIndex: number;
    testSubStepIndex: number;
    expandedSteps: number[];
  };
  setSidebarState: React.Dispatch<
    React.SetStateAction<{
      activeStep: number;
      subStepIndex: number;
      dedupStepIndex: number;
      testSubStepIndex: number;
      expandedSteps: number[];
    }>
  >;
}

const SideBarHandle: FC<SideBarHandleProps> = ({
  Stage,
  onNext,
  showTerminal,
  functionName,
  onReset,
  removeSideContent,
  stepsForRecording,
  stepsForTesting,
  stepsForDedup,
  SideBarTheme,
  CodeLanguage,
  CodeContent,
  sidebarState,
  setSidebarState,
}) => {
  const schemaMap: Record<string, string> = {
    Golang: GolangSchema,
    Javascript: JavaScriptSchema,
    Python: PythonSchema,
  };

  const moveToNextStage = async () => {
    if (functionName === "Start") {
      await new Promise((resolve) => setTimeout(resolve, 4000)); // 4-second timeout
    }
    showTerminal();
    onNext();
  };

  useEffect(() => {
    const storeSubmissionCode = async () => {
      try {
        const schema = schemaMap[CodeLanguage] || JavaScriptSchema;
        const response = await submitCodeSnippet({
          language: CodeLanguage,
          code: CodeContent || "",
          schema: schema,
        });
        if (response) {
          localStorage.setItem("code_submission_id", response);
        }
      } catch (error) {
        console.error("Error storing code submission ID:", error);
      }
    };

    if (functionName === "Start") {
      storeSubmissionCode();
    }
  }, [CodeLanguage,functionName]);
  return (
    <div
      className={`h-full ${
        SideBarTheme ? "bg-white" : "bg-[#21252b]"
      } rounded-br-md w-full `}
    >
      <SideBarNormal
        onNext={moveToNextStage}
        onReset={onReset}
        stepsForRecording={stepsForRecording}
        stepsForTesting={stepsForTesting}
        stepsForDedup={stepsForDedup}
        RemoveSideContent={removeSideContent}
        SideBartheme={SideBarTheme}
        activeStep={sidebarState.activeStep}
        subStepIndex={sidebarState.subStepIndex}
        dedupStepIndex={sidebarState.dedupStepIndex}
        testSubStepIndex={sidebarState.testSubStepIndex}
        expandedSteps={sidebarState.expandedSteps}
        setSidebarState={setSidebarState}
      />
    </div>
  );
};

export default SideBarHandle;
