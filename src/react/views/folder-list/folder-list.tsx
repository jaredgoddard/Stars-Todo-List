import React from "react";
import style from "./folder-list.module.css";
import { useAtom, useAtomValue } from "jotai";
import { folderList } from "../../services/folder-list.service";

interface IProps {}

const FolderList = ({ }: IProps) => {
  const folders = useAtomValue(folderList);
  return (
    <div className={style.container}>
      {
        folders.map((folder) => {
          return(
            <p>{folder.name}</p>
          )
        })
      }
    </div>
  );
};

export default FolderList;