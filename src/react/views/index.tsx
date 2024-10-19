import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from '../../react/views/task-list/task-list';
import Layout from './layout-menu/layout';

declare global {
  interface Window {
    vscode: any;
  }
}

const vscode = window.acquireVsCodeApi();
window.vscode = vscode;

interface IProps {}

const App = ({ }: IProps) => {
  return (
    <Layout />
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <App />
);