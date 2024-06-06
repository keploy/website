import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { submitCodeSnippet } from "@/app/api/hello/atg";
import { File } from "../Editor/utils/file-manager";

const StageComponent = ({
  functionName,
  onNext,
  showTerminal,
  hideTerminal,
  language,
  code,
  selectedFile,
}: {
  functionName: string;
  onNext: () => void;
  showTerminal: () => void;
  hideTerminal: () => void;
  language: string;
  code: string | undefined;
  selectedFile: File | undefined;
}) => {

  const MovingtoNextStage = async () => {
    console.log("functionName from Stage Component: ", functionName);
    showTerminal();
    onNext();
  };

  useEffect(() => {
    const storeCodeSubmissionId = async () => {
      if (code && language) {
        const codeSubmissionId = await submitCodeSnippet({ language, code });
        if (codeSubmissionId) {
          localStorage.setItem("code_submission_id", codeSubmissionId);
        }
      }
    };

    if (functionName === "Start") {
      storeCodeSubmissionId();
    }
  }, [functionName, code, language]);

  return (
    <div className="w-full my-2 border p-2 border-gray-300 flex justify-between items-center">
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
