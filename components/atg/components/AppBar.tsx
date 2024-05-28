import React, { useState } from "react";
import { File } from "../Editor/utils/file-manager";
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
    <div className="w-full bg-orange-200 mb-1 rounded-t-md">
      <div className="max-w-full flex flex-row rounded-t-md">
        {selectedFilesArray.map((file, key) => {
          const isHovered = file.id === hoveredTab;
          return (
            <div
              key={file.id}
              className={`flex flex-row items-center p-1 ${
                file?.id === selectedFile?.id
                  ? "bg-orange-300 border-t-4 border-t-orange-700"
                  : "border-r-2 border-r-orange-900 bg-orange-200"
              } ${key === 0 ? "rounded-tl-md" : ""}`}
              onMouseEnter={() => handleMouseEnter(file.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                width: `${file.name.length * 8 + 30}px`,
                position: "relative",
              }}
            >
              <button
                onClick={() => onSelect(file)}
                className="text-xs italic text-slate-900"
                style={{ marginRight: isHovered ? "20px" : "0" }}
              >
                {file.name}
              </button>

              {(isHovered || file.id === selectedFile?.id) && (
                <button
                  onClick={() => onCancel(file)}
                  className="absolute right-0 top-0 bottom-0 flex items-center justify-center"
                >
                  <CloseIcon
                    className="text-orange-600"
                    sx={{ fontSize: 15 }}
                  />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appbar;
