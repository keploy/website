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
      name: "Record.record",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "replaying-main",
      name: "Test.test",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "testing-name",
      name: "Replay.replay",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
    {
      id: "terminal-main",
      name: "Terminal.terminal",
      type: Type.FILE,
      parentId: "rootTools",
      depth: 1,
      content: "",
    },
  ],
};
