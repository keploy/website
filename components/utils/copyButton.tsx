"use client";
import React, { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";

interface CopyButtonProps {
  codeToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ codeToCopy }) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(copyButtonRef.current!, {
      target: () => codeRef.current!,
    });

    clipboard.on("success", (e) => {
      // You can customize the success behavior here (e.g., show a notification).
      console.log("Copied to clipboard:", e.text);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center gap-2 mt-6">
      <div
        ref={codeRef}
        className=" px-2 py-2 bg-gray-300 text-sm flex flex-col-reverse gap-2 overflow-hidden  text-orange-900 rounded-md "
      >
        <div className=" whitespace-nowrap">{codeToCopy}</div>
        <button
          ref={copyButtonRef}
          className="top-0 right-0 px-2 py-2 text-xs bg-orange-500 self-end text-white rounded-md"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CopyButton;
