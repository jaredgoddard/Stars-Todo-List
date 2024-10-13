
import { Message, MessageType, NotificationData } from '../../global/message-types';
import { handleNotification } from './notification-handler';

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.NOTIFICATION]: (messageData: NotificationData) => {
    handleNotification(messageData.type, messageData.text);
  },
};

export const handleMessage = (message: Message) => {
  messageHandler[message.type]?.(message.data);
};