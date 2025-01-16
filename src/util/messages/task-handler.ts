import * as vscode from 'vscode';
import * as fs from 'fs/promises';
import * as path from 'path';
import { getJson, saveJson } from '../json-util';
import { MessageWebviewType } from '../../global/message-types';
import { sendMessage } from './message-handler';

export interface TaskData {
  name: string;
}

export const handleSaveTaskData = async (tasks: TaskData[]) => {
  await saveJson('todoListTasks.json', { tasks });
};

export const handleGetTaskData = async () => {
  const savedData = await getJson('todoListTasks.json');
  sendMessage(MessageWebviewType.REFRESH_TASK_DATA, savedData);
};