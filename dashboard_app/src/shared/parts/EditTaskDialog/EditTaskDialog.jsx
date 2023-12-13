import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { updateTask } from "../../../redux/slices/tasks";

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

const EditTaskDialog = ({ open, item, handleClose }) => {

  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      title: item.title || '',
      content: item.content || '',
      tags: item.tags || '',
    } ,
    mode: 'all'
  });

  const dispatch = useDispatch();
  
  const onSubmit = async (values) => {

    const updatedTask = {
      ...item,
      ...values
    }

    const data = await dispatch(updateTask(updatedTask));
    if (data.payload) {
      toast('Task is updated');  
      handleClose();
    } else {
      toast('Error on auth proccess');     
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <form className="Edit-form" onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <ThemeProvider theme={themeTextaria}>
            <TextField
              label="Title"
              type='text'
              className="text-field"
              helperText={errors.text?.message}
              error={Boolean(errors.text?.message)}
              {...register('title', {required: 'Type the title'})}
              autoFocus
              fullWidth
            ></TextField>
            <br/>
            <br/>
            <br/>
            <TextField
              label="Text"
              type="text"
              className="text-field"
              helperText={errors.content?.message}
              error={Boolean(errors.content?.message)}
              {...register('content', {required: 'Type the content'})}
              fullWidth
            ></TextField>
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
          <ThemeProvider theme={themeButton}>
            <Button className="Edit-button button" type="submit">Edit</Button>
          </ThemeProvider>
        </form>
      </DialogContent>
      <DialogActions>
      <ThemeProvider theme={themeButton}>
      <Button onClick={handleClose}>
          Cancel
        </Button>
      </ThemeProvider>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskDialog;