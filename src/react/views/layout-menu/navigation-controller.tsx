import React from "react";
import TaskList from "../task-list/task-list";
import FolderList from "../folder-list/folder-list";
import { atom, useAtomValue } from "jotai";

export enum NavigationView {
  TASK_LIST = 'Task List',
  FOLDER_LIST = 'Folder List',
}

export const currentView = atom<NavigationView>(NavigationView.TASK_LIST);

interface IProps {}

const navigationView: { [key in NavigationView]?: React.JSX.Element } = {
  [NavigationView.TASK_LIST]: <TaskList />,
  [NavigationView.FOLDER_LIST]: <FolderList />,
};

const NavigationController = ({ }: IProps) => {
  const view = useAtomValue(currentView);
  
  return ( navigationView[view] );
};


export default NavigationController;