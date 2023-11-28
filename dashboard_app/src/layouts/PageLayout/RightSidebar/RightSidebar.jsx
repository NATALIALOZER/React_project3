import React from "react";
// import CustomerReview from "../../../parts/CustomerReview/CustomerReview";
// import TodoList from "../../../parts/TodoList/TodoList";
import "./RightSidebar.scss";

const RightAside = () => {
  return (
    <div className="RightAside">
      <div>
        <div className="sub-title">To Do:</div>
        {/* <TodoList /> */}
      </div>
      <div>
        <div className="sub-title">Customer Review</div>
        {/* <CustomerReview /> */}
      </div>
    </div>
  );
};

export default RightAside;