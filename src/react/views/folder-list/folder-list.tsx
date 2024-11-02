import React, { useEffect } from "react";
import style from "./folder-list.module.css";
import { useAtom, useAtomValue } from "jotai";
import { folderList } from "../../services/folder-list.service";
import FolderListItem from "./components/folder-list-item";
import { sendGetFolderList } from "../../util/messages/json-handler";

interface IProps {}

const FolderList = ({ }: IProps) => {
  const folders = useAtomValue(folderList);
  
  const handleCreateClicked = (index: number) => {
    
  };
  
  return (
    <div className={style.container}>
      {
        folders === undefined 
        ? <p>Loading...</p> 
        : folders.map((folder) => {
          return(
            <FolderListItem folderData={folder} onClickCreate={handleCreateClicked} />
          )
        })
      }
    </div>
  );
};

export default FolderList;