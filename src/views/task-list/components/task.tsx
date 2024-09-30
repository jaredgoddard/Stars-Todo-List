import React from 'react';
import styles from './task.module.css';

interface IProps {
  title: string;
}

const Task = ({ title }: IProps) => {
  console.log('Styles:', styles); // Add this line for debugging
  return (
    <div  className={styles.task} >
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.title} >{title}</span>
    </div>
  );
};

export default Task;