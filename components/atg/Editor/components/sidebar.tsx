import React, { useState, useEffect } from "react";
import { FileTree } from "./file-tree";
import { Directory, File } from "../utils/file-manager";

export const Sidebar = ({
  rootDir,
  selectedFile,
  onSelect,
}: {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
}) => {
  return (
    <div
      className={`flex flex-col h-full `}
    >
      <FileTree
        rootDir={rootDir}
        selectedFile={selectedFile}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Sidebar;
