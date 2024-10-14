import { Message, MessageType, NotificationType } from "../../../global/message-types";

export const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.NOTIFICATION]: (messageData: any) => {
    
  },
};

export const handleMessage = (message: Message) => {
  messageHandler[message.type]?.(message.data);
};