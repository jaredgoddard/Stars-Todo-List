import { getOrCreateJson, saveJson } from '../json-util';
import { MessageWebviewType } from '../../global/message-types';
import { sendMessage } from './message-handler';
import { showInfoNotification } from '../notification-util';

export interface TaskData {
  name: string;
}

export const handleSaveTaskData = async (tasks: TaskData[]) => {
  await saveJson('TodoList.json', { tasks });
};

export const handleGetTaskData = async () => {
  const savedData = await getOrCreateJson('TodoList.json');
  sendMessage(MessageWebviewType.REFRESH_TASK_DATA, savedData);
};