import * as vscode from 'vscode';
import * as path from 'path';

class MyWebviewViewProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;

  constructor(private readonly context: vscode.ExtensionContext) {}
  
  handleNotification(type: string, text: string) {
    switch (type) {
      case 'info':
        vscode.window.showInformationMessage(text);
        break;
      case 'warning':
        vscode.window.showWarningMessage(text);
        break;
      case 'error':
        vscode.window.showErrorMessage(text);
        break;
    }
  }

  resolveWebviewView(panel: vscode.WebviewView) {
    this._view = panel;
    const webviewPath = vscode.Uri.file(path.join(this.context.extensionPath, 'dist', 'webview.js'));
    const webviewUri = panel.webview.asWebviewUri(webviewPath);
    
    const stylePath = vscode.Uri.file(path.join(this.context.extensionPath, 'dist', 'webview.css'));
    const styleUri = panel.webview.asWebviewUri(stylePath);
    
    panel.webview.options = {
      enableScripts: true
    };
    panel.webview.html = this.getHtmlForWebview(webviewUri, styleUri);
    panel.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case 'showNotification':
          this.handleNotification(message.type, message.text);
          break;
      }
    });
  }

  private getHtmlForWebview(webviewUri: vscode.Uri, styleUri: vscode.Uri): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Webview</title>
      <link rel="stylesheet" type="text/css" href="${styleUri}">
    </head>
    <body>
      <div id="root"></div>
      <script src="${webviewUri}"></script>
    </body>
    </html>
  `;
  }
}

export { MyWebviewViewProvider };