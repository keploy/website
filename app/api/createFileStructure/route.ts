// app/api/createFileStructure/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Directory } from '@/components/atg/Editor/utils/file-manager';
import { createFileStructure } from '@/components/atg/Editor/utils/File-Structure';
import path from 'path';

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

  const projectPath = path.join(process.cwd(), pathsMap[projectKey]);
  
  try {
    const rootDir = createFileStructure(projectPath);
    return NextResponse.json(rootDir);
  } catch (error) {
    console.error('Error generating file structure:', error);
    return NextResponse.json({ message: 'Error generating file structure' }, { status: 500 });
  }
}
