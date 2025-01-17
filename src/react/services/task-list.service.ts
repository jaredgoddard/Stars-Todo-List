import { TaskData } from "../models/task-data";
import { saveTaskData } from "../util/messages/task-handler";
import { jotaiStore } from "../util/jotai/jotai-util";
import { atom } from "jotai";

// undefined: loading
// null: no folder open
// []: empty list
const taskListAtom = atom<TaskData[] | undefined | null>(undefined);

const setTaskList = (tasks: TaskData[] | undefined | null): void => {
  jotaiStore.set(taskListAtom, tasks);
};

const createTask = (name: string): void => {
  const currentTasks = jotaiStore.get(taskListAtom);
  if(!currentTasks) { return; }
  const newTasks = [...currentTasks, { name }];
  jotaiStore.set(taskListAtom, newTasks);
  saveTaskData(newTasks);
};

const deleteTask = (index: number): void => {
  const currentTasks = jotaiStore.get(taskListAtom);
  if(!currentTasks) { return; }
  const tasks = [...currentTasks];
  tasks.splice(index, 1);
  jotaiStore.set(taskListAtom, tasks);
  saveTaskData(tasks);
};

export { createTask, deleteTask, setTaskList, taskListAtom };