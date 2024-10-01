import React from 'react';
import styles from './task.module.css';
import Checkbox from './checkbox';

interface IProps {
  title: string;
}

const Task = ({ title }: IProps) => {
  const handleCheckboxClick = () => {
    
  };
  
  return (
    <div className={styles.task} >
      <Checkbox onClicked={handleCheckboxClick} />
      <span className={styles.title} >{title}</span>
      
    </div>
  );
};

export default Task;