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
            '{\n\
  "name": "animal-app",\n\
  "version": "1.0.0",\n\
  "description": "Single page application for animal database",\n\
  "main": "index.js",\n\
  "scripts": {\n\
    "start": "node index.js",\n\
    "dev": "nodemon index.js"\n\
  },\n\
  "author": "Your Name",\n\
  "license": "MIT",\n\
  "dependencies": {\n\
    "express": "^4.17.1",\n\
    "mongodb": "^4.0.5"\n\
  },\n\
  "devDependencies": {\n\
    "nodemon": "^2.0.13"\n\
  }\n\
}\n\
',
        },
        {
          id: "main_js",
          name: "server.js",
          type: Type.FILE,
          parentId: "src3",
          depth: 2,
          content:
            "const express = require('express');\n\
const { MongoClient } = require('mongodb');\n\
\n\
const app = express();\n\
\n\
const client = new MongoClient('mongodb://root:pass@localhost:27017/admin', {\n\
  useUnifiedTopology: true,\n\
});\n\
\n\
app.get('/', (req, res) => {\n\
  res.send('Welcome to the world of animals.');\n\
});\n\
\n\
app.get('/animals', async (req, res) => {\n\
  try {\n\
    await client.connect();\n\
    const db = client.db('animal_db');\n\
    const animals = await db.collection('animal_tb').find().toArray();\n\
    res.json({ animals });\n\
  } catch (err) {\n\
    console.error(err);\n\
    res.sendStatus(500);\n\
  } finally {\n\
    await client.close();\n\
  }\n\
});\n\
\n\
app.listen(5000, () => {\n\
  console.log('Server started on port 5000');\n\
});\n\
",
        },
      ],
    },
  ],
  files: [],
};
