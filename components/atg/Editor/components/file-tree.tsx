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
import {
  fetchMock,
  fetchTest,
  fetchTestList,
  fetchTestSets,
} from "@/app/api/hello/atg";

interface FileTreeProps {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
}

export const FileTree = (props: FileTreeProps) => {
  useEffect(() => {
    props.onSelect(undefined);
  }, [props.rootDir]);
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
        isSelected
          ? "bg-gray-200 border-y-1 border-y-gray-400"
          : "bg-transparent"
      }  cursor-pointer ${!isSelected ? "hover:bg-gray-200" : "hover:bg-gray-300"} `}
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
  if (response.success) {
    const runCommandSets = response.data.data.runCommand;
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
    newTestLists.pop();

    const newFiles = await Promise.all(
      newTestLists.map(async (TestSetName: string, index: number) => {
        const fileDetails = await GetFileDetails(
          storedCodeSubmissionId,
          directory.name,
          TestSetName
        );
        return {
          id: `${directory.id}${index}`,
          name: TestSetName,
          parentId: directory.id,
          type: Type.FILE,
          depth: 3,
          content: fileDetails.testDetails,
        };
      })
    );

    const mockResponse = await fetchMock(
      storedCodeSubmissionId,
      directory.name
    );
    if (mockResponse.success) {
      const mockDetails = mockResponse.data.data.runCommand;
      newFiles.push({
        id: `${directory.id}mock`,
        name: `mocks.yaml`,
        parentId: directory.id,
        type: Type.FILE,
        depth: 3,
        content: mockDetails,
      });
    } else {
      console.log("error bhyi error in mocks");
    }

    setDirectory({
      ...directory,
      files: newFiles,
    });
  } else {
    console.error("Error fetching test-list:", response.error);
  }
};

const GetFileDetails = async (
  codeSubmissionId: string,
  testSetName: string,
  testCaseName: string
): Promise<{ testDetails: string; mockDetails: string }> => {
  try {
    const testResponse = await fetchTest(
      codeSubmissionId,
      testSetName,
      testCaseName
    );
    const testDetails = testResponse.data.data.runCommand;
    return { testDetails, mockDetails: "" };
  } catch (err: any) {
    throw new Error(`Content not found: ${err.message}`);
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
}: {
  name?: string;
  extension?: string;
}) => {
  const icon = getIcon(extension || "", name || "");
  return (
    <span className="flex w-5 h-5 justify-center items-center">{icon}</span>
  );
};
