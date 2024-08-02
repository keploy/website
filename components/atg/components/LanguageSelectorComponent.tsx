import * as React from "react";
import { useRef, useEffect } from "react";
import GO from "@/components/atg/asset/icons/go.svg";
import JAVASCRIPT from "@/components/atg/asset/icons/javascript.svg";
import PYTHON from "@/components/atg/asset/icons/python.svg";
import Image from "next/image";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const languages = [
  { name: "Golang", image: GO },
  { name: "Python", image: PYTHON },
  { name: "Javascript", image: JAVASCRIPT },
];

interface LanguageSelectorProps {
  onSelectLanguageForCode: (language: string) => void;
  language: string;
  Selectortheme: boolean;
}

export default function LanguageSelector({
  onSelectLanguageForCode,
  language,
  Selectortheme,
}: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<string>("Golang");
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsExpanded(false);
    onSelectLanguageForCode(language);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target instanceof Node &&
      !buttonRef.current?.contains(event.target) &&
      !dropdownRef.current?.contains(event.target)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
      timeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 200); // Delay time in milliseconds
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsExpanded(true);
  };

  return (
    <div className="relative text-left scale-75">
      <div>
        <button
          ref={buttonRef}
          type="button"
          className={`inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 ${Selectortheme ? "bg-white text-gray-700 border border-gray-200" : "bg-[#1a1e22] border border-gray-700 text-gray-200"} text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200`}
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center">
            <Image
              src={languages.find((lang) => lang.name === selectedLanguage)?.image}
              alt={selectedLanguage}
              width={24}
              height={24}
            />
            <span className="ml-2">{selectedLanguage}</span>
            {isExpanded ? (
              <ArrowDropUp className="ml-1" />
            ) : (
              <ArrowDropDown className="ml-1" />
            )}
          </div>
        </button>
      </div>

      {isExpanded && (
        <div
          ref={dropdownRef}
          className={`absolute z-40 w-44 mt-2 rounded-md shadow-lg ${Selectortheme ? "border border-gray-300 bg-white" : "bg-neutral-800"} ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-in-out opacity-100 scale-100`}
          style={{ top: "100%", left: "0" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages
              .filter((lang) => lang.name !== selectedLanguage)
              .map((lang) => (
                <button
                  key={lang.name}
                  className={`w-full text-left px-10 py-2 text-sm ${Selectortheme ? "text-gray-700 hover:bg-gray-300 hover:text-gray-900 border-b-2 border-gray-200" : "bg-[#1a1e22] text-gray-200 hover:text-gray-100 hover:bg-neutral-700 border border-gray-700"} flex items-center transition duration-200 ease-in-out`}
                  onClick={() => handleSelect(lang.name)}
                  role="menuitem"
                >
                  <Image
                    src={lang.image}
                    alt={lang.name}
                    width={24}
                    height={24}
                  />
                  <span className="ml-2">{lang.name}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
