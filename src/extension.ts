// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MyWebviewViewProvider } from './views/task-webview';
import { sendFolderList } from './services/json/json-service';
import { initMessageHandler } from './util/messages/message-handler';
import { showInfoNotification } from './util/notification-util';

export function activate(context: vscode.ExtensionContext) {
  
  let helloWorld = vscode.commands.registerCommand('stars-todo-list.helloWorld', () => {
    
  });

  context.subscriptions.push(helloWorld);
  
  const webviewProvider = new MyWebviewViewProvider(context);
  const webview = vscode.window.registerWebviewViewProvider(
    'stars-todo-list.task-list-view', 
    webviewProvider
  );

  context.subscriptions.push(webview);
}

export function deactivate() {}
