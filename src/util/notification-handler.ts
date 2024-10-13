import { window } from 'vscode';
import { NotificationData, NotificationType } from '../global/message-types';

const notificationHandler: { [key in NotificationType]: (text: string) => void } = {
  [NotificationType.INFO]: (text: string) => window.showInformationMessage(text),
  [NotificationType.WARNING]: (text: string) => window.showWarningMessage(text),
  [NotificationType.ERROR]: (text: string) => window.showErrorMessage(text),
};

export const handleNotification = (messageData: NotificationData) => {
  notificationHandler[messageData.type](messageData.text);
};
