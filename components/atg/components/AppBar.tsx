import React, { useRef, useState, useEffect } from "react";
import { File } from "../Editor/utils/file-manager";
import CloseIcon from "@mui/icons-material/Close";
import "./css/Appbar.css"; // Import the CSS file for custom styling
import { getIcon } from "../Editor/components/icon";
import styled from "@emotion/styled";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const tabsContainer = tabsRef.current;
    if (scrollContainer && tabsContainer) {
      const handleScroll = () => {
        tabsContainer.scrollLeft = scrollContainer.scrollLeft;
      };

      const syncScroll = () => {
        scrollContainer.scrollLeft = tabsContainer.scrollLeft;
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      tabsContainer.addEventListener("scroll", syncScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        tabsContainer.removeEventListener("scroll", syncScroll);
      };
    }
  }, []);

  const handleMouseEnter = (fileId: string) => {
    setHoveredTab(fileId);
    console.log(fileId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className="appbar-container">
      <div className="appbar-scrollbar-container" ref={scrollRef}></div>
      <div className="appbar w-full border border-gray-300 mb-1 rounded-t-md">
        <div className="tabs-container" ref={tabsRef}>
          {selectedFilesArray.map((file, key) => {
            return (
              <div
                key={file.id}
                className={`flex flex-row items-center cursor-pointer ${
                  file?.id === selectedFile?.id
                    ? "bg-white border-t-4 border-t-gray-700"
                    : "border-r-2 border-r-gray-900 bg-gray-200"
                } ${key === 0 ? "rounded-tl-md" : ""}`}
                onMouseEnter={() => handleMouseEnter(file.id)}
                onMouseLeave={handleMouseLeave}
              >
                <FileIcon
                  name={file.name}
                  extension={file?.name?.split(".").pop() || ""}
                />
                <button
                  className="text-xs mx-1 italic text-slate-900"
                  onClick={() => onSelect(file)}
                >
                  {file.name}
                </button>

                {selectedFile?.id != file.id && (
                  <button
                    onClick={() => onCancel(file)}
                    className={`${
                      hoveredTab == file.id && selectedFile?.id != file.id
                        ? "visible"
                        : "invisible"
                    } mx-2`}
                  >
                    <CloseIcon
                      className="text-gray-600"
                      sx={{ fontSize: 15 }}
                    />
                  </button>
                )}

                {selectedFile?.id == file?.id && (
                  <button onClick={() => onCancel(file)} className={`mx-2`}>
                    <CloseIcon
                      className="text-gray-600"
                      sx={{ fontSize: 15 }}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Appbar;

const FileIcon = ({
  extension,
  name,
}: {
  name?: string;
  extension?: string;
}) => {
  let icon = getIcon(extension || "", name || "");
  return <Span>{icon}</Span>;
};

const Span = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
