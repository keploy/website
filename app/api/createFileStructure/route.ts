// app/api/createFileStructure/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Directory } from '@/components/atg/Editor/utils/file-manager';
import { createFileStructure } from '@/components/atg/Editor/utils/File-Structure';
import { join } from 'path';
import { existsSync,readdirSync } from 'fs';

interface ErrorResponse {
  message: string;
}

const pathsMap: { [key: string]: string } = {
  Golang: 'components/atg/demo-projects/projects/goapp',
  Javascript: 'components/atg/demo-projects/projects/javaScript',
  Python: 'components/atg/demo-projects/projects/python',
  // Add more paths as needed
};

export async function GET(
  req: NextRequest
): Promise<NextResponse<Directory | ErrorResponse>> {
  const url = new URL(req.url);
  const projectKey = url.searchParams.get('project');
    
  if (!projectKey || !pathsMap[projectKey]) {
    return NextResponse.json({ message: 'Invalid or missing project key' }, { status: 400 });
  }

  const basePath = process.cwd();
  // const projectPath = join(basePath, pathsMap[projectKey]); // find the project map 
  const projectPath = join(basePath, 'components/atg/demo-projects/projects', projectKey); // find the project map

  console.log("basePath", basePath);
  console.log("projectPath", projectPath); // check the path

  
  console.log('Available directories(basepath):', readdirSync(basePath));
  console.log('Available directories(components):', readdirSync(join(basePath, 'components')));
  console.log('Available directories(atg):', readdirSync(join(basePath, 'components/atg')));
  console.log('Available directories(demo-projects):', readdirSync(join(basePath, 'components/atg/demo-projects')));
  console.log('Available directories(projects):', readdirSync(join(basePath, 'components/atg/demo-projects/projects')));
  console.log('Available directories(projectPath):', readdirSync(projectPath));


  // Check if path exists before proceeding
  if (!existsSync(projectPath)) {
    console.error(`Path does not exist: ${projectPath}`);
    return new NextResponse(JSON.stringify({ 
      error: 'Project path not found',
      path: projectPath 
    }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const rootDir = createFileStructure(projectPath);
    return NextResponse.json(rootDir);
  } catch (error) {
    console.error('Error in createFileStructure:', error);
    return new NextResponse(JSON.stringify({ error: 'Error in Generating Path' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
