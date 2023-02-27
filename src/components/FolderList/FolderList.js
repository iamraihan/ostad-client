import axios from "axios";
import React, { useEffect, useState } from "react";
import Folders from "../Folders/Folders";

const FolderList = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/folders")
      .then((res) => {
        setFolders(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [folders]);
  return (
    <div>
      {folders.map((folder) => (
        <Folders key={folder._id} folder={folder}></Folders>
      ))}
    </div>
  );
};

export default FolderList;
