import React from 'react';
import styles from './layout.module.css';
import TaskList from '../task-list/task-list';

interface IProps {}

const Layout = ({ }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.title}>
          <p className={styles.titleText}>Task List</p>
        </div>
      </div>
      <div className={styles.content}>
        <TaskList />
      </div>
    </div>
  );
};

export default Layout;