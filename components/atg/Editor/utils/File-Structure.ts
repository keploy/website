import fs from "fs";
import path from "path";

import { Directory, generateUniqueId, Type, File } from "./file-manager";

export function createFileStructure(
  rootPath: string,
  depth: number = 0,
  parentId: string | undefined = undefined
): Directory {
  // Get the base name of the root path
  const name = path.basename(rootPath);
  // Generate a unique ID for the directory
  const id = generateUniqueId();
  // Initialize the directory structure object
  const directory: Directory = {
    id,
    type: Type.DIRECTORY,
    name,
    parentId,
    depth,
    files: [],
    dirs: [],
  };

  // Check if the root path exists
  if (!fs.existsSync(rootPath)) {
    throw new Error(`Path does not exist: ${rootPath}`);
  }

  // Read directory contents
  const entries = fs.readdirSync(rootPath, { withFileTypes: true });

  // Iterate over each entry in the directory
  entries.forEach((entry) => {
    const fullPath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      // Recursively create a structure for subdirectories
      const subDir = createFileStructure(fullPath, depth + 1, id);
      directory.dirs.push(subDir);
    } else if (entry.isFile()) {
      // Read file content
      const content = fs.readFileSync(fullPath, "utf-8");
      const file: File = {
        id: generateUniqueId(),
        type: Type.FILE,
        name: entry.name,
        parentId: id,
        depth: depth + 1,
        content,
      };
      directory.files.push(file);
    }
  });

 // Return the directory structure
  return directory;
}
