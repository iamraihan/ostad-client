import axios from "axios";
import React, { useState } from "react";
import "./Folders.css";
const Folders = ({ folder }) => {
  //   console.log(folder._id);
  const handleSubmit = (e) => {
    e.preventDefault();

    const folder = e.target.name.value;

    const data = { folder };
    axios
      .post("http://localhost:5000/folders", data)
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [popUpOpen, setPopUpOpen] = useState(false);

  const handleClick = () => {
    setPopUpOpen(true);
  };

  // delete folder
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
        {/* <div className="folder-add-item" onClick={handleClick}>
          <p className="remove-button">+</p>
          <p> New</p>
        </div> */}
      </div>
    </div>
  );
};

export default Folders;
