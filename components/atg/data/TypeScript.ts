import { Type,Directory } from "../Editor/utils/file-manager"

export const Data: Directory = {
    id: "root",
    name: "rootDir",
    parentId: "null",
    type: Type.DIRECTORY,
    depth: 0,
    dirs: [],
    files: [
        {
            id: "main",
            name: "index.js",
            type: Type.FILE,
            parentId: "root",
            depth: 1,
            content: 'const express = require("express");\nconst app = express();\napp.listen(8000,()=>{console.log(`listening on port ${8000}`) })'
        },
        {
            id: "main2",
            name: "index2.js",
            type: Type.FILE,
            parentId: "root",
            depth: 1,
            content: 'const express = require("express");\nconst app = express();\napp.listen(8000,()=>{console.log(`listening on port ${8000}`) })'
        }
    ],
}
