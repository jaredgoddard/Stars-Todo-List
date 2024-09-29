import * as vscode from 'vscode';

export class HelloWorldTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<vscode.TreeItem[]> {
    return Promise.resolve([new vscode.TreeItem('Hello World')]);
  }
}

