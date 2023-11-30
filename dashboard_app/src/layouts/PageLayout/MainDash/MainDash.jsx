import React from "react";
import "./MainDash.scss";
import Blog from "../../../pages/Blog/Blog";
import Planing from "../../../pages/Planing/Planing";
import Table from "../../../shared/components/Table/Table";
import Cards from "../../../shared/parts/Cards/Cards";
import Loader from "../../../shared/components/Loader/Loader";


//to do: change to map
const MainDash = (props) => {
  const switchDash = () => {
    switch (props.currentTab) {
      case 0:
        return (
          <div className="Dashboard">
            <div className="title">Dashboard</div>
            <div className="Dashboard__content">
              <Cards />
              <Table />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="Blog">
            <div className="title">Blog</div>
            <Blog />
          </div>
        );

      case 3:
        return (
          <div className="Planing">
            <div className="title">Planing Page</div>
            <Planing />
          </div>
        );

      default:
        return <Loader />;
    }
  };

  return <div className="MainDash">{ switchDash() }</div>;
};

export default MainDash;