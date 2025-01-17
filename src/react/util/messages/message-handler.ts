import { MessageExtensionType, MessageWebviewData, MessageWebviewType } from "../../../global/message-types";
import { RefreshTaskData } from "../../../global/message-types/task-message-types";
import { handleRefreshTaskData } from "./task-handler";

export const sendMessage = (type: MessageExtensionType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

type MessageHandler = (messageData: any) => void;

const messageHandler: { [key in MessageWebviewType]?: MessageHandler } = {
  [MessageWebviewType.REFRESH_TASK_DATA]: (messageData: RefreshTaskData) => {
    handleRefreshTaskData(messageData);
  },
};

export const handleMessage = (message: MessageWebviewData) => {
  messageHandler[message.type]?.(message.data);
};
