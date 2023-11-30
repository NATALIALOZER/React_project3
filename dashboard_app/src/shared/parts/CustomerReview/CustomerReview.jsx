import React from "react";
import Chart from "react-apexcharts";
import { customerChartData } from "../../../core/mocks/mocks";

const CustomerReview = () => {
  return (
    <div className="CustomerReview">
    	<div className="sub-title">Customer Review</div>
			<Chart
				options={customerChartData.options}
				series={customerChartData.series}
				type="area"
			/>
    </div>
  );
};

export default CustomerReview;