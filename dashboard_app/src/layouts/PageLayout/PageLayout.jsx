import React, { useEffect, useState } from "react";

import "./PageLayout.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainDash from "./MainDash/MainDash";
import RightSidebar from "./RightSidebar/RightSidebar";

// import { getTasks } from "../../../store/actions/todoList";
// import { connect } from "react-redux";
// import { useDispatch } from "react-redux";

const PageLayout = ({ user }) => {
  const [currentTab, setTab] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTasks(user.id));
//   }, [user]);

  function changeView(tabIndex) {
    setTab(tabIndex);
  }

  return (
    <div className="page">
      <div className="container">
        <LeftSidebar handleTabSwich={changeView} />
        <MainDash currentTab={currentTab} />
        <RightSidebar />
      </div>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     user: state.user.currentUser,
//   };
// }

export default (PageLayout);