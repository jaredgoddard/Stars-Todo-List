import { TaskData } from "../models/task-data";
import { createTask, deleteTask, getTaskList as getList } from "../services/task-list.service";

const getTaskList = (): TaskData[] => {
  return getList();
};

const onTaskCreated = (name: string) => {
  createTask(name);
};

const onTaskCompleted = (index: number) => {
  deleteTask(index);
};

export { getTaskList, onTaskCreated, onTaskCompleted };