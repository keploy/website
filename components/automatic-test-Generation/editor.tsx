import React, { useState, useEffect } from "react";
import Sidebar from "./Editor/components/sidebar";
import { useFilesFromSandbox } from "./Editor/utils";
import { Code } from "./Editor/editor/code";
import styled from "@emotion/styled";
import TaskBar from "./TaskBar";
import {
  Type,
  File,
  Directory,
  findFileByName,
} from "./Editor/utils/file-manager";
import { FileTree } from "./Editor/components/file-tree";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

const Editor = ({
  rerender,
  handleFetch,
  handleRecord,
  handleStop,
}: {
  rerender: any;
  handleFetch: any;
  handleRecord: () => void;
  handleStop: () => void;
}) => {
  const [rootDir, setRootDir] = useState(dummyDir);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setDataFetched(false);
      setError("");
      try {
        const response = await fetch("http://localhost:9000/files");
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const { data } = await response.json();
        console.log(data);
        setRootDir(data);
        if (!selectedFile) {
          setSelectedFile(findFileByName(data, "Keploy.config.js"));
        }
        setDataFetched(true); // Set dataFetched to true once data is loaded
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Not able to reach the server");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  const onSelect = (file: File) => setSelectedFile(file);

  return (
    <div>
      {dataFetched ? (
        <Main>
          <Sidebar>
            <FileTree
              rootDir={rootDir}
              selectedFile={selectedFile}
              onSelect={onSelect}
            />
          </Sidebar>
          <Code selectedFile={selectedFile} />
        </Main>
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
      <TaskBar
        handleFetch={handleFetch}
        handleRecord={handleRecord}
        handleStop={handleStop}
      />
    </div>
  );
};

const Main = styled.main`
  display: flex;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh; /* Adjust as needed */
`;

export default Editor;
