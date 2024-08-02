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
          content: "flask\npymongo\narrow\ncoverage",
        },
        {
          id: "main_py",
          name: "main.py",
          type: Type.FILE,
          parentId: "src2",
          depth: 2,
          content:
            'from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef ping_server():\n\treturn "Welcome to the world of animals."\n\n@app.route(\'/animals\')\ndef get_stored_animals():\n\tanimals = [{"id": "animals"}]\n\treturn jsonify({"animals": animals})\n\nif __name__ == \'__main__\':\n\tapp.run(host="0.0.0.0", port=5000)',
        },
        {
          id: "schema_json",
          name: "schema.json",
          type: Type.FILE,
          parentId: "src2",
          depth: 2,
          content:
            '{"openapi": "3.0.3", "info": {"title": "Animal API", "description": "API for managing animals", "version": "1.0.0"}, "servers": [{"url": "http://localhost:5000/"}], "paths": {"/": {"get": {"summary": "Welcome message", "operationId": "pingServer", "responses": {"200": {"description": "Welcome to the world of animals", "content": {"text/plain": {"schema": {"type": "string", "example": "Welcome to the world of animals."}}}}}}}, "/animals": {"get": {"summary": "Get list of animals", "operationId": "getStoredAnimals", "responses": {"200": {"description": "List of animals", "content": {"application/json": {"schema": {"type": "object", "properties": {"animals": {"type": "array", "items": {"type": "object", "properties": {"id": {"type": "string", "example": "animals"}}}}}, "example": {"animals": [{"id": "animals"}]}}}}}}}}, "components": {"schemas": {"Error": {"type": "object", "properties": {"code": {"type": "integer", "format": "int32"}, "message": {"type": "string"}}}}}}}',
        },
      ],
    },
  ],
  files: [],
};
