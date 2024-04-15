// Home.js

"use client";
import Editor from "@/components/automatic-test-Generation/editor";
import MainTerminal from "@/components/automatic-test-Generation/terminal";
import { useState , useRef } from "react";
import SideContent from "@/components/automatic-test-Generation/SideContent";
export default function Home() {
  const [fetchCounter, setFetchCounter] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
 
  // Handler function to increment the fetch counter
  const handleFetch = () => {
    setFetchCounter(prevCounter => prevCounter + 1); // Use functional form of setState
  };
  const handleRecord = () => {
    if(inputRef.current){
      inputRef.current.value='keploy record -c "npm run dev"';
    } // Use functional form of setState
  };
  const handleStop = () => {
    if(inputRef.current){
      inputRef.current.value='stop';
    } // Use functional form of setState
  };
    
  return (
    <div className="flex flex-row max-h-screen m-2">
      <div className="flex flex-col m-4 z-10 w-2/3 gap-1">
        <div className="w-full h-full  rounded  border border-neutral-700 shadow-2xl shadow-neutral-700 flex-grow">
          <Editor rerender={fetchCounter} handleFetch={handleFetch} handleRecord={handleRecord} handleStop={handleStop} />
        </div>
        <div className="w-full h-full overflow-y-auto rounded border bg-backGroundTerminal border-neutral-700 shadow-2xl shadow-neutral-700 flex-grow">
        <MainTerminal onRerenderEditor={handleFetch} inputRef={inputRef} />
         </div>
      </div>
      <div className="m-5 w-1/3 rounded border border-neutral-700 shadow-2xl shadow-neutral-700 ">
        <SideContent />
      </div>
    </div>
  );
}
