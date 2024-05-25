import React, { useState } from "react";
import { File } from "./Editor/utils/file-manager";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
const Appbar = ({
  selectedFile,
  selectedFilesArray,
  onSelect,
  onCancel,
}: {
  selectedFile: File | undefined;
  selectedFilesArray: File[];
  onSelect: (file: File) => void;
  onCancel: (file: File) => void;
}) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleMouseEnter = (fileId: string) => {
    setHoveredTab(fileId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };
  return (
    <div className=" w-full  bg-orange-200  mb-1 rounded-t-md">
      <div className=" max-w-full flex flex-row rounded-t-md overflow-x-scroll ">
        {selectedFilesArray.map((file, key) => {
          const isHovered = file.id === hoveredTab;
          return (
            <>
              {file?.id === selectedFile?.id ? (
                <div
                  key={key}
                  className="flex flex-row p-1  bg-orange-300 border-t-4   border-t-orange-700 "
                  style={{
                    width: `${file.name.length * 8 + 14}px`,
                  }}
                >
                  <button className="text-xs italic text-slate-900">
                    {file.name}
                  </button>

                  <button onClick={() => onCancel(file)} className="m-auto">
                    <CloseIcon className="m-1" sx={{ fontSize: 15 }} />
                  </button>
                </div>
              ) : (
                <div
                key={key}
                className={`flex flex-row  border-r-2 border-r-orange-900 ${
                  key === 0 ? "rounded-tl-md" : ""
                } bg-orange-200`}
                onMouseEnter={() => handleMouseEnter(file.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: `${
                    file.name.length >14 
                      ? file.name.length * 8 + 14
                      : file.name.length * 8 + 14 // Add 14px for padding or margin if needed
                  }px`,
                }}
              >
                  <button
                    onClick={() => {
                      onSelect(file);
                    }}
                    className={`text-xs text-gray-900 p-1  italic ${
                      key == 0 ? "rounded-tl-md" : ""
                    }  ${isHovered ? "bg-orange-400" : ""}`}
                  >
                    {file.name}
                  </button>

                  {isHovered && (
                    <button onClick={() => onCancel(file)} className="m-auto">
                      <CloseIcon
                        className="m-1 justify-center text-orange-600"
                        sx={{ fontSize: 15 }}
                      />
                    </button>
                  )}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Appbar;
