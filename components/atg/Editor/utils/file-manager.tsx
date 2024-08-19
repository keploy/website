export enum Type {
  FILE, 
  DIRECTORY,
  DUMMY,
}

interface CommonProps {
  id: string; 
  type: Type; 
  name: string; 
  parentId: string | undefined; 
  depth: number; 
}

export interface File extends CommonProps {
  content: string; 
}

export interface Directory extends CommonProps {
  files: File[];
  dirs: Directory[];
}

export function findFileByName(
  rootDir: Directory,
  filename: string
): File | undefined {
  let targetFile: File | undefined = undefined;

  function findFile(rootDir: Directory, filename: string) {
    rootDir.files.forEach((file) => {
      if (file.name === filename) {
        targetFile = file;
        return;
      }
    });
    rootDir.dirs.forEach((dir) => {
      findFile(dir, filename);
    });
  }

  findFile(rootDir, filename);
  return targetFile;
}

export function sortDir(l: Directory, r: Directory) {
  return l.name.localeCompare(r.name);
}

export function sortFile(l: File, r: File) {
  return l.name.localeCompare(r.name);
}
