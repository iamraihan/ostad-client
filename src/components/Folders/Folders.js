import axios from "axios";
import React, { useState } from "react";
import "./Folders.css";
const Folders = ({ folder }) => {
  // state for delete folder
  const [showConfirmation, setShowConfirmation] = useState(false);
  // state for addding a folder
  const [popUpOpen, setPopUpOpen] = useState(false);

  // function for adding folder
  const handleSubmit = (e) => {
    e.preventDefault();
    const folder = e.target.name.value;
    const data = { folder };
    axios
      .post("https://ostad-server.onrender.com/folders", data)
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // new folder adding
  const handleClick = () => {
    setPopUpOpen(true);
  };

  // delete folder
  const removeFolder = (id) => {
    // console.log(id);
    axios
      .delete(`https://ostad-server.onrender.com/folders/${id}`)
      .then((res) => {
        console.log(res.data);
        setShowConfirmation(false);
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
          <button onClick={() => setShowConfirmation(true)}>X</button>
          {showConfirmation && (
            <div className="confirmation">
              <p>Are you sure you want to delete Folder?</p>
              <button
                className="submit-button"
                onClick={() => removeFolder(folder._id)}
              >
                Delete
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="cancel-button"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div>
          <button className="folder-add-item " onClick={handleClick}>
            + New
          </button>
          {popUpOpen && (
            <div className="pop-up-window">
              <form className="folder-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Folder Name"
                  id=""
                />
                <button className="submit-button" type="submit">
                  Create
                </button>
              </form>
              <button
                className="cancel-button"
                onClick={() => setPopUpOpen(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Folders;
