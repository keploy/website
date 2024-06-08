import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { File } from "../utils/file-manager";

export const Code = ({ selectedFile }: { selectedFile: File | undefined }) => {
  if (!selectedFile) return null;

  const monaco = useMonaco();

  const code = selectedFile.content;
  let language = selectedFile.name.split(".").pop();

  if (language === "js" || language === "jsx") language = "javascript";
  else if (language === "ts" || language === "tsx") language = "typescript";
  else if (language === "go") language = "go";

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

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      if (openBrackets.includes(char)) {
        stack.push({ char, position: i });
      } else if (closeBrackets.includes(char)) {
        if (stack.length === 0 || stack[stack.length - 1].char !== matchingBracket[char]) {
          diagnostics.push({
            severity: monaco?.editor.MarkerSeverity.Error ?? 8,
            message: `Unmatched closing bracket '${char}'`,
            startLineNumber: code.slice(0, i).split('\n').length,
            startColumn: (code.slice(0, i).split('\n').pop()?.length ?? 0) + 1,
            endLineNumber: code.slice(0, i).split('\n').length,
            endColumn: (code.slice(0, i).split('\n').pop()?.length ?? 0) + 2,
          });
        } else {
          stack.pop();
        }
      }
    }

    stack.forEach(({ char, position }) => {
      diagnostics.push({
        severity: monaco?.editor.MarkerSeverity.Error ?? 8,
        message: `Unmatched opening bracket '${char}'`,
        startLineNumber: code.slice(0, position).split('\n').length,
        startColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 1,
        endLineNumber: code.slice(0, position).split('\n').length,
        endColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 2,
      });
    });

    return diagnostics;
  };

  useEffect(() => {
    if (monaco) {
      const model = monaco.editor.getModels()[0];
      if (model) {
        const validate = () => {
          const code = model.getValue();
          const diagnostics = validateCode(code);
          monaco.editor.setModelMarkers(model, "owner", diagnostics);
        };

        validate();
        const subscription = model.onDidChangeContent(() => validate());
        return () => subscription.dispose();
      }
    }
  }, [monaco]);

  return (
    <div className="w-full h-full border">
      <Editor
        language={language}
        value={code}
        theme="vs-light"
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
    </div>
  );
};