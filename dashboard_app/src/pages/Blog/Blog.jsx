import React, { useState } from "react";

import CreateEditDialog from "../../shared/parts/CreateEditDialog/CreateEditDialog";
import CreateInput from "../../shared/components/CreateInput/CreateInput";

import "./Blog.scss";
import { NotesData } from "../../core/mocks/mocks";
import { Button, ThemeProvider } from "@mui/material";
import { UilCancel, UilEditAlt, UilFocusAdd, UilBan,} from "@iconscout/react-unicons";
import { themeButton } from "../../styles/themes/CustomButton/ThemeCustomButton";
import User from "../../assets/icons/user.svg";

const Blog = () => {
  // const [deleteMode, setDeleteMode] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    // setDeleteMode(!deleteMode);
  };

  // const setDeleteButtons = () => {
  //   if (deleteMode) {
  //     return (
  //       <Button
  //         onClick={(event) => {
  //           const targetItem = event.target.closest(".item");
  //           targetItem.style.display = "none";
  //           NotesData.pop(NotesData.find((item) => item.id === targetItem.id));
  //           if (NotesData.length <= 0) setDeleteMode(false);
  //         }}
  //       >
  //         <UilCancel></UilCancel>
  //       </Button>
  //     );
  //   }
  // };

  return (
    <div className="Blog">
      <div className="Blog-title title">Blog</div>
      <div className="Blog-content">
        <div className="Blog-create">
          <div className="Blog-card card boldblur">
            <div className="Blog-avatar">
              <img src={User} alt="profile" width={55} />
            </div>
            <div className="Blog-input" width={100}>
              <CreateInput />
            </div>
          </div>
        </div>
        <div className="Blog-top">
          {NotesData.map((item, index) => {
            return (
              <div className="Blog-card card"
                   key={index}
                   id={item.id}>
                <div className="Blog-text">
                  <div className="h4">{item.text}</div>
                  <div className="Blog-date">{item.date}</div>
                </div>
                {/* <div className="delete-checkbox">{setDeleteButtons()}</div> */}
                <div className="Blog-actions">
                  <ThemeProvider theme={themeButton}>
                    <Button className="edit-button">
                      <UilEditAlt></UilEditAlt>
                    </Button>
                    <Button className="delete-button" onClick={onDelete}>
                      <UilBan></UilBan>
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="Blog-rightSide">
          <ThemeProvider theme={themeButton}>
            <Button variant="contained" className="add-button" onClick={handleClickOpen}>
              <UilFocusAdd></UilFocusAdd>
            </Button>
          </ThemeProvider>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;