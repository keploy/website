import React, { useState } from "react";
import { Directory, File, sortDir, sortFile } from "../utils/file-manager";
import { getIcon } from "./icon";
import { MdOutlineKeyboardArrowRight , MdOutlineKeyboardArrowDown } from "react-icons/md";
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
        <React.Fragment key={dir.id}>
          <DirDiv
            directory={dir}
            selectedFile={props.selectedFile}
            onSelect={props.onSelect}
          />
        </React.Fragment>
      ))}
      {props.directory.files.sort(sortFile).map((file) => (
        <React.Fragment key={file.id}>
          <FileDiv
            file={file}
            selectedFile={props.selectedFile}
            onClick={() => props.onSelect(file)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

const FileDiv = ({
  file,
  icon,
  selectedFile,
  onClick,
}: {
  file: File | Directory;
  icon?: string;
  selectedFile: File | undefined;
  onClick: () => void;
}) => {
  const isSelected = (selectedFile && selectedFile.id === file.id) as boolean;
  const depth = file.depth;
  return (
    <div
      className={`flex items-center pl-${depth * 4} ${
        isSelected ? "bg-orange-300" : "transparent"
      } rounded cursor-pointer hover:bg-orange-200`}
      onClick={onClick}
    >
      <FileIcon name={icon} extension={file?.name?.split(".").pop() || ""} />
      <span className="ml-1">
        {file?.name &&
        ["record", "test", "replay", "terminal"].includes(
          file.name.split(".").pop() || ""
        )
          ? file.name.split(".").pop()
          : file?.name || ""}
      </span>
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
  let defaultOpen = false;
  if (selectedFile) defaultOpen = isChildSelected(directory, selectedFile);
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <div
        className={`flex items-center cursor-pointer ${
          open ? "pl-4" : "pl-4"
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
        <FileDiv
          file={directory}
          icon={open ? "openDirectory" : "closedDirectory"}
          selectedFile={selectedFile}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open ? (
        <SubTree
          directory={directory}
          selectedFile={selectedFile}
          onSelect={onSelect}
        />
      ) : null}
    </>
  );
};

const isChildSelected = (directory: Directory, selectedFile: File) => {
  let res: boolean = false;

  function isChild(dir: Directory, file: File) {
    if (selectedFile.parentId === dir.id) {
      res = true;
      return;
    }
    if (selectedFile.parentId === "0") {
      res = false;
      return;
    }
    dir.dirs.forEach((item) => {
      isChild(item, file);
    });
  }

  isChild(directory, selectedFile);
  return res;
};

const FileIcon = ({
  extension,
  name,
}: {
  name?: string;
  extension?: string;
}) => {
  let icon = getIcon(extension || "", name || "");
  return <span className="flex w-8 h-8 justify-center items-center">{icon}</span>;
};
