import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'app', '(default)', '.well-known','microsoft-identity-association.json', 'microsoft-identity-association.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  return new NextResponse(fileContents, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}