import React, { useState, useEffect } from "react";
import { Directory, File , isChildSelected  } from "../../utils/file-manager";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SubTree } from "./SubTree";
import { FileIcon } from "./FileIcon";

interface DirDivProps {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
  themeDir: boolean;
}

export const DirDiv = ({
  directory,
  selectedFile,
  onSelect,
  themeDir,
}: DirDivProps) => {
  const [open, setOpen] = useState(() => isChildSelected(directory, selectedFile));
  const [dirState, setDirState] = useState(directory);
  const depth = directory.depth;

  const testSetRegex = /^test-set-\d+$/;

  useEffect(() => {
    if (
      directory.id === "src" ||
      directory.id === "src2" ||
      directory.id === "src3"
    ) {
      setOpen(true);
    }

    if (testSetRegex.test(directory.name)) {
      localStorage.setItem("selectedTestSetDir", directory.name);
    }
  }, [directory]);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open && testSetRegex.test(directory.name)) {
      localStorage.setItem("selectedTestSetDir", directory.name);
    }
  }, [open, directory.name]);

  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToggle}
        style={{ paddingLeft: `${depth * 13}px` }}
      >
        {open ? (
          <MdOutlineKeyboardArrowDown className={`${themeDir?"text-black":"text-white"}`} />
        ) : (
          <MdOutlineKeyboardArrowRight className={`${themeDir?"text-black":"text-white"}`} />
        )}
        <FileIcon
          name={open ? "openDirectory" : "closedDirectory"}
          extension=""
          themeIcons={themeDir}
        />
        <span className={`ml-1 truncate max-w-full ${themeDir ? "text-black":"text-white"}`}>{directory.name}</span>
      </div>
      {open && (
        <div>
          <SubTree
            directory={dirState}
            selectedFile={selectedFile}
            onSelect={onSelect}
            themeSub={themeDir}
          />
        </div>
      )}
    </>
  );
};
