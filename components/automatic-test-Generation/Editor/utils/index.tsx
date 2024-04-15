import React from "react";
import { buildFileTree, Directory } from "./file-manager";

export const useFilesFromSandbox = (
  callback: (dir: Directory) => void,
  rerender:any,
) => {
  React.useEffect(() => {
    fetch("http://localhost:8000/files")
      .then((response) => response.json())
      .then(({ data }) => {
        // const rootDir = buildFileTree(data);
        callback(data.rootDir);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);
};
