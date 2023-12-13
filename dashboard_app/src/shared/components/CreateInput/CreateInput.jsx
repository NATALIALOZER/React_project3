import React, { useState } from "react";

import { useDispatch } from 'react-redux'
import { createTask } from "../../../redux/slices/tasks";
import { createPost } from "../../../redux/slices/posts";

import "./CreateInput.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../../styles/themes/CustomButton/ThemeCustomButton";
import { themeTextaria } from "../../../styles/themes/CustomTextaria/ThemeCustomTextaria";

const CreateInput = ({ type }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const save = (text) => {
    const item = type === 'task' ? {
      title: text,
      content: '',
      tags: '',
      checked: false
    } : {
      text: text,
      tags: ''
    }

    type === 'task' ? dispatch(createTask(item)) : dispatch(createPost(item));
    setText('');
  } 

  return (
    <div className="CreateInput">
      <ThemeProvider theme={themeTextaria}>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Create"
          multiline
          rows={2}
          placeholder="todo..."
          onChange={(e) => setText(e.target.value)}
        />
      </ThemeProvider>
      <ThemeProvider theme={themeButton}>
        <Button variant="contained" onClick={() => save(text)}>
          ADD
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default CreateInput;