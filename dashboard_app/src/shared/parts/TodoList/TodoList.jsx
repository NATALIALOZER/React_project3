import * as React from "react";

import axios from "../../../axios";

import { useDispatch } from 'react-redux'
import { deleteTask } from "../../../redux/slices/tasks";

import "./TodoList.scss";
import { ThemeProvider } from "@mui/material/styles";
import { themeCheckbox } from "../../../styles/themes/CustomCheckbox/ThemeCustomCheckbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const TodoList = ({list, updateList, isRightMenu}) => {
  const dispatch = useDispatch();

  const handleCheck = async (item) => {
    const data = await axios.patch(`/tasks/${item._id}`, {
      checked: !item.checked
    }).then(() => updateList());
  }

  const onDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className="List">
      <div className="sub-title">To Do:</div>
      {list?.length ? (
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {list.map((item, i) => {
            const labelId = `checkbox-list-label-${i}`;

            return !isRightMenu ? (
              <ListItem key={i} disablePadding>
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
                <ListItemButton onClick={() => onDelete(item._id)}>Delete</ListItemButton>
              </ListItem>
            ) : (!item.checked ?
              <ListItem key={i} disablePadding>
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
              : ''
            );
          })}
        </List>
      ) : (
        "No tasks for now :)"
      )}
    </div>
  );
};

export default TodoList;