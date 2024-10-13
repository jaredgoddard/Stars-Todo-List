import { MessageType, NotificationType } from "../../global/message-types";

const sendMessage = (type: MessageType, data: any) => {
  window.vscode.postMessage({
    type: type,
    data: data,
  });
};

export const showNotification = (type: NotificationType, message: string) => {
  const messageType = MessageType.NOTIFICATION;
  const messageData = {
    type: type,
    text: message,
  };
  sendMessage(messageType, messageData);
};