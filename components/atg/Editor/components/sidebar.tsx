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
  const [expanded, setExpanded] = useState<boolean>(true);

  const ClickExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`w-2/12 flex flex-col h-full text-sm rounded-bl-md${
        theme ? "text-secondary-300 bg-neutral-200" : "text-white bg-[#21252b]"
      }`}
    >
      <div
        className={`flex hover:cursor-pointer py-2.5 mb-2 px-1 text-center font-medium ${
          theme
            ? "bg-white border border-b-gray-100 text-black"
            : "bg-[#21252b] shadow-lg shadow-[#171a1e] text-gray-300"
        }`}
        onClick={ClickExpanded}
        style={{ minWidth: "250px" }} // Ensure content has a minimum width
      >
        <ExpandMoreIcon className={`${expanded ? "" : "rotate-[-90deg]"}`} />
        <span className={`${theme?"text-black":" text-gray-300"}`}>Website</span>
      </div>
      {expanded && (
        <div className="w-full overflow-x-scroll no-scrollbar">
          <FileTree
            rootDir={rootDir}
            selectedFile={selectedFile}
            onSelect={onSelect}
            themeFile={theme}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
