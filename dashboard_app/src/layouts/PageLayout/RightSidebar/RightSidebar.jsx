import React from "react";
import "./RightSidebar.scss";

import CustomerReview from "../../../shared/parts/CustomerReview/CustomerReview";
import TodoList from "../../../shared/parts/TodoList/TodoList";

const RightAside = () => {
  return (
    <div className="RightAside">
      <TodoList />
      <CustomerReview />
    </div>
  );
};

export default RightAside;