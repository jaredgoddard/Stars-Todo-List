export enum MessageType {
  // Extension Messages
  NOTIFICATION,
  
  // React Messages
  
}

export interface Message {
  type: MessageType;
  data: any;
}

export interface NotificationData {
  type: NotificationType;
  text: string;
}

export interface SaveJsonMessageData {
  path: string;
  json: string;
}


export enum NotificationType {
  INFO,
  WARNING,
  ERROR,
}