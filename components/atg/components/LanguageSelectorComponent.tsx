import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { FaPython, FaJs } from "react-icons/fa"; // Assuming you are using react-icons
import { FaGolang } from "react-icons/fa6";
import './css/LanguageSelector.css'; // Import CSS for transitions

export const LanguageSelector = ({
  onSelectLanguageForCode,
}: {
  onSelectLanguageForCode: (language: string) => void;
}) => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<string>("Golang");
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const handleSelect = (language: string) => {
    setSelectedProject(language);
    onSelectLanguageForCode(language);
    setShowIcons(false); // Hide icons after selection
  };

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className="text-gray-800  rounded-md flex justify-around">
      
      {showIcons && (
        <div className="icon-container transition-all duration-300">
          <Tooltip title="Golang">
            <IconButton
              color={selectedProject === "Golang" ? "primary" : "default"}
              onClick={() => handleSelect("Golang")}
            >
              <FaGolang size={30} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Python">
            <IconButton
              color={selectedProject === "Python" ? "primary" : "default"}
              onClick={() => handleSelect("Python")}
            >
              <FaPython size={30} />
            </IconButton>
          </Tooltip>
          <Tooltip title="JavaScript">
            <IconButton
              color={selectedProject === "JavaScript" ? "primary" : "default"}
              onClick={() => handleSelect("JavaScript")}
            >
              <FaJs size={30} />
            </IconButton>
          </Tooltip>
        </div>
      )}
      <Tooltip title={selectedProject}>
        <IconButton
          color="primary"
          onClick={toggleIcons}
          className={`icon-transition ${showIcons ? 'expanded' : ''}`}
        >
          {selectedProject === "Golang" && <FaGolang size={30} />}
          {selectedProject === "Python" && <FaPython size={30} />}
          {selectedProject === "JavaScript" && <FaJs size={30} />}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default LanguageSelector;
