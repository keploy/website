import React from "react";
import { File } from "../../utils/file-manager";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FileIcon } from "./FileIcon";

interface FileDivProps {
  file: File;
  selectedFile: File | undefined;
  onClick: () => void;
  openParameter?: boolean;
  themeFileDiv: boolean;
}

export const FileDiv = ({
  file,
  selectedFile,
  onClick,
  openParameter,
  themeFileDiv,
}: FileDivProps) => {
  const isSelected = Boolean(selectedFile && selectedFile.id === file.id);
  const depth = file.depth;

  return (
    <div
      className={`flex items-center my-0.5 w-full ${
        isSelected
          ? themeFileDiv
            ? "bg-gray-200 border-y-1 border-y-gray-400"
            : "bg-gray-700"
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
      style={{ paddingLeft: depth > 1 ? `${(depth + 1) * 10}px` : "10px" }}
    >
      {openParameter !== undefined &&
        (openParameter ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        ))}
      <FileIcon
        name={file.name?.split(".").pop() || ""}
        extension={file?.name?.split(".").pop() || ""}
        themeIcons={themeFileDiv}
      />
      <span className="ml-1 truncate  max-w-full">{file.name}</span>
    </div>
  );
};
