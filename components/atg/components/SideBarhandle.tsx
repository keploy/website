import React, { useEffect, FC } from "react";
import SideBarNormal from "./SideBarContent/SideBarNormal";
import { submitCodeSnippet } from "@/app/api/hello/atg";
import StepsForRecording from "../StepTypes/types";

type StageComponent = FC;

const SideBarHandle: FC<{
  Stage: number;
  onNext: () => void;
  showTerminal: () => void;
  functionName: string;
  language: string;
  code: string | undefined;
  onReset: () => void;
  removeSideContent: () => void;
  stepsForRecording: StepsForRecording;
  SideBarTheme: boolean;
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
}> = ({
  Stage,
  onNext,
  showTerminal,
  functionName,
  language,
  code,
  onReset,
  stepsForRecording,
  removeSideContent,
  SideBarTheme,
  sidebarState,
  setSidebarState,
}) => {
  const MovingtoNextStage = async () => {
    showTerminal();
    onNext();
  };

  useEffect(() => {
    const storeCodeSubmissionId = async () => {
      if (code && language) {
        try {
          const codeSubmissionId = await submitCodeSnippet({ language, code });
          if (codeSubmissionId) {
            localStorage.setItem("code_submission_id", codeSubmissionId);
          }
        } catch (error) {
          console.log("Error storing code submission ID:", error);
        }
      }
    };

    if (functionName === "Start") {
      storeCodeSubmissionId();
    }
  }, [functionName, code, language]); // Add dependencies if needed

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
        onNext={MovingtoNextStage}
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
