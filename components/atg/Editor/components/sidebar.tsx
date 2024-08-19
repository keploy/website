import React, { useState } from "react";
import { FileTree } from "./file-tree";
import { Directory, File } from "../utils/file-manager";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Sidebar = ({
  rootDir,
  selectedFile,
  onSelect,
  currentSelectedFileName,
  theme,
}: {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
  currentSelectedFileName: string | undefined;
  theme: boolean;
}) => {
  const [expanded, setexpanded] = useState<boolean>(true);

  const ClickExpanded = () => {
    setexpanded(!expanded);
  };

  return (
    <div
      className={`flex flex-col h-full text-sm rounded-bl-md overflow-x-hidden whitespace-nowrap ${
        theme
          ? "text-secondary-300 bg-neutral-200"
          : "text-white bg-[#21252b]"
      }`}
    >
      <div
        className={`flex hover:cursor-pointer py-2.5 mb-2 px-1 text-center font-medium ${
          theme
            ? "bg-white border border-b-gray-100"
            : "bg-[#21252b] shadow-lg shadow-[#171a1e]"
        }`}
        onClick={ClickExpanded}
      >
        <ExpandMoreIcon className={`${expanded ? "" : "rotate-[-90deg]"}`} />
        Website
      </div>
      {expanded && (
        <FileTree
          rootDir={rootDir}
          selectedFile={selectedFile}
          onSelect={onSelect}
          themeFile={theme}
        />
      )}
    </div>
  );
};

export default Sidebar;
