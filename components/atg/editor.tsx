"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import Appbar from "./components/AppBar";
import { Type, File, Directory } from "./Editor/utils/file-manager";
import { Data } from "./data/TypeScript";
import DefaultEditorPage from "./components/DefaultEditorPage";
import CustomizedSteppers from "./components/HorizontalStepper";
import MainTerminal from "./terminal";
import StageComponent from "./components/StageComponent";
import { Button, Skeleton } from "@mui/material";

const dummyDir: Directory = {
  id: "1",
  name: "loading...",
  type: Type.DUMMY,
  parentId: undefined,
  depth: 0,
  dirs: [],
  files: [],
};

const Emoji = "\u{1F430} Keploy"; // 🐰

const Editor = () => {
  const [rootDir, setRootDir] = useState<Directory>(dummyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [state, setState] = useState(-1);
  const [functionName, setFunctionName] = useState<string>("Start");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setDataFetched(false);
      setError("");
      try {
        setRootDir(Data);
        setDataFetched(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Not able to reach the server");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    updateFunctionName(state);
  }, [state]);

  const onSelect = (file: File) => {
    setSelectedFile(file);
    const updatedFiles = files.filter((f) => f.id !== file.id);
    setFiles([...updatedFiles, file]);
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

  const ShowingTerminal = () => {
    setShowTerminal(true);
  };

  const NotShowingTerminal = () => {
    setShowTerminal(false);
  };

  return (
    <>
      <div>
        {dataFetched ? (
          <>
            <div className="flex flex-col max-w-6xl px-4 mx-auto my-16 m-2">
              <CustomizedSteppers
                activeStep={state}
                onNext={nextState}
                onPrev={prevState}
              />
              <div className="flex flex-row mt-5">
                <div className={`transition-all duration-200 w-3/12`}>
                  <Sidebar
                    rootDir={rootDir}
                    selectedFile={selectedFile}
                    onSelect={onSelect}
                  />
                </div>
                <div
                  className={`relative flex flex-col ml-2 w-full transition-all duration-300`}
                >
                  <EditorContainer>
                    <div className="flex flex-row w-full h-full">
                      <div className="relative w-full h-full flex flex-col">
                        <Appbar
                          selectedFile={selectedFile}
                          selectedFilesArray={files}
                          onSelect={onSelectAppBar}
                          onCancel={CancelButtonAppBar}
                        />
                        {files.length !== 0 && (
                          <StageComponent
                            functionName={functionName}
                            onNext={nextState}
                            showTerminal={ShowingTerminal}
                            hideTerminal={NotShowingTerminal}
                            language={"GOLANG"}
                            code={selectedFile?.content}
                          />
                        )}
                        <Code selectedFile={selectedFile} />
                        <div
                          className={`absolute bottom-0 z-0 w-full transition-all duration-500 ${
                            showTerminal ? "max-h-96" : "max-h-0"
                          } overflow-hidden`}
                        >
                          {showTerminal && (
                            <Button
                              className="w-full bg-slate-200 hover:bg-slate-200"
                              onClick={() => {
                                setShowTerminal(false);
                              }}
                            >
                              Remove Terminal
                            </Button>
                          )}
                          <MainTerminal
                            inputRef={inputRef}
                            functionName={functionName}
                            setRootDir={setRootDir}
                          />
                          {!showTerminal && (
                            <Button
                              className="w-full h-10 bg-slate-200 hover:bg-slate-200"
                              onClick={() => {
                                setShowTerminal(true);
                              }}
                            >
                              Show Terminal
                            </Button>
                          )}
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
  height: 70vh;
`;

export default Editor;
