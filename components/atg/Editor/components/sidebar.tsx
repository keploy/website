import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FileTree } from "./file-tree";
import { Directory, File } from "../utils/file-manager";
import { Data } from "../../data/Tools";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Sidebar = ({
  rootDir,
  selectedFile,
  onSelect,
  selectedTool,
  onSelectTools,
  Collapse,
}: {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
  selectedTool: File | undefined;
  onSelectTools: (file: File) => void;
  Collapse : (collapse:boolean)=>void;
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    Collapse(newCollapsedState);
  };
  
  return (
    <div className={`flex flex-col h-full border border-gray-300 transition-all duration-300 ${collapsed ? 'w-12' : 'w-64'}`}>
      <Button
        onClick={toggleCollapse}
        startIcon={collapsed ? <ChevronRightIcon className=" mx-auto" /> : <ChevronLeftIcon />}
        className="self-end"
      >
      </Button>
      {!collapsed && (
        <>
          <Accordion
            disableGutters
            elevation={0}
            className="border border-gray-300"
            square
            sx={{
              "&:before": {
                display: "none",
              },
              "& .MuiAccordionSummary-root": {
                minHeight: 0,
              },
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                padding: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="py-2 border-gray-300"
            >
              Files
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <FileTree
                rootDir={rootDir}
                selectedFile={selectedFile}
                onSelect={onSelect}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            square
            className="border border-gray-300"
            sx={{
              "&:before": {
                display: "none",
              },
              "& .MuiAccordionSummary-root": {
                minHeight: 0,
              },
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                padding: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="py-2"
            >
              Tools
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <FileTree
                rootDir={Data}
                selectedFile={selectedTool}
                onSelect={onSelectTools}
              />
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </div>
  );
  
};

export default Sidebar;
