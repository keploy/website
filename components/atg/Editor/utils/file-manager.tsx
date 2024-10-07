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

// Utility function to generate unique IDs
export function  generateUniqueId(): string {
  return "id-" + Math.random().toString(36).substr(2, 9);
}


export async function fetchDirectoryStructure(projectKey: string): Promise<Directory> {
  try {
    const response = await fetch(`/api/createFileStructure?project=${projectKey}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch directory structure: ${response.statusText}`);
    }

    const data: Directory = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching directory structure:', error);
    throw new Error('Failed to fetch directory structure');
  }
}


// Find a file by name in the directory structure
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


export const isChildSelected = (directory: Directory, selectedFile?: File) => {
  if (!selectedFile) return false;

  let isSelected = false;

  const checkChild = (dir: Directory) => {
    if (dir.id === selectedFile.parentId) {
      isSelected = true;
      return;
    }
    dir.dirs.forEach(checkChild);
  };

  checkChild(directory);
  return isSelected;
};



// Sort directories alphabetically by name
export function sortDir(l: Directory, r: Directory) {
  return l.name.localeCompare(r.name);
}

// Sort files alphabetically by name
export function sortFile(l: File, r: File) {
  return l.name.localeCompare(r.name);
}
