import * as React from "react";
import "./TodoList.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/icons-material/Comment";
// import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { themeCheckbox } from "../../../styles/themes/CustomCheckbox/ThemeCustomCheckbox";
// import { changeStatus } from "../../../store/reducers/todoListReducer";
// import { updateTask } from "../../../store/actions/todoList";

const TodoList = ({ user, list, dispatch }) => {
//   function handleCheck(event, item) {
//     updateTask(user, { ...item, checked: event.target.checked });
//     return (dispatch) =>
//       dispatch(changeStatus({ id: item.id, checked: event.target.checked }));
//   }

  return (
    <div className="list-container">
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
                      />
                      {/* onChange={(event) => dispatch(handleCheck(event, item))} */}
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={"#" + item.id + ". " + item.text}
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