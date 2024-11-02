import React from 'react';
import { FolderData } from '../../../../global/message-types';
import style from "./folder-list-item.module.css";

interface FolderListItemProps {
  folderData: FolderData;
  onClickCreate: (index: number) => void;
}

const FolderListItem: React.FC<FolderListItemProps> = ({ folderData, onClickCreate }) => {
  
  const handleCreateClicked = () => {
    onClickCreate(folderData.index);
  }
  
  return (
    <div className={style.container}>
      <p className={style.title}>{folderData.name}</p>
      <button className={style.createButton} onClick={handleCreateClicked}>Create Json</button>
    </div>
  );
};

export default FolderListItem;