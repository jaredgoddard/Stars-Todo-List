
export type MessageType = 'info' | 'warning' | 'error';

export const showNotification = (type: MessageType, message: string) => {
  window.vscode.postMessage({
    command: 'showNotification',
    type: type,
    text: message,
  });
};
