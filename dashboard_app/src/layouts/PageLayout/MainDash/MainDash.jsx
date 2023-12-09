import React from "react";

import { useSelector } from "react-redux";
import { selectTab } from "../../../redux/slices/tabs.js";

import "./MainDash.scss";
import Blog from "../../../pages/Blog/Blog";
import Tasks from "../../../pages/Tasks/Tasks";
import Planing from "../../../pages/Planing/Planing";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Loader from "../../../shared/components/Loader/Loader";


const MainDash = () => {
  const currentTab = useSelector(selectTab) || 0;

  const pageComponents = new Map([
    [0, <Dashboard />],
    [1, <Blog />],
    [3, <Planing />],
    [5, <Tasks />]
  ])
  
  return <div className="MainDash">{ pageComponents.get(currentTab) || <Loader /> }</div>;
};

export default MainDash;