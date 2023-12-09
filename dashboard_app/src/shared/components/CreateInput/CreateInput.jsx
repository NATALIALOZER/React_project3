import React, { useState } from "react";

import { useDispatch } from 'react-redux'
import { createTask } from "../../../redux/slices/tasks";

import "./CreateInput.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../../styles/themes/CustomButton/ThemeCustomButton";
import { themeTextaria } from "../../../styles/themes/CustomTextaria/ThemeCustomTextaria";

const CreateInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const saveTask = (title) => {
    dispatch(createTask(
      {
        title: title,
        content: '',
        tags: '',
        checked: false
      }
    ));
  } 

  return (
    <div className="CreateInput">
      <ThemeProvider theme={themeTextaria}>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Create task"
          multiline
          rows={2}
          placeholder="todo..."
          onChange={(e) => setText(e.target.value)}
        />
      </ThemeProvider>
      <ThemeProvider theme={themeButton}>
        <Button variant="contained" onClick={() => saveTask(text)}>
          ADD
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default CreateInput;