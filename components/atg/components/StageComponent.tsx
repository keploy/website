import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { submitCodeSnippet } from "@/app/api/hello/atg";

const StageComponent = ({
  functionName,
  onNext,
  showTerminal,
  hideTerminal,
  language,
  code,
}: {
  functionName: string;
  onNext: () => void;
  showTerminal: () => void;
  hideTerminal: () => void;
  language: string;
  code: string | undefined;
}) => {
  const initialPushRef = useRef(false); // Ref to track the initial push

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

    if (functionName === "Start" && !initialPushRef.current) {
      storeCodeSubmissionId();
      initialPushRef.current = true;
    }
  }, [functionName, code, language]); // Add dependencies if needed

  return (
    <div className="w-full  border p-2 border-gray-300 flex justify-between items-center">
      <Button
        color="primary"
        className="hover:bg-slate-700 hover:text-white transition duration-300"
        onClick={MovingtoNextStage}
      >
        {functionName}
      </Button>
    </div>
  );
};

export default StageComponent;
