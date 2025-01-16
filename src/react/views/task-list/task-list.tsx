import React, { useEffect } from "react";
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
  
  return (
    <div className={styles.container}>
      <AddTaskTextField onSubmit={handleTaskSubmit}/>
      {taskList.map((task, index) => (
        <Task 
          id={index} 
          title={task.name} 
          onComplete={handleTaskCompleted}
        />
      ))}
    </div>
  );
};

export default TaskList;
