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
function generateUniqueId(): string {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

// Fetch GitHub directory and files
export async function fetchGitHubDirectoryContents(
  path: string,
  parentId: string | undefined = undefined,
  depth: number = 1
): Promise<Directory> {
  const apiUrl = `https://api.github.com/repos/keploy/demo-projects/contents/${path}`;
  const response = await fetch(apiUrl);
  const items = await response.json();

  const directory: Directory = {
    id: generateUniqueId(),
    type: Type.DIRECTORY,
    name: path.split('/').pop() || '',
    parentId,
    depth,
    files: [],
    dirs: [],
  };

  for (const item of items) {
    if (item.type === 'dir') {
      const subdirectory = await fetchGitHubDirectoryContents(item.path, directory.id, depth + 1);
      directory.dirs.push(subdirectory);
    } else if (item.type === 'file' && item.download_url) {
      const fileResponse = await fetch(item.download_url);
      const content = await fileResponse.text();

      const file: File = {
        id: generateUniqueId(),
        type: Type.FILE,
        name: item.name,
        parentId: directory.id,
        depth: depth + 1,
        content,
      };

      directory.files.push(file);
    }
  }

  // Sort files and directories
  directory.files.sort(sortFile);
  directory.dirs.sort(sortDir);

  return directory;
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

// Sort directories alphabetically by name
export function sortDir(l: Directory, r: Directory) {
  return l.name.localeCompare(r.name);
}

// Sort files alphabetically by name
export function sortFile(l: File, r: File) {
  return l.name.localeCompare(r.name);
}
