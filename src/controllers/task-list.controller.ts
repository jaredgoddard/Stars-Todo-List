import { TaskData } from "../models/task-data";
import { getTaskList as getList } from "../services/task-list.service";

const getTaskList = (): TaskData[] => {
  return getList();
};

const onTaskCreated = () => {
  
};

const onTaskCompleted = () => {
  
};

export { getTaskList, onTaskCreated, onTaskCompleted };