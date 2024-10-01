import { TaskData } from "../models/task-data";

var taskList: TaskData[] = [
  { name: 'Task 1' },
  { name: 'Task 2' },
  { name: 'Task 3' },
  { name: 'Task 4' },
  { name: 'Task 5' },
  { name: 'Task 6' },
  { name: 'Task 7' },
  { name: 'Task 8' },
  { name: 'Task 9' },
  { name: 'Task 10' }
];

const getTaskList = (): TaskData[] => {
  return taskList;
};

const createTask = (name: string): void => {
  
};

const deleteTask = (): void => {
  
};

export { getTaskList, createTask, deleteTask };