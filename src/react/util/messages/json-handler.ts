import { MessageType, FolderData, NotificationType } from "../../../global/message-types";
import { folderList } from "../../services/folder-list.service";
import { jotaiStore } from "../jotai/jotai-util";
import { showNotification } from "./notification-handler";

export const handleFolderList = (folderDataList: FolderData[]) => {
  jotaiStore.set(folderList, folderDataList);
};