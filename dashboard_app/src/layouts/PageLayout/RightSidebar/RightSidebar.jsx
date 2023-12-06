import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from "../../../redux/slices/tasks";
import { selectUserData } from "../../../redux/slices/auth";

import CustomerReview from "../../../shared/parts/CustomerReview/CustomerReview";
import TodoList from "../../../shared/parts/TodoList/TodoList";
import Loader from "../../../shared/components/Loader/Loader";

import "./RightSidebar.scss";

const RightAside = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  
  const userData = useSelector(selectUserData);

  const isTasksLoading = tasks.status === 'loading';

  useEffect(() => {
    console.log(userData);
    dispatch(fetchTasks(userData._id));
  }, []);

  const updateList = () => {
    dispatch(fetchTasks(userData._id));
  }


  return (
    <div className="RightAside">
      {isTasksLoading ? <Loader/> : <TodoList list={tasks.items}  updateList={updateList} />}
      <CustomerReview />
    </div>
  );
};

export default RightAside;