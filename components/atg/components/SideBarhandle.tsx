import React, { useEffect, useState, FC } from "react";
import SideBarNormal from "./SideBarContent/SideBarNormal";
import { submitCodeSnippet } from "@/app/api/hello/atg";
import StepsForRecording from "../StepTypes/types";
type StageComponent = FC;

const SideBarHandle: FC<{
  Stage: number;
  onNext: () => void;
  showTerminal: () => void;
  functionName:string;
  language:string;
  code:string | undefined;
  onReset:()=>void;
  stepsForRecording:StepsForRecording

}> = ({ Stage, onNext, showTerminal , functionName , language , code , onReset , stepsForRecording}) => {

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

  return (
    <div className="border border-gray-300 h-full">
      <SideBarNormal onNext={MovingtoNextStage} onReset={onReset} stepsForRecording={stepsForRecording} />
    </div>
  );
};

export default SideBarHandle;
