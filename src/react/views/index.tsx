import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout-menu/layout';
import { Provider as JotaiProvider } from 'jotai';
import { jotaiStore } from '../util/jotai/jotai-util';
import { useEffect } from 'react';
import { handleMessage } from '../util/messages/message-handler';
import { sendGetFolderList } from '../util/messages/json-handler';

declare global {
  interface Window {
    vscode: any;
  }
}

const vscode = window.acquireVsCodeApi();
window.vscode = vscode;

interface IProps {}

const App = ({ }: IProps) => {
  useEffect(() => {
    window.addEventListener('message', event => {
      handleMessage(event.data);
    });
    
    // load initial data
    sendGetFolderList();
  }, []);

  return (
    <JotaiProvider store={jotaiStore}>
      <Layout />
    </JotaiProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <App />
);