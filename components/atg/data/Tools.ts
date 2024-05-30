import { Type, Directory } from "../Editor/utils/file-manager";

export const Data: Directory = {
  id: "rootTools",
  name: "rootDir",
  parentId: "null",
  type: Type.DIRECTORY,
  depth: 0,
  dirs: [],
  files: [
    {
      id: "recording-main",
      name: "Record",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "replaying-main",
      name: "Test",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "testing-name",
      name: "Replay",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "terminal-main",
      name: "Terminal",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
  ],
};
