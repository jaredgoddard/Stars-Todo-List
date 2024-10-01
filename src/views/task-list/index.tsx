import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Task from './components/task/task';
import styles from './index.module.css';

interface IProps {}

const App = ({ }: IProps) => {
  return (
    <div>
      <Task title="Task 1" />
      <Task title="Task 2" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);