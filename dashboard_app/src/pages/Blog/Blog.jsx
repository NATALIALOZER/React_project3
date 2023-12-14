import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from "../../redux/slices/posts";
import { selectPosts } from "../../redux/slices/posts";
import { selectUserData } from "../../redux/slices/auth";

import CreateInput from "../../shared/components/CreateInput/CreateInput";
import CreateEditDialog from "../../shared/parts/CreateEditDialog/CreateEditDialog";
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
  const [open, setOpen] = useState(false);

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

  const onDelete = (id) => {
    dispatch(deletePost(id));
  };

  const onEdit = (post) => {
    handleClickOpen();
  }

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
                    <Button className="edit-button" onClick={() => onEdit(item)}>
                      <UilEditAlt></UilEditAlt>
                    </Button>
                    <Button className="delete-button" onClick={() => onDelete(item._id)}>
                      <UilBan></UilBan>
                    </Button>
                  </ThemeProvider>
                </div>
                <CreateEditDialog open={open} item={item} handleClose={handleClose} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;