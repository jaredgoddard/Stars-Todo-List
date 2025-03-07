import { window } from 'vscode';
import { NotificationType } from '../../global/message-types';

const notificationHandler: { [key in NotificationType]: (text: string) => void } = {
  [NotificationType.INFO]: (text: string) => window.showInformationMessage(text),
  [NotificationType.WARNING]: (text: string) => window.showWarningMessage(text),
  [NotificationType.ERROR]: (text: string) => window.showErrorMessage(text),
};

export const handleNotification = (type: NotificationType, text: string) => {
  notificationHandler[type](text);
};
