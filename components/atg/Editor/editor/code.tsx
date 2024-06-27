import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from 'monaco-editor'; // Import monaco-editor types
import { File } from "../utils/file-manager";

export const Code = ({ selectedFile }: { selectedFile: File | undefined }) => {
  if (!selectedFile) return null;

  const monacoInstance = useMonaco();

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

    const stringDelimiters = ['"', "'", '`'];
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
        if (stack.length === 0 || stack[stack.length - 1].char !== matchingBracket[char]) {
          diagnostics.push({
            severity: 8,
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

      // Handle string delimiters
      if (stringDelimiters.includes(char) && prevChar !== '\\') {
        if (stringStack.length === 0 || stringStack[stringStack.length - 1].char !== char) {
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
        startLineNumber: code.slice(0, position).split('\n').length,
        startColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 1,
        endLineNumber: code.slice(0, position).split('\n').length,
        endColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 2,
      });
    });

    // Add unmatched string delimiters to diagnostics
    stringStack.forEach(({ char, position }) => {
      diagnostics.push({
        severity: 8,
        message: `Unmatched string delimiter '${char}'`,
        startLineNumber: code.slice(0, position).split('\n').length,
        startColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 1,
        endLineNumber: code.slice(0, position).split('\n').length,
        endColumn: (code.slice(0, position).split('\n').pop()?.length ?? 0) + 2,
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
