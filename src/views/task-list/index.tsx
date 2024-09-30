import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Task from './components/task';


interface IProps {}

const App = ({ }: IProps) => {
  return (
    <div>
      <h1>Hello from React in VSCode!</h1>
      <p>testing 8</p>
      <Task title="Task 1" />
      <Task title="Task 2" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);