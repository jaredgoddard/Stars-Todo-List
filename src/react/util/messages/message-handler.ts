import { FolderData, MessageData, MessageType, NotificationType } from "../../../global/message-types";
import { handleFolderList } from "./json-handler";

export const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageType]?: MessageHandler } = {
  [MessageType.FOLDER_LIST]: (messageData: FolderData[]) => {
    handleFolderList(messageData);
  },
};

export const handleMessage = (message: MessageData) => {
  messageHandler[message.type]?.(message.data);
};
