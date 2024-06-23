import { Type, Directory } from "../Editor/utils/file-manager";

export const PythonData: Directory = {
  id: "root2",
  name: "rootDir",
  parentId: "null",
  type: Type.DIRECTORY,
  depth: 0,
  dirs: [
    {
      id: "src2",
      name: "src",
      parentId: "root2",
      type: Type.DIRECTORY,
      depth: 1,
      dirs: [],
      files: [
        {
          id: "py_txt",
          name: "requirements.txt",
          type: Type.FILE,
          parentId: "src2",
          depth: 2,
          content: "flask\npymongo\narrow",
        },
        {
          id: "main_py",
          name: "main.py",
          type: Type.FILE,
          parentId: "src2",
          depth: 2,
          content:
            "from flask import Flask, jsonify\n\
import pymongo\n\
from pymongo import MongoClient\n\
\n\
app = Flask(__name__)\n\
\n\
def get_db():\n\
    client = MongoClient(host='localhost',\n\
                         port=27017, \n\
                         username='root', \n\
                         password='pass',\n\
                         authSource='admin')\n\
                         \n\
    db = client['animal_db']\n\
    return db\n\
\n\
@app.route('/')\n\
def ping_server():\n\
    return 'Welcome to the world of animals.'\n\
\n\
@app.route('/animals')\n\
def get_stored_animals():\n\
    db = get_db()\n\
    _animals = db.animal_tb.find()\n\
    animals = [{'id': animal['id'], 'name': animal['name'], 'type': animal['type']} for animal in _animals]\n\
    return jsonify({'animals': animals})\n\
\n\
if __name__=='__main__':\n\
    app.run(host='0.0.0.0', port=5000)\n\
",
        },
      ],
    },
  ],
  files: [],
};
