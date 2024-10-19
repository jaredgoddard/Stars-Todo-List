import React from "react";
import TaskList from "../task-list/task-list";
import FolderList from "../folder-list/folder-list";

export enum NavigationView {
  TASK_LIST = 'Task List',
  FOLDER_LIST = 'Folder List',
}

interface IProps {
  view: NavigationView;
}

const navigationView: { [key in NavigationView]?: React.JSX.Element } = {
  [NavigationView.TASK_LIST]: <TaskList />,
  [NavigationView.FOLDER_LIST]: <FolderList />,
};

const NavigationController = ({ view }: IProps) => {
  return ( navigationView[view] );
};


export default NavigationController;