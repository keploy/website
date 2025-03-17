import React, { useEffect, useState, useRef } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { File } from "../utils/file-manager";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEditTestSubscription } from "@/app/api/automatic-test-generator/Subscription";
export const Code = ({
  selectedFile,
  showSideBannerBool,
  RemoveSideBanner,
  settingCodeTheme,
  isFullScreen,
  selectedFileName,
}: {
  selectedFile: File | undefined;
  showSideBannerBool: Boolean;
  RemoveSideBanner: () => void;
  settingCodeTheme: boolean;
  isFullScreen: boolean;
  selectedFileName: string | undefined;
}) => {
  if (!selectedFile) return null;

  const monacoInstance = useMonaco();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [showText, setShowText] = useState<boolean>(false);
  const testFileRegex = /^test-\d+\.yaml$/; // Regular expression to match 'test-<number>.yaml'
  const [codeSubmissionId, setSubmissionId] = useState("");
  const { handleSubmit } = useEditTestSubscription(codeSubmissionId);
  const code = selectedFile.content;
  let language = selectedFile.name.split(".").pop();
  
  if (language === "js" || language === "jsx") language = "javascript";
  else if (language === "go") language = "go";
  else if (language === "py") language = "python";
  
  useEffect(()=>{   
    const storedCodeSubmissionId = localStorage.getItem("code_submission_id") || "";
    setSubmissionId(storedCodeSubmissionId)
    // console.log("new stored id: ", codeSubmissionId);
  },[localStorage , selectedFile])

  const handleFileChange = async (newValue: string | undefined) => {
    if (newValue !== undefined) {
      selectedFile.content = newValue;
  
      // Check if the filename matches the pattern 'test-<number>.yaml'
      if (selectedFileName && testFileRegex.test(selectedFileName)) {
        const testSetName = localStorage.getItem("selectedTestSetDir") || "";
      
        // Use the subscription
        const { data, loading, error } = await handleSubmit(newValue, testSetName, selectedFileName);
  
        console.log("changed file.");
  
        try {
  
          console.log("Subscription result", { data, loading, error });
  
          if (!loading && data) {
            // Handle successful subscription data here
            console.log("Subscription successful:", data);
          } else if (error) {
            // Handle subscription error here
            console.error("Subscription error:", error);
          }
        } catch (error) {
          console.error("Promise rejected:", error);
        }
  
      }
    }
  };
  

  useEffect(() => {
    if (monacoInstance && editorRef.current) {
      const layoutEditor = () => {
        editorRef.current?.layout();
      };
      layoutEditor();

      // Add event listener to window resize to handle screen transition
      window.addEventListener("resize", layoutEditor);
      return () => window.removeEventListener("resize", layoutEditor);
    }
  }, [isFullScreen, monacoInstance]);

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

  useEffect(() => {
    if (monacoInstance) {
      monacoInstance.editor.defineTheme("atom-one-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "", background: "282c34", foreground: "abb2bf" },
          { token: "comment", foreground: "5c6370", fontStyle: "italic" },
          { token: "string", foreground: "98c379" },
          { token: "keyword", foreground: "c678dd" },
          { token: "number", foreground: "d19a66" },
          { token: "type", foreground: "e06c75" },
          { token: "function", foreground: "61afef" },
        ],
        colors: {
          "editor.background": "#282c34",
          "editor.foreground": "#abb2bf",
          "editor.lineHighlightBackground": "#2c313a",
          "editorCursor.foreground": "#528bff",
          "editorIndentGuide.background": "#3b4048",
          "editorIndentGuide.activeBackground": "#3b4048",
        },
      });
      if (settingCodeTheme) {
        monacoInstance.editor.setTheme("light");
      } else {
        monacoInstance.editor.setTheme("atom-one-dark");
      }
    }
  }, [monacoInstance, settingCodeTheme]);

  return (
    <div
      className={`${showSideBannerBool ? "":""} ${isFullScreen ? "h-full" : "h-[75vh]"} ${
        settingCodeTheme ? "border border-gray-300" : ""
      }`}
    >
      <Editor
        language={language}
        value={code}
        theme={settingCodeTheme ? "light" : "atom-one-dark"}
        options={{
          scrollBeyondLastLine: false,
          fontSize: 15,
        }}
        onChange={handleFileChange}
        onMount={(editor) => (editorRef.current = editor)} // Store editor instance
      />
      {!showSideBannerBool && (
  <div
    onMouseEnter={() => setShowText(true)}
    onMouseLeave={() => setShowText(false)}
    className={`p-2 absolute z-10 hover:cursor-pointer border border-gray-500 border-b-0 right-0 top-1/2 bg-secondary-300 flex items-center justify-center shadow-lg transition-all duration-500`}
    style={{
      transform: "translateY(-50%)",
      height: "3rem",
      width: showText ? "200px" : "40px",
    }}
    onClick={() => {
      RemoveSideBanner();
      setShowText(false);
    }}
  >
    <div className="flex flex-row items-center justify-start">
      <ChevronLeftIcon className="text-gray-50" />
      <div
        className={`overflow-hidden transition-width duration-500 ${
          showText ? "w-full" : "w-0"
        }`}
      >
        <p className={`text-gray-50 font-bold ml-2 text-sm whitespace-nowrap`}>
          Side Content
        </p>
      </div>
    </div>
  </div>
)}
    </div>
  );
};
