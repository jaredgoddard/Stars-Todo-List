import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout-menu/layout';
import { Provider as JotaiProvider } from 'jotai';
import { jotaiStore } from '../util/jotai/jotai-util';
import { useEffect } from 'react';
import { handleMessage } from '../util/messages/message-handler';
import { getTaskData } from '../util/messages/task-handler';

declare global {
  interface Window {
    vscode: any;
  }
}

const vscode = window.acquireVsCodeApi();
window.vscode = vscode;

getTaskData();

interface IProps {}

const App = ({ }: IProps) => {
  useEffect(() => {
    window.addEventListener('message', event => {
      handleMessage(event.data);
    });
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