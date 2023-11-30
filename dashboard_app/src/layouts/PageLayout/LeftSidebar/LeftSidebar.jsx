import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import "./LeftSidebar.scss";
import { LeftSidebarData } from "../../../core/mocks/mocks.js";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logout } from "../../../../store/reducers/userReducer";

const LeftSidebar = (props) => {
  const [selected, setSelected] = useState(0);

  // const dispatch = useDispatch();

  function onChangeTab(index) {
    setSelected(index);
    props.handleTabSwich(index);
  }

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

        <div className="sidebar__menuItem">
          <NavLink to="/auth">
            <UilSignOutAlt />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;