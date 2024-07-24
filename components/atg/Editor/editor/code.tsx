import React, { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor"; // Import monaco-editor types
import { File } from "../utils/file-manager";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export const Code = ({
  selectedFile,
  showSideBannerBool,
  RemoveSideBanner,
  settingCodeTheme,
}: {
  selectedFile: File | undefined;
  showSideBannerBool: Boolean;
  RemoveSideBanner: () => void;
  settingCodeTheme:boolean;
}) => {
  if (!selectedFile) return null;

  const monacoInstance = useMonaco();
  const [showText, setShowText] = useState<boolean>(false);
  const code = selectedFile.content;
  let language = selectedFile.name.split(".").pop();

  if (language === "js" || language === "jsx") language = "javascript";
  else if (language === "ts" || language === "tsx") language = "typescript";
  else if (language === "go") language = "go";
  else if (language === "py") language = "python";

  const validateCode = (code: string) => {
    const diagnostics: monaco.editor.IMarkerData[] = [];
    let stack: { char: string; position: number }[] = [];
    const openBrackets = "{[(";
    const closeBrackets = "}])";
    const matchingBracket: { [key: string]: string } = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    const stringDelimiters = ['"', "'", "`"];
    let stringStack: { char: string; position: number }[] = [];

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const prevChar = code[i - 1];

      // Handle opening brackets
      if (openBrackets.includes(char)) {
        stack.push({ char, position: i });
      }
      // Handle closing brackets
      else if (closeBrackets.includes(char)) {
        if (
          stack.length === 0 ||
          stack[stack.length - 1].char !== matchingBracket[char]
        ) {
          diagnostics.push({
            severity: 8,
            message: `Unmatched closing bracket '${char}'`,
            startLineNumber: code.slice(0, i).split("\n").length,
            startColumn: (code.slice(0, i).split("\n").pop()?.length ?? 0) + 1,
            endLineNumber: code.slice(0, i).split("\n").length,
            endColumn: (code.slice(0, i).split("\n").pop()?.length ?? 0) + 2,
          });
        } else {
          stack.pop();
        }
      }

      // Handle string delimiters
      if (stringDelimiters.includes(char) && prevChar !== "\\") {
        if (
          stringStack.length === 0 ||
          stringStack[stringStack.length - 1].char !== char
        ) {
          stringStack.push({ char, position: i });
        } else {
          stringStack.pop();
        }
      }
    }

    // Add unmatched opening brackets to diagnostics
    stack.forEach(({ char, position }) => {
      diagnostics.push({
        severity: 8,
        message: `Unmatched opening bracket '${char}'`,
        startLineNumber: code.slice(0, position).split("\n").length,
        startColumn:
          (code.slice(0, position).split("\n").pop()?.length ?? 0) + 1,
        endLineNumber: code.slice(0, position).split("\n").length,
        endColumn: (code.slice(0, position).split("\n").pop()?.length ?? 0) + 2,
      });
    });

    // Add unmatched string delimiters to diagnostics
    stringStack.forEach(({ char, position }) => {
      diagnostics.push({
        severity: 8,
        message: `Unmatched string delimiter '${char}'`,
        startLineNumber: code.slice(0, position).split("\n").length,
        startColumn:
          (code.slice(0, position).split("\n").pop()?.length ?? 0) + 1,
        endLineNumber: code.slice(0, position).split("\n").length,
        endColumn: (code.slice(0, position).split("\n").pop()?.length ?? 0) + 2,
      });
    });

    return diagnostics;
  };

  useEffect(() => {
    if (monacoInstance) {
      const model = monacoInstance.editor.getModels()[0];
      if (model) {
        const validate = () => {
          const code = model.getValue();
          const diagnostics = validateCode(code);
          monacoInstance.editor.setModelMarkers(model, "owner", diagnostics);
        };

        validate(); // Initial validation
        const subscription = model.onDidChangeContent(() => validate());
        return () => subscription.dispose();
      }
    }
  }, [monacoInstance]);

  return (
    <div className={`relative w-full h-full  ${settingCodeTheme?"border border-gray-300":""}    rounded-lg`}>
      <Editor
        language={language}
        value={code}
        theme={settingCodeTheme?"light":"vs-dark"}
        options={{
          scrollBeyondLastLine: false,
          fontSize: 15,
        }}
        onChange={(newValue) => {
          if (newValue !== undefined) {
            selectedFile.content = newValue;
          }
        }}
      />
      {!showSideBannerBool && (
        <div
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          className={`p-2 absolute z-10 hover:cursor-pointer border border-gray-500 right-0 top-1/2 bg-secondary-300 flex items-center justify-center shadow-lg transition-all duration-500`}
          style={{
            transform: "translateY(-50%)",
            height: "3rem",
            width: showText ? "200px" : "40px",
          }} // Adjust width values as needed
          onClick={() => {
            RemoveSideBanner();
            setShowText(false);
          }}
        >
          <ChevronLeftIcon className="text-gray-50" />
          <div
            className={`overflow-hidden transition-width duration-500 ${
              showText ? "w-full" : "w-0"
            }`}
          >
            <p className={`text-gray-50 font-bold ml-2 text-sm`}>
              Side Content
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
