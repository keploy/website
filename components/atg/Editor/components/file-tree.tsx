import React from "react";
import { Directory, File } from "../utils/file-manager";
import { SubTree } from "./File-Tree-Components/SubTree";

interface FileTreeProps {
  rootDir: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File | undefined) => void;
  themeFile: boolean;
}

export const FileTree = (props: FileTreeProps) => {
  return (
    <SubTree directory={props.rootDir} themeSub={props.themeFile} {...props} />
  );
};
