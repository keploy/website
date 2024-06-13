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
import { fetchTest, fetchTestList, fetchTestSets } from "@/app/api/hello/atg";

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

const SetTestSets = async (
  directory: Directory,
  setDirectory: (dir: Directory) => void
) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const response = await fetchTestSets(storedCodeSubmissionId);
  // console.log(response);
  if (response.success) {
    const runCommandSets = response.data.data.runCommand;
    // console.log(runCommandSets);
    const newTestSets = runCommandSets.split("\n");
    let val = 0;
    newTestSets.pop();
    const newDirs = newTestSets.map((TestSetName: string, index: number) => ({
      id: index.toString(),
      name: TestSetName,
      parentId: "test_root",
      type: Type.DIRECTORY,
      depth: 2,
      dirs: [],
      files: [],
    }));
    setDirectory({
      ...directory,
      dirs: newDirs,
    });
  } else {
    console.error("Error fetching test sets:", response.error);
  }
};

const SetTestList = async (
  directory: Directory,
  setDirectory: (dir: Directory) => void
) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const response = await fetchTestList(storedCodeSubmissionId, directory.name);
  if (response.success) {
    const runCommandTestLists = response.data.data.runCommand;
    const newTestLists = runCommandTestLists.split("\n");
    let val = 10;
    newTestLists.pop();
    console.log(newTestLists);
    const newFiles = await Promise.all(newTestLists.map(async (TestSetName: string, index: number) => ({
      id: `${directory.id}${index}`,
      name: TestSetName,
      parentId: directory.id,
      type: Type.FILE,
      depth: 3,
      content: await GetFileDetails(storedCodeSubmissionId, directory.name, TestSetName),
    })));
    console.log(newFiles);
    setDirectory({
      ...directory,
      files: newFiles,
    });
    console.log(directory);
  } else {
    console.log("Error fetching test-list:", response.error);
  }
};

const GetFileDetails = async (
  codeSubmissionId: string,
  testSetName: string,
  testCaseName: string
) => {
  try {
    const response = await fetchTest(
      codeSubmissionId,
      testSetName,
      testCaseName
    );
    return response.data.data.runCommand;
  } catch (err) {
    return `content Not found ${err}`;
  }
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
  const [open, setOpen] = useState(() =>
    isChildSelected(directory, selectedFile)
  );
  const [dirState, setDirState] = useState(directory);
  const depth = directory.depth;

  const handleToggle = async () => {
    setOpen(!open);
    if (directory.id === "test_root") {
      await SetTestSets(dirState, setDirState);
    } else if (directory.parentId === "test_root") {
      await SetTestList(dirState, setDirState);
    }
    console.log(directory.id);
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToggle}
        style={{ paddingLeft: `${depth * 16}px` }} // Adjust padding for depth
      >
        {open ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
        <FileIcon
          name={open ? "openDirectory" : "closedDirectory"}
          extension=""
        />
        <span className="ml-1">{directory.name}</span>
      </div>
      {open && (
        <div>
          <SubTree
            directory={dirState}
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
  return (
    <span className="flex w-5 h-5 justify-center items-center">{icon}</span>
  );
};
