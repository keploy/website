import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FileTree } from "./file-tree";
import { Directory, File } from "../utils/file-manager";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Sidebar = ({
  rootDir,
  selectedFile,
  onSelect,
}: {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
}) => {
  return (
    <div
      className={`flex flex-col h-full mt-20 transition-all duration-300 w-full`}
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
