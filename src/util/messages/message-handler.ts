
import { MessageExtensionData, MessageExtensionType, MessageWebviewType, NotificationData } from '../../global/message-types';
import { SaveTaskData } from '../../global/message-types/task-message-types';
import { MyWebviewViewProvider } from '../../views/task-webview';
import { handleNotification } from './notification-handler';
import { handleGetTaskData, handleSaveTaskData } from './task-handler';

let webviewProvider: MyWebviewViewProvider;

export const initMessageHandler = (provider: MyWebviewViewProvider) => {
  webviewProvider = provider;
};

export const sendMessage = (type: MessageWebviewType, data: any) => {
  webviewProvider.postMessageToWebview({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageExtensionType]?: MessageHandler } = {
  [MessageExtensionType.NOTIFICATION]: (messageData: NotificationData) => {
    handleNotification(messageData.type, messageData.text);
  },
  [MessageExtensionType.SAVE_TASK_DATA]: (messageData: SaveTaskData) => {
    handleSaveTaskData(messageData.tasks);
  },
  [MessageExtensionType.GET_TASK_DATA]: () => {
    handleGetTaskData();
  },
};

export const handleMessage = (message: MessageExtensionData) => {
  messageHandler[message.type]?.(message.data);
};