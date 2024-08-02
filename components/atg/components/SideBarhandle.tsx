import React, { useEffect, FC } from "react";
import SideBarNormal from "./SideBarContent/SideBarNormal";
import { submitCodeSnippet } from "@/app/api/hello/atg";
import StepsForRecording from "../Utils/types";
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
  SideBarTheme: boolean;
  CodeLanguage: string;
  CodeContent?: string;
  sidebarState: {
    activeStep: number;
    subStepIndex: number;
    expandedSteps: number[];
  };
  setSidebarState: React.Dispatch<
    React.SetStateAction<{
      activeStep: number;
      subStepIndex: number;
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
  SideBarTheme,
  CodeLanguage,
  CodeContent,
  sidebarState,
  setSidebarState,
}) => {
  const moveToNextStage = async () => {
    if (functionName === "Start") {
      var schema = "";
      if(CodeLanguage == "GOLANG"){
        schema = GolangSchema;
      }else if(CodeLanguage == "PYTHON"){
        schema = PythonSchema;
      }else if(CodeLanguage == "JAVASCRIPT"){
        schema = JavaScriptSchema
      }
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
    }
    if(functionName=="Start"){
      await new Promise(resolve => setTimeout(resolve, 4000)); // 2-second timeout
    }
    showTerminal();
    onNext();
  };

  // useEffect(() => {
  //   const storeSubmissionCode = async () => {
  //     try {
  //       const response = await submitCodeSnippet({
  //         language: CodeLanguage,
  //         code: CodeContent || "",
  //         schema: GolangSchema,
  //       });
  //       if (response) {
  //         localStorage.setItem("code_submission_id", response);
  //       }
  //     } catch (error) {
  //       console.error("Error storing code submission ID:", error);
  //     }
  //   };
  //   if (functionName === "Start") {
  //     storeSubmissionCode();
  //   }
  // },[functionName, CodeLanguage, CodeContent]);

  const handleNext = () => {
    onNext();
    setSidebarState((prevState) => ({
      ...prevState,
      subStepIndex: 0,
    }));
  };

  const handleReset = () => {
    onReset();
    setSidebarState({
      activeStep: 0,
      subStepIndex: -1,
      expandedSteps: [0],
    });
  };

  const handleAccordionChange = (index: number) => {
    setSidebarState((prevState) => ({
      ...prevState,
      expandedSteps: prevState.expandedSteps.includes(index)
        ? prevState.expandedSteps.filter((step) => step !== index)
        : [...prevState.expandedSteps, index],
    }));
  };

  return (
    <div
      className={`h-full ${
        SideBarTheme ? "bg-white" : "bg-[#21252b]"
      } rounded-br-md`}
    >
      <SideBarNormal
        onNext={moveToNextStage}
        onReset={handleReset}
        stepsForRecording={stepsForRecording}
        RemoveSideContent={removeSideContent}
        SideBartheme={SideBarTheme}
        activeStep={sidebarState.activeStep}
        subStepIndex={sidebarState.subStepIndex}
        expandedSteps={sidebarState.expandedSteps}
        setSidebarState={setSidebarState}
      />
    </div>
  );
};

export default SideBarHandle;
