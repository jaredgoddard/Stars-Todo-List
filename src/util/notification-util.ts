import { NotificationType } from "../global/message-types";
import { handleNotification } from "./messages/notification-handler";

export const showInfoNotification = (text: string) => {
  handleNotification(NotificationType.INFO, text);
};

export const showWarningNotification = (text: string) => {
  handleNotification(NotificationType.WARNING, text);
};

export const showErrorNotification = (text: string) => {
  handleNotification(NotificationType.ERROR, text);
};