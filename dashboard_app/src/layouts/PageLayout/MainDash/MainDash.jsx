import React from "react";
import "./MainDash.scss";
import Blog from "../../../pages/Blog/Blog";
import Planing from "../../../pages/Planing/Planing";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Loader from "../../../shared/components/Loader/Loader";


const MainDash = (props) => {
  const pageComponents = new Map([
    [0, <Dashboard />],
    [1, <Blog />],
    [3, <Planing />]
  ])

  return <div className="MainDash">{ pageComponents.get(props.currentTab) || <Loader /> }</div>;
};

export default MainDash;