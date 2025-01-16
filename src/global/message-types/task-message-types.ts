import { TaskData } from "../../util/messages/task-handler";

export interface SaveTaskData {
  tasks: TaskData[];
}

export interface RefreshTaskData {
  tasks: TaskData[];
}