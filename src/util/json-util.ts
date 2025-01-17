import * as vscode from 'vscode';
import * as fs from 'fs/promises';
import * as path from 'path';
import { showErrorNotification, showInfoNotification } from './notification-util';

let vscodeFolderPath: string; 
let vscodePromise: Promise<any> | undefined;

const initializePaths = () => {
  // Check workspace folder
  const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  if (!workspaceFolder) {
    return;
  }
  
  // Check .vscode folder
  vscodeFolderPath = path.join(workspaceFolder, '.vscode');
  vscodePromise = fs.mkdir(vscodeFolderPath, { recursive: true });
};

export const saveJson = async (filepath: string, data: any) => {
  await vscodePromise;
  if(vscodePromise === undefined){ return; }
  try {
    const fullFilePath = path.join(vscodeFolderPath, filepath);
    await fs.writeFile(fullFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    showErrorNotification('Failed to save file');
    throw error;
  }
};

export const getOrCreateJson = async (filepath: string): Promise<any> => {
  await vscodePromise;
  if(vscodePromise === undefined) { return null; }
  const fullFilePath = path.join(vscodeFolderPath, filepath);
  let value = null;
  await fs.access(fullFilePath).catch(async () => { 
    await fs.writeFile(
      fullFilePath, 
      JSON.stringify({ tasks: []}, null, 2), 
      'utf-8'
    );
  }).finally(() => {
    value = getJson(filepath);
  });
  return value;
};

const getJson = async (filepath: string): Promise<any> => {
  try {
    const fullFilePath = path.join(vscodeFolderPath, filepath);
    const data = await fs.readFile(fullFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') { return null; }
    showErrorNotification(`Failed to read ${filepath}: ${error.message}`);
    return null;
  }
};

initializePaths();