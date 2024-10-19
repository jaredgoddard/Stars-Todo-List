import React from "react";
import style from "./folder-list.module.css";

interface IProps {}

const FolderList = ({ }: IProps) => {
  return (
    <div className={style.container}>
      <p>Folder 1</p>
    </div>
  );
};

export default FolderList;