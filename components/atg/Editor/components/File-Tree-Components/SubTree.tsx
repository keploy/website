import React, { useState } from "react";
import { Directory, File, sortDir, sortFile } from "../../utils/file-manager";
import { DirDiv } from "./DirDiv";
import { FileDiv } from "./FileDiv";

interface SubTreeProps {
  directory: Directory;
  selectedFile: File | undefined;
  onSelect: (file: File) => void;
  themeSub: boolean;
}

export const SubTree = (props: SubTreeProps) => {
  const [emptyDirectory, setEmptyDirectory] = useState<boolean>(false);

  return (
    <div>
      {emptyDirectory ? (
        <div className="h-2 flex items-center "></div>
      ) : (
        <>
          {props.directory.dirs.sort(sortDir).map((dir) => (
            <DirDiv
              key={dir.id}
              directory={dir}
              selectedFile={props.selectedFile}
              onSelect={props.onSelect}
              themeDir={props.themeSub}
            />
          ))}
          {props.directory.files.sort(sortFile).map((file) => (
            <FileDiv
              key={file.id}
              file={file}
              selectedFile={props.selectedFile}
              onClick={() => props.onSelect(file)}
              themeFileDiv={props.themeSub}
            />
          ))}
        </>
      )}
    </div>
  );
};
