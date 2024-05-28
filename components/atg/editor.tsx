"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import Appbar from "./components/AppBar";
import {
  Type,
  File,
  Directory,
  findFileByName,
} from "./Editor/utils/file-manager";
import { Data } from "./data/TypeScript";
import DefaultEditorPage from "./components/DefaultEditorPage";
import BottomBar from "./components/BottomBar";
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

const Editor = ({}: {}) => {
  const [rootDir, setRootDir] = useState(dummyDir);
  const [Tools, setTools] = useState<File | undefined>(undefined);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");
  const [Background, setBackground] = useState<Boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [toolsArray, setToolsArray] = useState<File[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setDataFetched(false);
      setError("");
      try {
        setRootDir(Data);
        // if (!selectedFile) {
        //   setSelectedFile(findFileByName(Data, "index.js"));
        // }
        setDataFetched(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Not able to reach the server");
      }
    };
    fetchData();
  }, []);

  const onSelect = (file: File) => {
    setSelectedFile(file);
    const updatedFiles = files.filter((f) => f.id !== file.id);
    setFiles([...updatedFiles, file]);
  };

  const onSelectTools = (tools: File) => {
    setTools(tools);
    const updatedTools = toolsArray.filter((t) => t.id !== tools.id);
    tools.name = tools.name.split(".")[0];
    setToolsArray([...updatedTools, tools]);
    setBackground(true);
    // Background ? setBackground(false) : setBackground(true);
    // console.log(`Has the background appeared: ${Background}`);
  };

  const onSelectTool = (tool: File) => {
    setTools(tool);
  };

  const onSelectAppBar = (file: File) => {
    setSelectedFile(file);
  };

  const CancelButtonToolsAppBar = (tools: File) => {
    const updatedTools = toolsArray.filter((t) => t.id !== tools.id);
    setToolsArray(updatedTools);
    setTools(toolsArray[toolsArray.length - 2]);
    if (toolsArray.length == 1) {
      setBackground(false);
    }
  };

  const CancelButtonAppBar = (file: File) => {
    const updatedFiles = files.filter((f) => f.id !== file.id);
    setFiles(updatedFiles);
    setSelectedFile(files[files.length - 2]);
  };

  return (
    <>
      <div>
        {dataFetched ? (
          <div className="flex flex-row max-w-6xl px-4 mx-auto my-16 m-2">
            <div className="w-full basis-1/4">
              <Sidebar
                rootDir={rootDir}
                selectedFile={selectedFile}
                onSelect={onSelect}
                selectedTool={Tools}
                onSelectTools={onSelectTools}
              />
            </div>
            <div className="relative flex flex-col  w-full ml-2">
              <Appbar
                selectedFile={selectedFile}
                selectedFilesArray={files}
                onSelect={onSelectAppBar}
                onCancel={CancelButtonAppBar}
              />
              <EditorContainer>
                <div className={`w-full ${Background ? "h-4/6" : "h-full"}`}>
                  <Code selectedFile={selectedFile} />
                </div>
                {files.length == 0 && (
                  <div className={`absolute w-full top-0 h-full`}>
                    <DefaultEditorPage />
                  </div>
                )}
              </EditorContainer>
              <div className="absolute w-full h-2/6  bottom-0 z-20">
                {Background && (
                  <BottomBar>
                    <Appbar
                      selectedFile={Tools}
                      selectedFilesArray={toolsArray}
                      onSelect={onSelectTool}
                      onCancel={CancelButtonToolsAppBar}
                    />
                  </BottomBar>
                )}
              </div>
            </div>
          </div>
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
