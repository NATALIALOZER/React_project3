import React from "react";
import "./PlanWidget.scss";

const PlanWidget = () => {
  return (
    <div className="widget-container">
      <span>Workflow</span>
      <div className="TaskList ">
        <div className="Task first">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          eos id.
        </div>
        <div className="Task second">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          eos id.
        </div>
        <div className="Task third"></div>
      </div>
    </div>
  );
};

export default PlanWidget;