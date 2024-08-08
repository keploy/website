"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import Appbar from "./components/AppBar";
import { Type, File, Directory } from "./Editor/utils/file-manager";
import { GolangData } from "./data/Golang";
import { PythonData } from "./data/Python";
import { TypeScriptData } from "./data/TypeScript";
import DefaultEditorPage from "./components/DefaultEditorPage";
import MainTerminal from "./terminal";
import { Skeleton } from "@mui/material";
import SideBarHandle from "./components/SideBarhandle";
import {StepsForRecording , StepforTests} from "./Utils/types";
import TopHeader from "./components/TopHeader";
import { findFileByName } from "./Editor/utils/file-manager";
// import { submitCodeSnippet } from "@/app/api/hello/atg";
// import { GolangSchema, JavaScriptSchema, PythonSchema } from "./Utils/Schema";

const dummyDir: Directory = {
  id: "1",
  name: "loading...",
  type: Type.DUMMY,
  parentId: undefined,
  depth: 0,
  dirs: [],
  files: [],
};

const Editor = () => {
  const [rootDir, setRootDir] = useState<Directory>(GolangData);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(true);
  const [lighttheme, setTheme] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [state, setState] = useState(-1);
  const [functionName, setFunctionName] = useState<string>("Start");
  const inputRef = useRef<HTMLInputElement>(null);
  const [language, setSelectedLanguage] = useState<string>("Golang");
  const [showSideContent, setShowSideContent] = useState<boolean>(false);
  const [TerminalStatus, setTerminalStatus] = useState<string>("red");
  const [TerminalHeight, setTerminalHeight] = useState<string>("0");4
  // const [schema,setSchema] = useState<string>(GolangSchema);
  const [stepsForRecording, setStepsForRecording] = useState<StepsForRecording>(
    {
      schemaValidation: false,
      GenerateTest: false,
    }
  );
  const [stepsForTest, setStepsForTests] = useState<StepforTests>(
    {
      Replaying_tests:false,
      generate_report:false,
      
    }
  );
  const [sidebarState, setSidebarState] = useState({
    activeStep: 0,
    subStepIndex: -1,
    testSubStepIndex: -1,
    expandedSteps: [0],
  });

  useEffect(() => {
    updateFunctionName(state);
  }, [state]);

  useEffect(() => {
    if (rootDir === GolangData) {
      const file = findFileByName(GolangData, "server.go");
      setSelectedFile(file);
      setFiles(file ? [file] : []);
      // setSchema(GolangSchema)
    } else if (rootDir === PythonData) {
      const file = findFileByName(PythonData, "main.py");
      setSelectedFile(file);
      setFiles(file ? [file] : []);
      // setSchema(PythonSchema);
    } else if (rootDir === TypeScriptData) {
      const file = findFileByName(TypeScriptData, "server.js");
      setSelectedFile(file);
      setFiles(file ? [file] : []);
      // setSchema(JavaScriptSchema);
    }
  }, [language,rootDir]);

  useEffect(() => {
    const fetchData = () => {
      let data;
      if (language === "Golang") {
        data = GolangData;
      } else if (language === "Python") {
        data = PythonData;
      } else {
        data = TypeScriptData;
      }
      setState(-1);
      setShowTerminal(false);
      setRootDir(data);
    };
    fetchData();
  }, [language]);

  //code-submission
  // useEffect(() => {
  //   const storeSubmissionCode = async () => {
  //     try {
  //       const response = await submitCodeSnippet({
  //         language: language,
  //         code: selectedFile?.content || "",
  //         schema: GolangSchema,
  //       });
  //       if (response) {
  //         localStorage.setItem("code_submission_id", response);
  //       }
  //     } catch (error) {
  //       console.error("Error storing code submission ID:", error);
  //     }
  //   };
  //   if (functionName === "Start") {
  //     storeSubmissionCode();
  //   }
  // },[functionName, language , selectedFile?.content]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();
        setTerminalHeight("max-h-96");
        setTerminalStatus("orange");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (files.length !== 0) {
      setShowSideContent(true);
    } else {
      setShowSideContent(false);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showTerminal, files, TerminalHeight, TerminalStatus]);

  const onLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setSidebarState({
      activeStep: 0,
      subStepIndex: -1,
      testSubStepIndex: -1, // Add this line
      expandedSteps: [0],
    });
  };

  const onSelect = (file: File | undefined) => {
    setSelectedFile(file);
    if (file != undefined) {
      const updatedFiles = files.filter((f) => f.id !== file.id);
      setFiles([...updatedFiles, file]);
    } else {
      setFiles([]);
    }
  };

  const onSelectAppBar = (file: File) => {
    setSelectedFile(file);
  };  

  const CancelButtonAppBar = (file: File) => {
    const updatedFiles = files.filter((f) => f.id !== file.id);
    if (updatedFiles.length >= 1) {
      setFiles(updatedFiles);
      setSelectedFile(updatedFiles[updatedFiles.length - 1]);
    }
  };

  const nextState = () => {
    setState((prevState) => (prevState === 2 ? 0 : prevState + 1));
  };

  // const prevState = () => {
  //   setState((prevState) => (prevState === 0 ? 0 : prevState - 1));
  // };

  const updateFunctionName = (newState: number) => {
    switch (newState) {
      case -1:
        setFunctionName("Start");
        break;
      case 0:
        setFunctionName("record");
        break;
      case 1:
        setFunctionName("deduplicate");
        break;
      case 2:
        setFunctionName("testcoverage");
        break;
      default:
        setFunctionName("");
    }
  };

  // const toggleTerminal = () => {
  //   setShowTerminal((prevShowTerminal) => !prevShowTerminal);
  // };

  const resetEverything = () => {
    // setSelectedFile(undefined);
    setShowTerminal(false);
    setState(-1);
    // setFiles([]);
    setSidebarState({
      activeStep: 0,
      subStepIndex: -1,
      testSubStepIndex: -1, // Add this line
      expandedSteps: [0],
    });
    setStepsForRecording({schemaValidation:false,GenerateTest:false});
    setStepsForTests({Replaying_tests:false,generate_report:false});
    // if (rootDir === GolangData) {
    //   const file = findFileByName(GolangData, "server.go");
    //   setSelectedFile(file);
    //   setFiles(file ? [file] : []);
    // } else if (rootDir === PythonData) {
    //   const file = findFileByName(PythonData, "main.py");
    //   setSelectedFile(file);
    //   setFiles(file ? [file] : []);
    // } else if (rootDir === TypeScriptData) {
    //   const file = findFileByName(TypeScriptData, "server.js");
    //   setSelectedFile(file);
    //   setFiles(file ? [file] : []);
    // }
  };

  const ShowSideContent = () => {
    setShowSideContent(true);
  };
  const RemoveSideContent = () => {
    setShowSideContent(false);
  };

  const settingTheme = () => {
    setTheme(!lighttheme);
  };

  const settingTerminalStatus = (val: string) => {
    setTerminalStatus(val);
  };

  useEffect(() => {
    if (TerminalStatus === "green") {
      setTerminalHeight("max-h-100");
    } else if (TerminalStatus === "orange") {
      setTerminalHeight("max-h-96");
    } else if (TerminalStatus === "red") {
      setTerminalHeight("max-h-0");
    }
    console.log(TerminalStatus);
    console.log(TerminalHeight);
  }, [TerminalStatus, TerminalHeight]);

  return (
    <>
      <div>
        {dataFetched ? (
          <>
            <div className="flex flex-col max-w-7xl mx-auto my-16 m-2 border rounded-md bg-neutral-100 border-gray-300 shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]">
              <TopHeader
                currentSelectedFileName={selectedFile?.name}
                onSelectLanguage={onLanguageSelect}
                settingTheme={settingTheme}
              />

              <div className="flex flex-row h-[80vh] w-full">
                {/* Sidebar */}
                <div
                  className={`flex flex-col transition-all duration-200 ${
                    showSideContent ? "w-64" : "w-2/12"
                  } h-full`}
                >
                  <Sidebar
                    rootDir={rootDir}
                    selectedFile={selectedFile}
                    onSelect={onSelect}
                    currentSelectedFileName={selectedFile?.name}
                    theme={lighttheme}
                  />
                </div>
                <div
                  className={`relative flex flex-col ${
                    showSideContent ? "w-8/12" : "w-full"
                  } h-full transition-all mt- duration-300`}
                >
                  {/* Code and Terminal */}
                  {files.length !== 0 ? (
                    <div className="flex flex-row w-full h-full">
                      <div className="relative w-full h-full flex flex-col">
                        <Appbar
                          selectedFile={selectedFile}
                          selectedFilesArray={files}
                          onSelect={onSelectAppBar}
                          onCancel={CancelButtonAppBar}
                          onSelectLanguage={onLanguageSelect}
                          AppBarTheme={lighttheme}
                          languageApp={language}
                        />
                        <Code
                          selectedFile={selectedFile}
                          showSideBannerBool={showSideContent}
                          RemoveSideBanner={ShowSideContent}
                          settingCodeTheme={lighttheme}
                        />
                        <div
                          className={`absolute bottom-0 z-0 w-full transition-all duration-500 ${TerminalHeight} overflow-hidden`}
                        >
                          <MainTerminal
                            inputRef={inputRef}
                            functionName={functionName}
                            RootDir={rootDir}
                            setRootDir={setRootDir}
                            stepsForRecording={setStepsForRecording}
                            stepsForTesting={setStepsForTests}
                            terminalTheme={lighttheme}
                            setTerminalHeightStatus={settingTerminalStatus}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full w-full top-0">
                      <DefaultEditorPage />
                    </div>
                  )}
                </div>
                {/* Side Content */}
                {showSideContent && (
                  <div
                    className={`w-3/12 grow h-full bg-white rounded-br-md transition-all duration-300`}
                  >
                    <SideBarHandle
                      Stage={state}
                      onNext={nextState}
                      showTerminal={() => {
                        setShowTerminal(true);
                        setTerminalHeight("max-h-96");
                        setTerminalStatus("orange");
                      }}
                      functionName={functionName}
                      onReset={resetEverything}
                      stepsForRecording={stepsForRecording}
                      stepsForTesting={stepsForTest}
                      removeSideContent={RemoveSideContent}
                      SideBarTheme={lighttheme}
                      sidebarState={sidebarState}
                      setSidebarState={setSidebarState}
                      CodeLanguage={language.toUpperCase()}
                      CodeContent={selectedFile?.content}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen max-w-6xl px-4 mx-auto my-16 m-2">
            <div className="flex flex-row items-center gap-4 h-full w-full">
              <Skeleton
                variant="rectangular"
                className="bg-gray-200 animate-pulse h-full w-1/3"
              />
              <Skeleton
                variant="rectangular"
                className="bg-gray-200 animate-pulse h-full w-2/3"
              />
              {error && <div>{error}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Editor;
