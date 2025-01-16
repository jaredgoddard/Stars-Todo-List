import { TaskData } from "../models/task-data";
import { saveTaskData } from "../util/messages/task-handler";
import { jotaiStore } from "../util/jotai/jotai-util";
import { atom } from "jotai";

const taskListAtom = atom<TaskData[]>([]);

const setTaskList = (tasks: TaskData[]): void => {
  jotaiStore.set(taskListAtom, tasks);
};

const createTask = (name: string): void => {
  const currentTasks = jotaiStore.get(taskListAtom);
  const newTasks = [...currentTasks, { name }];
  jotaiStore.set(taskListAtom, newTasks);
  saveTaskData(newTasks);
};

const deleteTask = (index: number): void => {
  const tasks = [...jotaiStore.get(taskListAtom)];
  tasks.splice(index, 1);
  jotaiStore.set(taskListAtom, tasks);
  saveTaskData(tasks);
};

export { createTask, deleteTask, setTaskList, taskListAtom };