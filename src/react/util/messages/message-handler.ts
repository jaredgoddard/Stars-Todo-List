import { FolderData, MessageData, MessageType, NotificationType } from "../../../global/message-types";

export const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {};

export const handleMessage = (message: MessageData) => {
  messageHandler[message.type]?.(message.data);
};
