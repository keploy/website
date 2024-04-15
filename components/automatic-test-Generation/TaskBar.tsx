import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPlay, faStop, faFlask } from "@fortawesome/free-solid-svg-icons";

const TaskBar = ({ handleFetch, handleRecord, handleStop }: { handleFetch: any, handleRecord: () => void, handleStop: () => void }) => {

  return (
    <div className="bg-backgroundBody p-2 flex flex-row justify-center border border-t-neutral-700 border-r-0 border-l-0 border-b-0">
      <div className="flex flex-row gap-28">
        <button onClick={handleRecord}
          className="bg-neutral-500 p-2 px-4 rounded text-gray-300 hover:bg-stone-400 hover:text-stone-800 duration-200 border border-stone-700 ">
          <FontAwesomeIcon icon={faMicrophone} className="mr-1" />
          Record
        </button>
        <button onClick={handleStop}
          className="bg-neutral-500 p-2 px-5 rounded text-gray-300 hover:bg-stone-400 hover:text-stone-800 duration-200 border border-stone-700  ">
          <FontAwesomeIcon icon={faStop} className="mr-1" />
          Replay
        </button>
        <button className="bg-neutral-500 p-2 px-5 rounded text-gray-300 hover:bg-stone-400 hover:text-stone-800 duration-200 border border-stone-700  ">
          <FontAwesomeIcon icon={faFlask} className="mr-1" />
          Test
        </button>
        <button onClick={handleFetch}
          className="bg-neutral-500 p-2 px-4 rounded text-gray-300 hover:bg-stone-400 hover:text-stone-800 duration-200 border border-stone-700  ">
          <FontAwesomeIcon icon={faPlay} className="mr-1" />
          Run
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
