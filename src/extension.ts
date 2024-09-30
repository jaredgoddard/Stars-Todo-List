// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MyWebviewViewProvider } from './views/task-list/task-view';

export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand(
    'stars-todo-list.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from Star&#39;s Todo List!');
  });

  const webview = vscode.window.registerWebviewViewProvider(
    'stars-todo-list.task-list-view', 
    new MyWebviewViewProvider(context)
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(webview);
}

export function deactivate() {}
