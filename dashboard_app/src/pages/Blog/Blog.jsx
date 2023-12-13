import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../../redux/slices/posts";
import { selectPosts } from "../../redux/slices/posts";
import { selectUserData } from "../../redux/slices/auth";

import CreateInput from "../../shared/components/CreateInput/CreateInput";
import Loader from "../../shared/components/Loader/Loader";

import "./Blog.scss";
import { Button, ThemeProvider } from "@mui/material";
import { UilCancel, UilEditAlt, UilFocusAdd, UilBan,} from "@iconscout/react-unicons";
import { themeButton } from "../../styles/themes/CustomButton/ThemeCustomButton";
import User from "../../assets/icons/user.svg";

const Blog = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const {posts} = useSelector(selectPosts);

  const isPostsLoading = posts.status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts(userData._id));
  }, []);

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
              <CreateInput type={'post'}/>
            </div>
          </div>
        </div>
        <div className="Blog-top">
          {isPostsLoading ? <Loader/> : posts.items?.map((item, index) => {
            return (
              <div className="Blog-card card"
                   key={index}
                   id={item._id}>
                <div className="Blog-text">
                  <div className="h4">{item.text}</div>
                  {/* <div className="Blog-date">{item.date}</div> */}
                </div>
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
      </div>
    </div>
  );
};

export default Blog;