import { MessageType, NotificationType } from "../../../global/message-types";

export const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};