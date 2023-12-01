import React, { useEffect } from "react";
import "./RightSidebar.scss";

import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from "../../../redux/slices/tasks";

import CustomerReview from "../../../shared/parts/CustomerReview/CustomerReview";
import TodoList from "../../../shared/parts/TodoList/TodoList";
import Loader from "../../../shared/components/Loader/Loader";

const RightAside = () => {
  const dispatch = useDispatch();
  const { tasks, tags} = useSelector(state => state.tasks);

  const isTasksLoading = tasks.status === 'loading';

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);


  return (
    <div className="RightAside">
      {isTasksLoading ? <Loader/> : <TodoList list={tasks.items}/>}
      <CustomerReview />
    </div>
  );
};

export default RightAside;