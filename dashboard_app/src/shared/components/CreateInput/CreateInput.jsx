import React, { useState } from "react";
// import { connect } from "react-redux";
// import { setTask } from "../../../store/actions/todoList";

import "./CreateInput.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../../styles/themes/CustomButton/ThemeCustomButton";
import { themeTextaria } from "../../../styles/themes/CustomTextaria/ThemeCustomTextaria";

const CreateInput = ({ list, user, dispatch }) => {
  const [text, setText] = useState("");

//   function saveTask(text) {
//     return (dispatch) => {
//       const newTask = {
//         id: list.length ? +list[list.length - 1].id + 1 : 1,
//         text,
//       };

//       dispatch(setTask(user, newTask));
//     };
//   }

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
        <Button variant="contained">
          ADD
        </Button>
        {/* onClick={() => dispatch(saveTask(text))} */}
      </ThemeProvider>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     list: state.tasks.tasks,
//     user: state.user,
//   };
// }

export default (CreateInput);

// connect(mapStateToProps)