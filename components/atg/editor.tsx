"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import Appbar from "./components/AppBar";
import { Type, File, Directory } from "./Editor/utils/file-manager";
import { GolangData } from "./data/Golang";
import { PythonData } from "./data/Python";
import { TypeScriptData } from "./data/TypeScript";
import DefaultEditorPage from "./components/DefaultEditorPage";
import CustomizedSteppers from "./components/HorizontalStepper";
import MainTerminal from "./terminal";
import { Skeleton } from "@mui/material";
import SideBarhandle from "./components/SideBarhandle";
import StepsForRecording from "./StepTypes/types";
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
  const [rootDir, setRootDir] = useState<Directory>(dummyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(true);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [state, setState] = useState(-1);
  const [functionName, setFunctionName] = useState<string>("Start");
  const inputRef = useRef<HTMLInputElement>(null);
  const [language, setSelectedLanguage] = useState<string>("Golang");
  const [showSideContent,setShowSideContent] = useState<boolean>(true);
  const [stepsForRecording, setStepsForRecording] = useState<StepsForRecording>(
    {
      starting: false,
      curlApiHitting: false,
    }
  );
  useEffect(() => {
    updateFunctionName(state);
  }, [state]);

  useEffect(() => {}, [stepsForRecording]);

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

  useEffect(() => {}, [rootDir]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();
        toggleTerminal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showTerminal]);

  const onLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
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
    setFiles(updatedFiles);
    setSelectedFile(updatedFiles[updatedFiles.length - 1]);
  };

  const nextState = () => {
    setState((prevState) => (prevState === 2 ? 0 : prevState + 1));
  };

  const prevState = () => {
    setState((prevState) => (prevState === 0 ? 0 : prevState - 1));
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

  const toggleTerminal = () => {
    setShowTerminal((prevShowTerminal) => !prevShowTerminal);
  };

  const showTerminalFunction = () => {
    setShowTerminal(true);
  };

  const hideTerminalFunction = () => {
    setShowTerminal(false);
  };

  const resetEverthing = () => {
    setSelectedFile(undefined);
    setShowTerminal(false);
    setState(-1);
    setFiles([]);
  };

  const ShowSideContent = () =>{
    setShowSideContent(true);
  }
  const RemoveSideContent = () =>{
    setShowSideContent(false);
    console.log("here is debug")
  }

  useEffect(()=>{
    console.log(showSideContent);
  },[showSideContent])


  return (
    <>
      <div>
        {dataFetched ? (
          <>
            <div className="flex flex-col max-w-7xl  px-4 mx-auto my-16 m-2">
              <CustomizedSteppers
                activeStep={state}
                onNext={nextState}
                onPrev={prevState}
              />
              <div className="flex flex-row mt-5 my-10 ">
                <div
                  className={`flex flex-col transition-all duration-200 w-3/12  border border-gray-300 border-t-black border-b-black border-b-4 border-t-4 rounded-md shadow-md `}
                >
                  {/* <LanguageSelector
                    onSelectLanguageForCode={onLanguageSelect}
                  /> */}
                  <Sidebar
                    rootDir={rootDir}
                    selectedFile={selectedFile}
                    onSelect={onSelect}
                  />
                </div>
                <div
                  className={`relative flex flex-col ml-2 w-full h-full transition-all duration-300`}
                >
                  <EditorContainer>
                    <div className="flex flex-row w-full h-full">
                      <div className="relative w-full h-full flex flex-col shadow-custom " >
                        <Appbar
                          selectedFile={selectedFile}
                          selectedFilesArray={files}
                          onSelect={onSelectAppBar}
                          onCancel={CancelButtonAppBar}
                          onSelectLanguage={onLanguageSelect}
                        />
                        {/* {files.length !== 0 && (
                          <StageComponent
                            functionName={functionName}
                            onNext={nextState}
                            showTerminal={() => {
                              setShowTerminal(true);
                            }}
                            hideTerminal={toggleTerminal}
                            language={"GOLANG"}
                            code={selectedFile?.content}
                          />
                        )} */}
                        <Code selectedFile={selectedFile} />
                        <div
                          className={`absolute bottom-0 z-0 w-full transition-all duration-500 ${
                            showTerminal ? "max-h-96" : "max-h-0"
                          } overflow-hidden`}
                        >
                          <MainTerminal
                            inputRef={inputRef}
                            functionName={functionName}
                            setRootDir={setRootDir}
                            hideTerminal={hideTerminalFunction}
                            stepsForRecording={setStepsForRecording}
                          />
                        </div>
                      </div>
                    </div>
                    {files.length === 0 && (
                      <div className="absolute w-full top-0 h-full">
                        <DefaultEditorPage />
                      </div>
                    )}
                  </EditorContainer>
                </div>
                  {showSideContent && files.length != 0 && (
                    <div className=" w-2/6 h-full ml-2 border border-gray-300 border-t-black border-b-black border-b-4 border-t-4 rounded-md shadow-md">
                      <SideBarhandle
                        Stage={state}
                        onNext={nextState}
                        showTerminal={() => {
                          setShowTerminal(true);
                        }}
                        functionName={functionName}
                        code={selectedFile?.content}
                        language="GOLANG"
                        onReset={resetEverthing}
                        stepsForRecording={stepsForRecording}
                        removeSideContent={RemoveSideContent}
                      />
                    </div>
                  )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen  max-w-6xl px-4 mx-auto my-16 m-2">
            <div className="flex flex-row items-center gap-4 h-full w-full ">
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

const EditorContainer = styled.div`
  height: 71vh;
`;

export default Editor;
