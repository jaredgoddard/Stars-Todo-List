import React, { useEffect } from "react";
import Task from "./components/task/task";
import { TaskData } from "../../models/task-data";
import { getTaskList, onTaskCompleted, onTaskCreated } from "../../controllers/task-list.controller";
import AddTaskTextField from "./components/add-task/add-task-text-field";
import styles from './task-list.module.css';

const TaskList = () => {
  const [taskList, setTaskList] = React.useState<TaskData[]>([]);
  
  const updateTaskList = () => {
    const tasks = getTaskList();
    setTaskList(tasks);
  };
  
  const removeTask = (index: number) => {
    onTaskCompleted(index);
    updateTaskList();
  };
  
  useEffect(() => {
    updateTaskList();
  }, []);
  
  const handleTaskSubmit = (value: string) => { 
    onTaskCreated(value);
    updateTaskList();
  };
  
  const handleTaskCompleted = (id: number) => {
    removeTask(id);
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