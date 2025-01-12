import { NotificationType, NotificationData } from "./notification-message-types";
import { FolderData } from "./json-message-types";

enum MessageType {
  // Extension Messages
  NOTIFICATION,
}

interface MessageData {
  type: MessageType;
  data: any;
}

export { 
  // Messages
  MessageType,
  MessageData,
  
  // Notification Messages
  NotificationType,
  NotificationData,
  
  // JSON React Messages
  FolderData,
};