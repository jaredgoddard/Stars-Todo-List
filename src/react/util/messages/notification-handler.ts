import { MessageExtensionType, NotificationType } from "../../../global/message-types";
import { sendMessage } from "./message-handler";

export const showNotification = (type: NotificationType, message: string) => {
  const messageType = MessageExtensionType.NOTIFICATION;
  const messageData = {
    type: type,
    text: message,
  };
  sendMessage(messageType, messageData);
};