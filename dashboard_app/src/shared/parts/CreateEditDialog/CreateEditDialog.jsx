import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/slices/posts";

import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../../styles/themes/CustomButton/ThemeCustomButton";
import { themeTextaria } from "../../../styles/themes/CustomTextaria/ThemeCustomTextaria";

const CreateEditDialog = ({ open, item, handleClose }) => {
  const dispatch = useDispatch();
  
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      text: item.text || '',
      tags: item.tags || '',
    } ,
    mode: 'all'
  });

  const onSubmit = async (values) => {

    const updatedPost = {
      ...item,
      ...values
    }

    const data = await dispatch(updatePost(updatedPost));
    if (data.payload) {
      toast('Post is updated');  
      handleClose();
    } else {
      toast('Error on auth proccess');     
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          color: "aquamarine",
          backgroundColor: "white",
          borderRadius: "1rem",
        },
      }}
    >
      <DialogTitle>Update post</DialogTitle>
      <DialogContent>
        <form className="Edit-form" onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <ThemeProvider theme={themeTextaria}>
            <TextField
              autoFocus
              multiline
              margin="dense"
              id="post-text"
              label="Text"
              type="text"
              fullWidth
              variant="standard"
              className="text-field"
              helperText={errors.text?.message}
              error={Boolean(errors.text?.message)}
              {...register('text', {required: 'Type the text'})}
              sx={{
                width: "540px",
                "& .MuiFormLabel-root": { color: "aquamwhitearine" },
                "& .MuiInput-root:after": { borderBottom: "none" },
              }}
            />
            <br/>
            <br/>
            <br/>
            <TextField
              label="Tags"
              type="text"
              className="text-field"
              helperText={errors.tags?.message}
              error={Boolean(errors.tags?.message)}
              {...register('tags', {required: 'Type the tags'})}
              fullWidth
            ></TextField>
          </ThemeProvider>
          <br/>
          <br/>
          <br/>
          <Button type="submit" sx={{ color: "aquamarine" }}>
            Post
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "aquamarine" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEditDialog;