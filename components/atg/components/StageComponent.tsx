import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const StageComponent = ({
  StateNumber,
  onNext,
  onPrev,
  showTerminal,
  hideTerminal,
}: {
  StateNumber: number;
  onNext: () => void;
  onPrev: () => void;
  showTerminal: () => void;
  hideTerminal: () => void;
}) => {
  const [stateName, setStateName] = useState<string>("");

  useEffect(() => {
    switch (StateNumber) {
      case 0:
        setStateName("Record");
        break;
      case 1:
        setStateName("De-Duplicate");
        break;
      case 2:
        setStateName("Test-Coverage");
        break;
      default:
        setStateName("");
    }
  }, [StateNumber]);

  const MovingtoNextStage = async () => {
    if (stateName === "Record") {
      showTerminal();
    } else {
      hideTerminal();
    }
    onNext();
  };

  return (
    <div className="w-full my-2 border p-2 border-gray-300 flex justify-between items-center">
      <Button
        color="primary"
        className="hover:bg-slate-700 hover:text-white transition duration-300"
        onClick={MovingtoNextStage}
      >
        {stateName}
      </Button>
    </div>
  );
};

export default StageComponent;
