import React, { useState, useEffect } from "react";
import { FileTree } from "./file-tree";
import { Directory, File } from "../utils/file-manager";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Sidebar = ({
  rootDir,
  selectedFile,
  onSelect,
  currentSelectedFileName,
}: {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
  currentSelectedFileName: string | undefined;
}) => {
  const [expanded, setexpanded] = useState<boolean>(true);

  const ClickExpanded = () => {
    setexpanded(!expanded);
  };

  return (
    <div
      className={`flex flex-col h-full text-sm text-secondary-300  rounded-b-md bg-neutral-200 `}
    >
      <div
        className="flex hover:cursor-pointer py-1.5  px-1 text-center bg-white   font-medium border  border-b-gray-100 mb-2"
        onClick={ClickExpanded}
      >
        <ExpandMoreIcon className={`${expanded? "":"rotate-[-90deg]"}`} />
        Website
      </div>
      {expanded && (
        <FileTree
          rootDir={rootDir}
          selectedFile={selectedFile}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};

export default Sidebar;
