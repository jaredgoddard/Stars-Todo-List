import { MessageType, FolderData, NotificationType } from "../../../global/message-types";
import { folderList } from "../../services/folder-list.service";
import { jotaiStore } from "../jotai/jotai-util";
import { sendMessage } from "./message-handler";
import { showNotification } from "./notification-handler";

export const handleFolderList = (folderDataList: FolderData[]) => {
  jotaiStore.set(folderList, folderDataList);
};

export const sendGetFolderList = () => {
  sendMessage(MessageType.GET_FOLDER_LIST, {});
};