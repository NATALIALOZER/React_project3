import React, { useState } from "react";

import "./PageLayout.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainDash from "./MainDash/MainDash";
import RightSidebar from "./RightSidebar/RightSidebar";

const PageLayout = () => {
  const [currentTab, setTab] = useState(0);

  function changeView(tabIndex) {
    setTab(tabIndex);
  }

  return (
    <div className="PageLayout">
      <div className="PageLayout-container">
        <LeftSidebar handleTabSwich={changeView} />
        <MainDash currentTab={currentTab} />
        <RightSidebar />
      </div>
    </div>
  );
};

export default (PageLayout);