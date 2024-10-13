
import { Message, MessageType, NotificationData } from '../global/message-types';
import { handleNotification } from './notification-handler';
import { window as vscodeWindow } from 'vscode';

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.NOTIFICATION]: (messageData: NotificationData) => {
    handleNotification(messageData);
  },
  [MessageType.SAVE_JSON]: undefined,
};

const handleMessage = (message: Message) => {
  messageHandler[message.type]?.(message.data);
};


export { handleMessage };