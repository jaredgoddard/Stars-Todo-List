import React from 'react';
import styles from './task.module.css';
import Checkbox from './checkbox';

interface IProps {
  id: number;
  title: string;
  onComplete: (id: number) => void;
}

const Task = ({ id, title, onComplete }: IProps) => {
  const handleCheckboxClick = () => {
    onComplete(id);
  };
  
  return (
    <div className={styles.task} >
      <Checkbox onClicked={handleCheckboxClick} />
      <span className={styles.title} >{title}</span>
    </div>
  );
};

export default Task;