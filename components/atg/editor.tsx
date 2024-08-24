"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import Appbar from "./components/AppBar";
import { Type, File, Directory } from "./Editor/utils/file-manager";
import { FileData } from "./data/File";
import DefaultEditorPage from "./components/DefaultEditorPage";
import MainTerminal from "./terminal";
import { Skeleton } from "@mui/material";
import SideBarHandle from "./components/SideBarhandle";
import { StepsForRecording, StepforTests, StepsforDedup } from "./utils/types";
import TopHeader from "./components/TopHeader";
import { findFileByName } from "./Editor/utils/file-manager";
import useFullScreen from "./fullscreen"; // Import the hook
import { fetchDirectoryStructure } from "./Editor/utils/file-manager";
const dummyDir: Directory = {
  id: "1",
  name: "loading...",
  type: Type.DUMMY,
  parentId: undefined,
  depth: 0,
  dirs: [],
  files: [],
};

const Editor = ({ goFullScreen = false }: { goFullScreen?: boolean }) => {
  const [rootDir, setRootDir] = useState<Directory>(dummyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(true);
  const [lighttheme, setTheme] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [state, setState] = useState(-1);
  const [functionName, setFunctionName] = useState<string>("Start");
  const inputRef = useRef<HTMLInputElement>(null);
  const [language, setSelectedLanguage] = useState<string>("Javascript");
  const [showSideContent, setShowSideContent] = useState<boolean>(false);
  const [TerminalStatus, setTerminalStatus] = useState<string>("red");
  const [TerminalHeight, setTerminalHeight] = useState<string>("0");
  const [FullScreen, setFullScreen] = useState<boolean>(false);
  const [stepsForRecording, setStepsForRecording] = useState<StepsForRecording>(
    {
      schemaValidation: false,
      GenerateTest: false,
    }
  );
  const [stepsForTest, setStepsForTests] = useState<StepforTests>({
    Replaying_tests: false,
    generate_report: false,
  });
  const [stepsForDedup, setStepsForDedup] = useState<StepsforDedup>({
    Dedup: false,
    Duplicates_removed: false,
  });
  const [sidebarState, setSidebarState] = useState({
    activeStep: 0,
    subStepIndex: -1,
    dedupStepIndex: -1,
    testSubStepIndex: -1,
    expandedSteps: [0],
  });
  const settingFullScreenTrue = () => {
    setFullScreen(true);
  };

  const settingFullScreenFalse = () => {
    setShowSideContent(true);
    setFullScreen(false);
  };

  useEffect(() => {
    console.log(FullScreen);
  }, [FullScreen]);

  const fetchDirectoryContents = async (lang: string) => {
    try {
      let url = "Javascript";
      if (lang === "Golang") url = "Golang";
      else if (lang === "Python") url = "Python";

      const directory = await fetchDirectoryStructure(url);
      setRootDir(directory);
      setDataFetched(true);
    } catch (err) {
      console.error("Failed to fetch directory structure:", err);
      setError("Failed to fetch directory structure.");
      setDataFetched(false);
    }
  };

  useEffect(() => {
    fetchDirectoryContents(language);
  }, [language]);

  const { elementRef, enterFullScreen, exitFullScreen } = useFullScreen({
    onEnter: settingFullScreenTrue,
    onExit: settingFullScreenFalse,
  });

  useEffect(() => {
    updateFunctionName(state);
  }, [state]);

  useEffect(() => {
    let file;
    if (rootDir.name === "goapp") {
      file = findFileByName(rootDir, "server.go");
    } else if (rootDir.name === "python") {
      file = findFileByName(rootDir, "main.py");
    } else if (rootDir.name === "javaScript") {
      file = findFileByName(rootDir, "server.js");
    }

    setSelectedFile(file);
    setFiles(file ? [file] : []);
  }, [rootDir, language]);

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
      dedupStepIndex: -1,
      testSubStepIndex: -1,
      expandedSteps: [0],
    });
    setStepsForRecording({ schemaValidation: false, GenerateTest: false });
    setStepsForDedup({ Dedup: false, Duplicates_removed: false });
    setStepsForTests({ Replaying_tests: false, generate_report: false });
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

  const resetEverything = () => {
    setShowTerminal(false);
    setState(-1);
    setSidebarState({
      activeStep: 0,
      subStepIndex: -1,
      dedupStepIndex: -1,
      testSubStepIndex: -1,
      expandedSteps: [0],
    });
    setStepsForRecording({ schemaValidation: false, GenerateTest: false });
    setStepsForTests({ Replaying_tests: false, generate_report: false });
    setStepsForDedup({ Dedup: false, Duplicates_removed: false });
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
      setTerminalHeight("max-h-full");
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
      <div className="bg-neutral-100">
        {dataFetched ? (
          <>
            <div
              ref={elementRef}
              className="flex flex-col max-w-7xl mx-auto my-16 m-2 border rounded-md bg-neutral-100 border-gray-300 shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]"
            >
              <TopHeader
                settingTheme={settingTheme}
                enterFullScreen={() => {
                  enterFullScreen();
                  setFullScreen(true);
                }}
                enterSmallScreen={() => {
                  exitFullScreen();
                  setFullScreen(false);
                }}
                fullscreen={FullScreen}
              />

              <div
                className={`flex flex-row ${
                  FullScreen ? "h-[100vh]" : "h-[80vh]"
                } ${lighttheme ? "bg-white" : "bg-[#282c34]"}  w-full`}
              >
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
                      <div className="relative w-full h-full  flex flex-col">
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
                          selectedFileName={selectedFile?.name}
                          showSideBannerBool={showSideContent}
                          RemoveSideBanner={ShowSideContent}
                          settingCodeTheme={lighttheme}
                          isFullScreen={FullScreen} // Pass FullScreen state
                        />
                        {state > -1 && (
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
                              stepsForDedup={setStepsForDedup}
                              terminalTheme={lighttheme}
                              setTerminalHeightStatus={settingTerminalStatus}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full w-full top-0">
                      <DefaultEditorPage lightTheme={lighttheme} />
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
                      stepsForDedup={stepsForDedup}
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
