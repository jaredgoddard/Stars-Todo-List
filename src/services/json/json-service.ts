import path from 'path';
import * as vscode from 'vscode';
import { sendMessage } from '../../util/messages/message-handler';
import { MessageType } from '../../global/message-types';
import { FolderData } from '../../global/message-types/json-message-types';
import { atom } from 'jotai';
import { showInfoNotification } from '../../util/notification-util';


export const folderDataList = atom<FolderData[]>([]);

const sendFolderList = () => {
  // Get the new list of folders
  const folders = vscode.workspace.workspaceFolders;

  // Create a list of folder data
  if(!folders) {
    sendMessage(MessageType.FOLDER_LIST, []);
    return;
  }
  
  const folderDataList: FolderData[] = folders!.map(folder => {
    return {
      index: folder.index,
      name: folder.name,
      path: folder.uri.path,
      jsonPath: "",
    };
  });
  
  // Send the list of folders to the webview
  
  sendMessage(MessageType.FOLDER_LIST, folderDataList);
};

export { sendFolderList };