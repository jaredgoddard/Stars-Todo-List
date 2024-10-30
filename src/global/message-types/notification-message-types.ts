export enum NotificationType {
  INFO,
  WARNING,
  ERROR,
}

export interface NotificationData {
  type: NotificationType;
  text: string;
}