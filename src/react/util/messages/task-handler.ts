import { MessageExtensionType } from "../../../global/message-types";
import { RefreshTaskData } from "../../../global/message-types/task-message-types";
import { TaskData } from "../../models/task-data";
import { setTaskList } from "../../services/task-list.service";
import { sendMessage } from "./message-handler";

export const saveTaskData = (tasks: TaskData[]) => {
  const messageType = MessageExtensionType.SAVE_TASK_DATA;
  const messageData = {
    tasks,
  };
  sendMessage(messageType, messageData);
};

export const getTaskData = () => {
  const messageType = MessageExtensionType.GET_TASK_DATA;
  sendMessage(messageType, undefined);
};

export const handleRefreshTaskData = (taskData: RefreshTaskData) => {
  setTaskList(taskData.tasks);
};