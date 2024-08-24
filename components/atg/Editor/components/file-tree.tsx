import React, { useState, useEffect } from "react";
import {
  Directory,
  File,
  Type,
  sortDir,
  sortFile,
} from "../utils/file-manager";
import { getIcon } from "./icon";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface FileTreeProps {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
  themeFile: boolean;
}

export const FileTree = (props: FileTreeProps) => {
  return (
    <SubTree directory={props.rootDir} themeSub={props.themeFile} {...props} />
  );
};

interface SubTreeProps {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
  themeSub: boolean;
}

const SubTree = (props: SubTreeProps) => {
  const [emptyDirectory, setEmptyDirectory] = useState<boolean>(false);
  return (                              
    <div>
      {emptyDirectory ? (
        <div className="h-2 flex items-center "></div>
      ) : (
        <>
          {props.directory.dirs.sort(sortDir).map((dir) => (
            <DirDiv
              key={dir.id}
              directory={dir}
              selectedFile={props.selectedFile}
              onSelect={props.onSelect}
              themeDir={props.themeSub}
            />
          ))}
          {props.directory.files.sort(sortFile).map((file) => (
            <FileDiv
              key={file.id}
              file={file}
              selectedFile={props.selectedFile}
              onClick={() => props.onSelect(file)}
              themeFileDiv={props.themeSub}
            />
          ))}
        </>
      )}
    </div>
  );
};

const FileDiv = ({
  file,
  icon,
  selectedFile,
  onClick,
  openParameter,
  themeFileDiv,
}: {
  file: File | Directory;
  icon?: string;
  selectedFile: File | undefined;
  onClick: () => void;
  openParameter?: boolean;
  themeFileDiv: boolean;
}) => {
  const isSelected = selectedFile && selectedFile.id === file.id;
  const depth = file.depth;

  return (
    <div
      className={`flex items-center ${
        isSelected
          ? `${
              themeFileDiv
                ? "bg-gray-200 border-y-1 border-y-gray-400"
                : "bg-gray-700"
            }`
          : "bg-transparent"
      } cursor-pointer ${
        themeFileDiv
          ? !isSelected
            ? "hover:bg-gray-200"
            : "hover:bg-gray-300"
          : !isSelected
          ? "hover:bg-gray-800"
          : "hover:bg-gray-600"
      } `}
      onClick={onClick}
      style={{ paddingLeft: depth > 1 ? `${(depth + 1) * 10}px` : "8px" }}
    >
      {openParameter !== undefined &&
        (openParameter ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        ))}
      <FileIcon
        name={icon}
        extension={file?.name?.split(".").pop() || ""}
        themeIcons={themeFileDiv}
      />
      <span className="ml-1">{file.name}</span>
    </div>
  );
};

const DirDiv = ({
  directory,
  selectedFile,
  onSelect,
  themeDir,
}: {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
  themeDir: boolean;
}) => {
  const [open, setOpen] = useState(() =>
    isChildSelected(directory, selectedFile)
  );
  const [dirState, setDirState] = useState(directory);
  const depth = directory.depth;

  const testSetRegex = /^test-set-\d+$/; // Regular expression to match 'test-set-<number>'

  // Handle first load logic to open specific directories
  useEffect(() => {
    if (
      directory.id === "src" ||
      directory.id === "src2" ||
      directory.id === "src3"
    ) {
      setOpen(true);
    }

    // Store directory name in local storage if it matches the pattern 'test-set-<number>'
    if (testSetRegex.test(directory.name)) {
      localStorage.setItem("selectedTestSetDir", directory.name);
    }
  }, [directory]);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // Store the selected directory name if it matches the pattern 'test-set-<number>'
    if (open && testSetRegex.test(directory.name)) {
      localStorage.setItem("selectedTestSetDir", directory.name);
    }
  }, [open, directory.name]);

  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToggle}
        style={{ paddingLeft: `${depth * 13}px` }} // Adjust padding for depth
      >
        {open ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
        <FileIcon
          name={open ? "openDirectory" : "closedDirectory"}
          extension=""
          themeIcons={themeDir}
        />
        <span className="ml-1">{directory.name}</span>
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
const isChildSelected = (directory: Directory, selectedFile?: File) => {
  if (!selectedFile) return false;

  let isSelected = false;

  const checkChild = (dir: Directory) => {
    if (dir.id === selectedFile.parentId) {
      isSelected = true;
      return;
    }
    dir.dirs.forEach(checkChild);
  };

  checkChild(directory);
  return isSelected;
};

const FileIcon = ({
  extension,
  name,
  themeIcons,
}: {
  name?: string;
  extension?: string;
  themeIcons: boolean;
}) => {
  const icon = getIcon(extension || "", name || "", themeIcons);
  return (
    <span className="flex w-5 h-5 justify-center items-center">{icon}</span>
  );
};
