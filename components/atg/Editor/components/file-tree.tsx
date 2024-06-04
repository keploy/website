import React, { useState } from "react";
import { Directory, File, sortDir, sortFile } from "../utils/file-manager";
import { getIcon } from "./icon";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FileTreeProps {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
}

export const FileTree = (props: FileTreeProps) => {
  return <SubTree directory={props.rootDir} {...props} />;
};

interface SubTreeProps {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
}

const SubTree = (props: SubTreeProps) => {
  return (
    <div>
      {props.directory.dirs.sort(sortDir).map((dir) => (
        <DirDiv
          key={dir.id}
          directory={dir}
          selectedFile={props.selectedFile}
          onSelect={props.onSelect}
        />
      ))}
      {props.directory.files.sort(sortFile).map((file) => (
        <FileDiv
          key={file.id}
          file={file}
          selectedFile={props.selectedFile}
          onClick={() => props.onSelect(file)}
        />
      ))}
    </div>
  );
};

const FileDiv = ({
  file,
  icon,
  selectedFile,
  onClick,
  openParameter,
}: {
  file: File | Directory;
  icon?: string;
  selectedFile: File | undefined;
  onClick: () => void;
  openParameter?: boolean;
}) => {
  const isSelected = selectedFile && selectedFile.id === file.id;
  const depth = file.depth;

  return (
    <div
      className={`flex items-center ${
        isSelected ? "bg-slate-300" : "bg-transparent"
      } rounded cursor-pointer hover:bg-slate-200`}
      onClick={onClick}
      style={{ paddingLeft: `${(depth + 1) * 16}px` }} // Adjust padding for depth, add an additional level for files
    >
      {openParameter !== undefined &&
        (openParameter ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        ))}
      <FileIcon name={icon} extension={file?.name?.split(".").pop() || ""} />
      <span className="ml-1">{file.name}</span>
    </div>
  );
};

const DirDiv = ({
  directory,
  selectedFile,
  onSelect,
}: {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
}) => {
  const [open, setOpen] = useState(() => isChildSelected(directory, selectedFile));
  const depth = directory.depth;

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToggle}
        style={{ paddingLeft: `${depth * 16}px` }} // Adjust padding for depth
      >
        {open ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
        <FileIcon
          name={open ? "openDirectory" : "closedDirectory"}
          extension=""
        />
        <span className="ml-1">{directory.name}</span>
      </div>
      {open && (
        <div>
          <SubTree
            directory={directory}
            selectedFile={selectedFile}
            onSelect={onSelect}
          />
        </div>
      )}
    </>
  );
};

const isChildSelected = (directory: Directory, selectedFile: File) => {
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
}: {
  name?: string;
  extension?: string;
}) => {
  const icon = getIcon(extension || "", name || "");
  return <span className="flex w-5 h-5 justify-center items-center">{icon}</span>;
};
