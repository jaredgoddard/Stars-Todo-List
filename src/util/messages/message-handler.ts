
import { MessageData, MessageType, NotificationData } from '../../global/message-types';
import { MyWebviewViewProvider } from '../../views/task-webview';
import { handleGetFolderList } from './json-handler';
import { handleNotification } from './notification-handler';

let webviewProvider: MyWebviewViewProvider;

export const initMessageHandler = (provider: MyWebviewViewProvider) => {
  webviewProvider = provider;
};

export const sendMessage = (type: MessageType, data: any) => {
  webviewProvider.postMessageToWebview({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.NOTIFICATION]: (messageData: NotificationData) => {
    handleNotification(messageData.type, messageData.text);
  },
  [MessageType.GET_FOLDER_LIST]: (messageData: any) => {
    handleGetFolderList();
  },
};

export const handleMessage = (message: MessageData) => {
  messageHandler[message.type]?.(message.data);
};