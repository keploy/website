import React from "react";
import { getIcon } from "../icon";

interface FileIconProps {
  extension?: string;
  name?: string;
  themeIcons: boolean;
}

export const FileIcon = ({ extension, name, themeIcons }: FileIconProps) => {
  const icon = getIcon(extension || "", name || "", themeIcons);
  return (
    <span className="flex w-5 h-5 justify-center items-center">{icon}</span>
  );
};
