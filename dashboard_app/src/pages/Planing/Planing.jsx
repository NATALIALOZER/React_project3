import React from "react";
import "./Planing.scss";
import CreateInput from "../../shared/components/CreateInput/CreateInput";
import Table from "../../shared/components/Table/Table";

const Planing = (props) => {
  return (
    <div className="Planing">
      {/* <PlanWidget /> */}
      <CreateInput />
      <Table />
    </div>
  );
};

export default Planing;