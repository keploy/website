import React from "react";
import Editor from "@monaco-editor/react";
import { File } from "../utils/file-manager";
import styled from "@emotion/styled";

export const Code = ({ selectedFile }: { selectedFile: File | undefined }) => {
  if (!selectedFile) return null;

  const code = selectedFile.content;
  let language = selectedFile.name.split(".").pop();

  if (language === "js" || language === "jsx") language = "javascript";
  else if (language === "ts" || language === "tsx") language = "typescript";

  return (
      <div className=" w-full border">
        <Editor
          height="95vh"
          language={language}
          value={code}
          theme="vs-light"
          options={{
            scrollBeyondLastLine:false,
            fontSize:15 
          }}
          
        />
      </div>
  );
};

