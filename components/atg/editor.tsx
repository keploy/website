"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "./Editor/components/sidebar";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import Appbar from "./AppBar";
import {
  Type,
  File,
  Directory,
  findFileByName,
} from "./Editor/utils/file-manager";
import { FileTree } from "./Editor/components/file-tree";
import { Data } from "./data/TypeScript";
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
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setDataFetched(false);
      setError("");
      try {
        setRootDir(Data);
        if (!selectedFile) {
          setSelectedFile(findFileByName(Data, "index.js"));
        }
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

  const onSelectAppBar = (file: File) => {
    setSelectedFile(file);
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
          <div className="flex flex-row m-2">
            <div className="w-full basis-2/4">
              <Sidebar>
                <FileTree
                  rootDir={rootDir}
                  selectedFile={selectedFile}
                  onSelect={onSelect}
                />
              </Sidebar>
            </div>
            <div className="flex flex-col w-full ml-2">
              <Appbar
                selectedFile={selectedFile}
                selectedFilesArray={files}
                onSelect={onSelectAppBar}
                onCancel={CancelButtonAppBar}
              />
              <Code selectedFile={selectedFile} />
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

export default Editor;
