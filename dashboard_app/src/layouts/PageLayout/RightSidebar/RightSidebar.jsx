import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { updateTab } from "../../../redux/slices/tabs.js";
import { fetchTasks } from "../../../redux/slices/tasks";
import { selectUserData } from "../../../redux/slices/auth";

import { TabsTypes } from "../../../layouts/PageLayout/LeftSidebar/tabsTypes.ts";

import CustomerReview from "../../../shared/parts/CustomerReview/CustomerReview";
import TodoList from "../../../shared/parts/TodoList/TodoList";
import Loader from "../../../shared/components/Loader/Loader";

import "./RightSidebar.scss";
import { Button } from "@mui/material";

const RightAside = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  
  const userData = useSelector(selectUserData);

  const isTasksLoading = tasks.status === 'loading';

  useEffect(() => {
    dispatch(fetchTasks(userData._id));
  }, []);

  const updateList = () => {
    dispatch(fetchTasks(userData._id));
  }

  const toArchive = () => {
    dispatch(updateTab(TabsTypes.TASKS));
  }

  return (
    <div className="RightAside">
      {isTasksLoading ? <Loader/> : <TodoList list={tasks.items}  updateList={updateList} isRightMenu={true}/>}
      <Button onClick={() => toArchive()}>Archive</Button>
      <CustomerReview />
    </div>
  );
};

export default RightAside;