import { NotificationType, NotificationData } from "./notification-message-types";

enum MessageExtensionType {
  NOTIFICATION,
  SAVE_TASK_DATA,
  GET_TASK_DATA,
}

enum MessageWebviewType {
  REFRESH_TASK_DATA,
}

interface MessageExtensionData {
  type: MessageExtensionType;
  data: any;
}
interface MessageWebviewData {
  type: MessageWebviewType;
  data: any;
}

export { 
  // Messages
  MessageExtensionType,
  MessageExtensionData,
  
  MessageWebviewType,
  MessageWebviewData,
  
  // Notification Messages
  NotificationType,
  NotificationData,
};