import React, { useRef, useState, useEffect } from "react";
import { File } from "../Editor/utils/file-manager";
import CloseIcon from "@mui/icons-material/Close";
import "./css/Appbar.css"; // Import the CSS file for custom styling
import { getIcon } from "../Editor/components/icon";
import styled from "@emotion/styled";
import LanguageSelector from "./LanguageSelectorComponent";

const Appbar = ({
  selectedFile,
  selectedFilesArray,
  onSelect,
  onCancel,
  onSelectLanguage,
  AppBarTheme,
  languageApp,
}: {
  selectedFile: File | undefined;
  selectedFilesArray: File[];
  onSelect: (file: File) => void;
  onCancel: (file: File) => void;
  onSelectLanguage: (language: string) => void;
  AppBarTheme: boolean;
  languageApp: string;
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
    // console.log(fileId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div
      className={`appbar-container ${
        AppBarTheme ? "bg-neutral-200" : "bg-[#21252b]"
      } `}
    >
      <div className="appbar-scrollbar-container" ref={scrollRef}></div>
      <div
        className={`appbar flex flex-row justify-between w-full  ${
          AppBarTheme ? "border border-gray-300" : ""
        } `}
      >
        <div className="tabs-container flex-grow" ref={tabsRef}>
          {selectedFilesArray.map((file, key) => {
            return (
              <div
                key={file.id}
                className={`flex flex-row items-center cursor-pointer ${
                  file?.id === selectedFile?.id
                    ? ` ${
                        AppBarTheme
                          ? "bg-white border-t-4 border-t-gray-700"
                          : "bg-[#30363e] shadow-inner shadow-[#21252b] border-r-2 border-r-black text-white"
                      }`  
                    : `${
                        AppBarTheme
                          ? "border-r-2 border-r-gray-900 bg-gray-100"
                          : "bg-[#21252b] border-r-2 border-r-black text-gray-600"
                      }`
                } ${key === 0 ? "" : ""}`}
                onMouseEnter={() => handleMouseEnter(file.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => onSelect(file)}
                  className="w-full h-full"
                >
                  <FileIcon
                    name={file.name}
                    extension={file?.name?.split(".").pop() || ""}
                    IconsTheme={AppBarTheme}
                  />
                </button>

                <button
                  className={`text-xs mx-1 italic ${
                    AppBarTheme ? "text-slate-900" : "text-white"
                  }  h-full `}
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
                      className={`${
                        AppBarTheme ? "text-gray-600" : "text-gray-50"
                      }`}
                      sx={{ fontSize: 15 }}
                    />
                  </button>
                )}

                {selectedFile?.id == file?.id && (
                  <button onClick={() => onCancel(file)} className={`mx-2`}>
                    <CloseIcon
                      className={`${
                        AppBarTheme ? "text-gray-600" : "text-white"
                      }`}
                      sx={{ fontSize: 15 }}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex relative items-center">
          <LanguageSelector
            onSelectLanguageForCode={onSelectLanguage}
            language={languageApp}
            Selectortheme={AppBarTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Appbar;

const FileIcon = ({
  extension,
  name,
  IconsTheme,
}: {
  name?: string;
  extension?: string;
  IconsTheme: boolean;
}) => {
  let icon = getIcon(extension || "", name || "", IconsTheme);
  return <Span>{icon}</Span>;
};

const Span = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
