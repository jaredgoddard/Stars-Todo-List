import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './task-list';

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
    <TaskList/>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <App />
);