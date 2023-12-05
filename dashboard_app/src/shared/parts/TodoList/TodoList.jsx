import * as React from "react";

import axios from "../../../axios";

// import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/icons-material/Comment";
// import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { themeCheckbox } from "../../../styles/themes/CustomCheckbox/ThemeCustomCheckbox";
// import { changeStatus } from "../../../store/reducers/todoListReducer";
// import { updateTask } from "../../../store/actions/todoList";

import "./TodoList.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const TodoList = ({list, updateList}) => {

  const handleCheck = async (item) => {
    const data = await axios.patch(`/tasks/${item._id}`, {
      checked: !item.checked
    }).then(() => updateList());
  }

  return (
    <div className="List">
      <div className="sub-title">To Do:</div>
      {list?.length ? (
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {list.map((item, i) => {
            const labelId = `checkbox-list-label-${i}`;

            return (
              <ListItem
                key={i}
                // secondaryAction={
                //   <IconButton edge="end" aria-label="comments">
                //     <CommentIcon />
                //   </IconButton>
                // }
                disablePadding
              >
                <ListItemButton className="Item" role={undefined} dense>
                  <ListItemIcon>
                    <ThemeProvider theme={themeCheckbox}>
                      <Checkbox
                        edge="start"
                        checked={item.checked || false}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                        onChange={() => handleCheck(item)}
                      />
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={item.title}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        "No tasks for now :)"
      )}
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     list: state.tasks.tasks,
//     user: state.user,
//   };
// }

// export default connect(mapStateToProps)(TodoList);

export default (TodoList);