import React from "react";

import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from "../../redux/slices/auth";
import { fetchTasks } from "../../redux/slices/tasks";

import TodoList from "../../shared/parts/TodoList/TodoList";

import "./Tasks.scss";

const Tasks = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const { tasks } = useSelector(state => state.tasks);

  const updateList = () => {
    dispatch(fetchTasks(userData._id));
  }

  return (
  <div className="Tasks">
    <TodoList list={tasks.items}  updateList={updateList} />
  </div>
)};
  
export default Tasks;