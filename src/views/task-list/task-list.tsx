import React, { useEffect } from "react";
import Task from "./components/task/task";
import { TaskData } from "../../models/task-data";
import { getTaskList } from "../../controllers/task-list.controller";

const TaskList = () => {
  const [taskList, setTaskList] = React.useState<TaskData[]>([]);
  useEffect(() => {setTaskList(getTaskList)}, []);
  
  return (
    <div>
      {taskList.map((task) => (<Task title={task.name} />))}
    </div>
  );
};

export default TaskList;