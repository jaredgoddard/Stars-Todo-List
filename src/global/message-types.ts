export enum MessageType {
  NOTIFICATION,
  SAVE_JSON,
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