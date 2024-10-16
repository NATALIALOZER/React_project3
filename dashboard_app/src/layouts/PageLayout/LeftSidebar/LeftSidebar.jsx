import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/slices/auth.js";
import { updateTab, selectTab } from "../../../redux/slices/tabs.js";

import "./LeftSidebar.scss";
import Logo from "../../../assets/images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { LeftSidebarData } from "../../../core/mocks/mocks.js";

const LeftSidebar = () => {
  const currentTab = useSelector(selectTab) || 0;
  
  const dispatch = useDispatch();

  function onChangeTab(index) {
    dispatch(updateTab(index));
  }

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token')
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar-logo">
        <img src={Logo} alt="Logo" />
        <span>
          Nat<span className="a">L</span>o
        </span>
      </div>
      <div className="Sidebar-menu">
        {LeftSidebarData.map((item, index) => {
          return (
            <div
              className={
                currentTab === index
                  ? "Sidebar-menuItem active"
                  : "Sidebar-menuItem"
              }
              key={index}
              onClick={() => onChangeTab(index)}
            >
              <item.icon></item.icon>
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="Sidebar-menuItem" onClick={onClickLogout}>
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;