// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MyWebviewViewProvider } from './views/task-webview';

export function activate(context: vscode.ExtensionContext) {
  const webviewProvider = new MyWebviewViewProvider(context);
  const webview = vscode.window.registerWebviewViewProvider(
    'stars-todo-list.task-list-view', 
    webviewProvider
  );

  context.subscriptions.push(webview);
}

export function deactivate() {}
