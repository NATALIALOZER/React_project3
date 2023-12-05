import React from "react";
import "./PlanWidget.scss";

const PlanWidget = () => {
  return (
    <div className="Widget">
      <div className="Widget-subTitle sub-title">Workflow</div>
      <div className="Widget-list">
        <div className="Widget-task first">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          eos id.
        </div>
        <div className="Widget-task second">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className="Widget-task third"></div>
      </div>
    </div>
  );
};

export default PlanWidget;