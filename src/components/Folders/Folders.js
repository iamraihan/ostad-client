import axios from "axios";
import React from "react";
import "./Folders.css";
const Folders = ({ folder }) => {
  //   console.log(folder._id);
  const addFolder = () => {
    console.log("click");
  };
  const removeFolder = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:5000/folders/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="folder-item-wraper">
        <div className="folder-item">
          <p className="folder">{folder.folder}</p>
          <p className="remove-button" onClick={() => removeFolder(folder._id)}>
            X
          </p>
        </div>
        <div className="folder-add-item" onClick={() => addFolder()}>
          <p className="remove-button">+</p>
          <p> New</p>
        </div>
      </div>
    </div>
  );
};

export default Folders;
