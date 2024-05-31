"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import Appbar from "./components/AppBar";
import { Type, File, Directory } from "./Editor/utils/file-manager";
import { Data } from "./data/TypeScript";
import DefaultEditorPage from "./components/DefaultEditorPage";
import CustomizedSteppers from "./components/HorizontalStepper";
import StageComponent from "./components/StageComponent";

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
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [sideContent, setSideContent] = useState<boolean>(false);
  const [state, setState] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setDataFetched(false);
      setError("");
      try {
        // Assuming Data is a directory structure fetched from some API or defined locally
        setRootDir(Data);
        setDataFetched(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Not able to reach the server");
      }
    };
    fetchData();
  }, []);

  const CollapsingSidebar = (collapse: boolean) => {
    setCollapsed(collapse);
    setSideContent(collapse);
    console.log("Sidebar collapsed:", collapse);
  };

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
    console.log(updatedFiles.length);
    setSelectedFile(updatedFiles[updatedFiles.length - 1]);
  };

  const nextState = () => {
    setState((prevState) => (prevState + 1) % 3);
  };

  const prevState = () => {
    setState((prevState) => (prevState - 1 + 3) % 3);
  };

  return (
    <>
      <div>
        {dataFetched ? (
          <>
            <div className="flex flex-col max-w-6xl px-4 mx-auto my-16 m-2">
              <CustomizedSteppers activeStep={state} onNext={nextState} onPrev={prevState} />
              <div className="flex flex-row mt-5">
                <div
                  className={`transition-all duration-200 ${
                    collapsed ? "w-16" : "w-3/12"
                  }`}
                >
                  <Sidebar
                    rootDir={rootDir}
                    selectedFile={selectedFile}
                    onSelect={onSelect}
                    Collapse={CollapsingSidebar}
                  />
                </div>
                <div
                  className={`relative flex flex-col ${
                    collapsed ? "w-full" : "w-9/12"
                  } ml-2 transition-all duration-300`}
                >
                  <EditorContainer>
                    <div className="flex flex-row w-full h-full">
                      <div className="w-full h-full flex flex-col">
                        <Appbar
                          selectedFile={selectedFile}
                          selectedFilesArray={files}
                          onSelect={onSelectAppBar}
                          onCancel={CancelButtonAppBar}
                        />
                        {files.length !== 0 && (
                          <StageComponent
                            StateNumber={state}
                            onNext={nextState}
                            onPrev={prevState}
                          />
                        )}
                        <Code selectedFile={selectedFile} />
                      </div>
                      {sideContent && (
                        <div className="transition-all duration-200 h-full border border-gray-300 w-6/12">
                          Side-Content
                        </div>
                      )}
                    </div>
                    {files.length === 0 && (
                      <div className="absolute w-full top-0 h-full">
                        <DefaultEditorPage />
                      </div>
                    )}
                  </EditorContainer>
                  <div className="absolute w-full h-2/6 bottom-0 z-20"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <LoadingContainer>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="animate-spin text-white m-2">/</span>
                {Emoji}: Loading...
                <span className="animate-spin text-white m-2">/</span>
              </div>
              {error && <div>{error}</div>}
            </div>
          </LoadingContainer>
        )}
      </div>
    </>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const EditorContainer = styled.div`
  height: 70vh;
`;

export default Editor;
