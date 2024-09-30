import * as vscode from 'vscode';
import * as path from 'path';

class MyWebviewViewProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;

  constructor(private readonly context: vscode.ExtensionContext) {

  }

  resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;
    const webviewPath = vscode.Uri.file(path.join(this.context.extensionPath, 'dist', 'webview.js'));
    const webviewUri = webviewView.webview.asWebviewUri(webviewPath);

    webviewView.webview.options = {
      enableScripts: true
    };
    webviewView.webview.html = this.getHtmlForWebview(webviewUri);
  }

  private getHtmlForWebview(webviewUri: vscode.Uri): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Webview</title>
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