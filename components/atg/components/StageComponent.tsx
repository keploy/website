import React from "react";
import { Button } from "@mui/material";

const StageComponent = ({
  functionName,
  onNext,
  showTerminal,
  hideTerminal,
}: {
  functionName: string;
  onNext: () => void;
  showTerminal: () => void;
  hideTerminal: () => void;
}) => {

  const MovingtoNextStage = async () => {
    console.log("functionName from Stage Component: ", functionName);
    showTerminal();
    onNext();
  };

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
