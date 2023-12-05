import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from "../../../redux/slices/tasks";

import CustomerReview from "../../../shared/parts/CustomerReview/CustomerReview";
import TodoList from "../../../shared/parts/TodoList/TodoList";
import Loader from "../../../shared/components/Loader/Loader";

import "./RightSidebar.scss";

const RightAside = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);

  const isTasksLoading = tasks.status === 'loading';

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const updateList = () => {
    dispatch(fetchTasks());
  }


  return (
    <div className="RightAside">
      {isTasksLoading ? <Loader/> : <TodoList list={tasks.items}  updateList={updateList} />}
      <CustomerReview />
    </div>
  );
};

export default RightAside;