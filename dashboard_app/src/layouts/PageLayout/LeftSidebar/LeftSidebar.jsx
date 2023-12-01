import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, logout } from "../../../redux/slices/auth.js";

import { LeftSidebarData } from "../../../core/mocks/mocks.js";

import "./LeftSidebar.scss";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import Logo from "../../../assets/images/logo.png";

const LeftSidebar = (props) => {
  const [selected, setSelected] = useState(0);
  
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  function onChangeTab(index) {
    setSelected(index);
    props.handleTabSwich(index);
  }

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token')
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="Logo" />
        <span>
          Nat<span className="a">L</span>o
        </span>
      </div>
      <div className="sidebar__menu">
        {LeftSidebarData.map((item, index) => {
          return (
            <div
              className={
                selected === index
                  ? "sidebar__menuItem active"
                  : "sidebar__menuItem"
              }
              key={index}
              onClick={() => onChangeTab(index)}
            >
              <item.icon></item.icon>
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="sidebar__menuItem" onClick={onClickLogout}>
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;