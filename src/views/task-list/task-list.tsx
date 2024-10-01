import React, { useEffect } from "react";
import Task from "./components/task/task";
import { TaskData } from "../../models/task-data";
import { getTaskList, onTaskCompleted, onTaskCreated } from "../../controllers/task-list.controller";

const TaskList = () => {
  const [taskList, setTaskList] = React.useState<TaskData[]>([]);
  
  const updateTaskList = () => {
    const tasks = getTaskList();
    setTaskList(tasks);
  };
  
  const addTask = () => {
    onTaskCreated('New Task');
    updateTaskList();
  };
  
  const removeTask = (index: number) => {
    onTaskCompleted(index);
    updateTaskList();
  };
  
  useEffect(() => {
    updateTaskList();
  }, []);
  
  const handleAddClick = () => { 
    addTask();
  };
  
  const handleTaskCompleted = (id: number) => {
    removeTask(id);
  };
  
  return (
    <div>
      <button onClick={handleAddClick}>Add</button>
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