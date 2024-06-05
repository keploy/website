import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRunCommandSubscription } from "@/app/api/hello/atg";

const StageComponent = ({
  functionName,
  onNext,
  showTerminal,
  hideTerminal,
}: {
  functionName:string
  onNext: () => void;
  showTerminal: () => void;
  hideTerminal: () => void;
}) => {
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>("cefb2d5c-6543-432d-9254-4f2859cfe398");
  
  // const {
  //   data,
  //   loading,
  //   error,
  //   handleSubmit,
  //   setCodeSubmissionId,
  //   setCommand,
  //   setSubmitted,
  // } = useRunCommandSubscription({
  //   codeSubmissionId,
  //   command,
  // });

  // useEffect(() => {
  //   switch (StateNumber) {
  //     case 0:
  //       setStateName("Record");
  //       break;
  //     case 1:
  //       setStateName("De-Duplicate");
  //       break;
  //     case 2:
  //       setStateName("Test-Coverage");
  //       break;
  //     default:
  //       setStateName("");
  //   }
  // }, [StateNumber]);

  const MovingtoNextStage = async () => {
    // if (functionName === "record") {
      showTerminal();
    // } else {
      // hideTerminal();
    // }
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
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
};

export default StageComponent;
