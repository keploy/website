import { Type, Directory } from "../Editor/utils/file-manager";

export const TypeScriptData: Directory = {
  id: "root3",
  name: "rootDir",
  parentId: "null",
  type: Type.DIRECTORY,
  depth: 0,
  dirs: [
    {
      id: "src3",
      name: "src",
      parentId: "root3",
      type: Type.DIRECTORY,
      depth: 1,
      dirs: [],
      files: [
        {
          id: "package_json",
          name: "package.json",
          type: Type.FILE,
          parentId: "src3",
          depth: 2,
          content:
            '"{"name": "animal-app", "version": "1.0.0", "description": "Single page application for animal database", "main": "server.js", "scripts": {"start": "node server.js", "dev": "nodemon server.js"}, "author": "Your Name", "license": "MIT", "dependencies": {"express": "^4.17.1", "mongodb": "^4.0.5", "@keploy/sdk": "^2.0.4"}, "devDependencies": {"nodemon": "^2.0.13"}}"',
        },
        {
          id: "main_js",
          name: "server.js",
          type: Type.FILE,
          parentId: "src3",
          depth: 2,
          content:
            "const express = require('express');\n\nconst app = express();\n\nconst kMiddleware = require('@keploy/sdk/dist/v2/dedup/middleware.js');\n\napp.use(kMiddleware());\n\napp.get('/', (req, res) => {\n    res.send('Welcome to the world of animals.');\n});\n\napp.get('/animals', async (req, res) => {\n    try {\n        res.json({ animals: 'tiger' });\n    } catch (err) {\n        console.error(err);\n        res.sendStatus(500);\n    }\n});\n\napp.listen(5000, () => {\n    console.log('Server started on port 5000');\n});",
        },
      ],
    },
  ],
  files: [],
};
