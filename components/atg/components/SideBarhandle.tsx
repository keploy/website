import React, { useEffect, FC } from "react";
import SideBarNormal from "./SideBarContent/SideBarNormal";
import { submitCodeSnippet } from "@/app/api/hello/atg";
import {StepsForRecording,StepforTests, StepsforDedup} from "../Utils/types";
import { GolangSchema, JavaScriptSchema, PythonSchema } from "../Utils/Schema";

type StageComponent = FC;

interface SideBarHandleProps {
  Stage: number;
  onNext: () => void;
  showTerminal: () => void;
  functionName: string;
  onReset: () => void;
  removeSideContent: () => void;
  stepsForRecording: StepsForRecording;
  stepsForTesting: StepforTests;
  stepsForDedup:StepsforDedup
  SideBarTheme: boolean;
  CodeLanguage: string;
  CodeContent?: string;
  sidebarState: {
    activeStep: number;
    subStepIndex: number;
    dedupStepIndex:number;
    testSubStepIndex: number, // Add this line
    expandedSteps: number[];
  };
  setSidebarState: React.Dispatch<
    React.SetStateAction<{
      activeStep: number;
      subStepIndex: number;
      dedupStepIndex:number;  
      testSubStepIndex: number, // Add this line
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
  const moveToNextStage = async () => {
    // if (functionName === "Start") {
    //   var schema = "";
    //   if(CodeLanguage == "GOLANG"){
    //     schema = GolangSchema;
    //   }else if(CodeLanguage == "PYTHON"){
    //     schema = PythonSchema;
    //   }else if(CodeLanguage == "JAVASCRIPT"){
    //     schema = JavaScriptSchema
    //   }
    //   try {
    //     const response = await submitCodeSnippet({
    //       language: CodeLanguage,
    //       code: CodeContent || "",
    //       schema: GolangSchema,
    //     });
    //     if (response) {
    //       localStorage.setItem("code_submission_id", response);
    //     }
    //   } catch (error) {
    //     console.error("Error storing code submission ID:", error);
    //   }
    // }
    if(functionName=="Start"){
      await new Promise(resolve => setTimeout(resolve, 4000)); // 2-second timeout
    }
    showTerminal();
    onNext();
  };

  useEffect(() => {
    const storeSubmissionCode = async () => {
      try {
        const response = await submitCodeSnippet({
          language: CodeLanguage,
          code: CodeContent || "",
          schema: GolangSchema,
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
  },[CodeLanguage, CodeContent]);

  // const handleNext = () => {
  //   onNext();
  //   setSidebarState((prevState) => ({
  //     ...prevState,
  //     subStepIndex: 0,
  //   }));
  // };

  // const handleReset = () => {
  //   onReset();
  //   setSidebarState({
  //     activeStep: 0,
  //     subStepIndex: -1,
  //     testSubStepIndex: -1, // Add this line
  //     expandedSteps: [0],
  //   });
  // };

  // const handleAccordionChange = (index: number) => {
  //   setSidebarState((prevState) => ({
  //     ...prevState,
  //     expandedSteps: prevState.expandedSteps.includes(index)
  //       ? prevState.expandedSteps.filter((step) => step !== index)
  //       : [...prevState.expandedSteps, index],
  //   }));
  // };

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
        testSubStepIndex={sidebarState.testSubStepIndex} // Pass this prop
        expandedSteps={sidebarState.expandedSteps}
        setSidebarState={setSidebarState}
      />
    </div>
  );
};

export default SideBarHandle;
