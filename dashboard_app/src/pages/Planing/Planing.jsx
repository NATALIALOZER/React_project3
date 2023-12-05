import React from "react";

import CreateInput from "../../shared/components/CreateInput/CreateInput";
import Table from "../../shared/components/Table/Table";
import PlanWidget from "../../shared/parts/PlanWidget/PlanWidget";

import "./Planing.scss";

const Planing = () => {
  return (
    <div className="Planing">
      <div className="Planing-title title">Planing</div>
      <PlanWidget />
      <CreateInput />
      <Table />
    </div>
  );
};

export default Planing;