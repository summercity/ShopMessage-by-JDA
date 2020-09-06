import React, { useRef } from "react";
import { Chart } from "react-google-charts";
import { Filter } from "./types";

const LineChart: React.FC<Filter> = ({ chartData, displayOption }) => {
  return (
    <Chart
      width={"700px"}
      height={"500px"}
      chartType="LineChart"
      loader={<div>Loading... Hope you like it! Stay safe!</div>}
      data={chartData}
      options={{
        title: "",
        hAxis: { title: "", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        // For the legend to fit, we make the chart area smaller
        chartArea: { width: "100%", height: "65%" },
        legend: { position: "top", maxLines: 3 },
        colors:
          !displayOption.optins && displayOption.recipients
            ? ["#FF0000"]
            : ["#1890ff", "#FF0000"],
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default LineChart;
