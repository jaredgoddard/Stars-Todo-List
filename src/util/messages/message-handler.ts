
import { Message, MessageType, NotificationData } from '../../global/message-types';
import { handleNotification } from './notification-handler';

export const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.NOTIFICATION]: (messageData: NotificationData) => {
    handleNotification(messageData.type, messageData.text);
  },
};

export const handleMessage = (message: Message) => {
  messageHandler[message.type]?.(message.data);
};