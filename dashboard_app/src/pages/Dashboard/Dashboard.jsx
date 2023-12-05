import React from "react";

import Table from "../../shared/components/Table/Table";
import Cards from "../../shared/parts/Cards/Cards";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
  <div className="Dashboard">
    <div className="Dashboard-title title">Dashboard</div>
    <Cards />
    <Table />
  </div>
)};
  
export default Dashboard;
  
