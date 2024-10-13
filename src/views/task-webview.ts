import { WebviewView, Uri, WebviewViewProvider, ExtensionContext} from 'vscode';
import * as path from 'path';
import { handleMessage } from '../util/message-handler';

class MyWebviewViewProvider implements WebviewViewProvider {
  private _view?: WebviewView;

  constructor(private readonly context: ExtensionContext) {}
  

  resolveWebviewView(panel: WebviewView) {
    this._view = panel;
    const webviewPath = Uri.file(path.join(this.context.extensionPath, 'dist', 'webview.js'));
    const webviewUri = panel.webview.asWebviewUri(webviewPath);
    
    const stylePath = Uri.file(path.join(this.context.extensionPath, 'dist', 'webview.css'));
    const styleUri = panel.webview.asWebviewUri(stylePath);
    
    panel.webview.options = {
      enableScripts: true
    };
    panel.webview.onDidReceiveMessage(handleMessage);
    panel.webview.html = this.getHtmlForWebview(webviewUri, styleUri);
  }

  private getHtmlForWebview(webviewUri: Uri, styleUri: Uri): string {
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