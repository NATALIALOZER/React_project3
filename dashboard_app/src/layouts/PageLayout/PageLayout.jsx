import React from "react";

import "./PageLayout.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainDash from "./MainDash/MainDash";
import RightSidebar from "./RightSidebar/RightSidebar";

const PageLayout = () => {

  return (
    <div className="PageLayout">
      <div className="PageLayout-container">
        <LeftSidebar />
        <MainDash />
        <RightSidebar />
      </div>
    </div>
  );
};

export default (PageLayout);