import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


interface IProps {}

const App = ({ }: IProps) => {
  return (
    <div>
      <h1>Hello from React in VSCode!</h1>
      <p>testing1</p>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);