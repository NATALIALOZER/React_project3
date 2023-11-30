import React, { useState } from "react";
import "./Blog.scss";
import { UilCancel, UilEditAlt, UilFocusAdd, UilBan,} from "@iconscout/react-unicons";
import { Button } from "@mui/material";
import { NotesData } from "../../core/mocks/mocks";
import CreateEditDialog from "../../shared/parts/CreateEditDialog/CreateEditDialog";

const Blog = () => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    setDeleteMode(!deleteMode);
  };

  const setDeleteButtons = () => {
    if (deleteMode) {
      return (
        <Button
          onClick={(event) => {
            const targetItem = event.target.closest(".item");
            targetItem.style.display = "none";
            NotesData.pop(NotesData.find((item) => item.id === targetItem.id));
            if (NotesData.length <= 0) setDeleteMode(false);
          }}
        >
          <UilCancel></UilCancel>
        </Button>
      );
    }
  };

  return (
    <div className="BlogLayout">
      <div className="BlogLeftSide">
        {NotesData.map((item, index) => {
          return (
            <div
              className={"item" + (deleteMode ? " delete-mode" : "")}
              key={index}
              id={item.id}
            >
              <div className="item__text">
                <div className="h4">{item.text}</div>
                <div className="item-date">{item.date}</div>
              </div>
              <div className="delete-checkbox">{setDeleteButtons()}</div>
            </div>
          );
        })}
      </div>

      <div className="BlogRightSide">
        <button className="add-button" onClick={handleClickOpen}>
          <UilFocusAdd></UilFocusAdd>
        </button>
        <button className="delete-button" onClick={onDelete}>
          <UilBan></UilBan>
        </button>
        {/* <button className="edit-button">
          <UilEditAlt></UilEditAlt>
        </button> */}

        <CreateEditDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Blog;