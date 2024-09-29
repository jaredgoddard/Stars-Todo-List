import * as vscode from 'vscode';

class MyWebviewViewProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;

  constructor(private readonly context: vscode.ExtensionContext) {

  }

  resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true
    };
    webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
  }

  private getHtmlForWebview(webview: vscode.Webview): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Webview View</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .rectangle {
            width: 100px;
            height: 50px;
            background-color: blue;
            margin: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Webview View</h1>
        <div class="rectangle"></div>
      </body>
      </html>
    `;
  }
}

export { MyWebviewViewProvider };