import React, { useCallback, useEffect, useMemo } from "react";
import Task from "./components/task/task";
import AddTaskTextField from "./components/add-task/add-task-text-field";
import styles from './task-list.module.css';
import { useAtom } from "jotai";
import { createTask, deleteTask, taskListAtom,  } from "../../services/task-list.service";

const TaskList = () => {
  const [taskList, _] = useAtom(taskListAtom);
  
  const handleTaskSubmit = (value: string) => { 
    createTask(value);
  };
  
  const handleTaskCompleted = (id: number) => {
    deleteTask(id);
  };
  
  const isLoading = useMemo(() => taskList === undefined, [taskList]);
  const noFolder = useMemo(() => taskList === null, [taskList]);
  const taskComponents = useMemo(() => {
    if(taskList === undefined || taskList === null) return <></>;
    return taskList.map((task, index) => (
      <Task 
        id={index} 
        title={task.name} 
        onComplete={handleTaskCompleted}
      />
    ));
  }, [taskList]);
  
  return (
    <div className={styles.container}>
      {isLoading && <p className={styles.text}>Loading...</p>}
      {noFolder && <p className={styles.text}>No Folder is Open.</p>}
      {!isLoading && !noFolder && <AddTaskTextField onSubmit={handleTaskSubmit}/>}
      {taskComponents}
    </div>
  );
};

export default TaskList;
