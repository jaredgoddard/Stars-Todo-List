import { atom } from "jotai";
import { FolderData } from "../../global/message-types";

export var folderList = atom<FolderData[]>([]);
