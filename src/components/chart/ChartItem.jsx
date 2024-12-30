import React, { useMemo } from "react";
import { Chart } from "react-google-charts";

function ChartItem({ historicalData }) {
  const data = [["Date", "Prices"]];

  const options = useMemo(() => ({
    vAxis: { title: "Prices" },
    legend: "none",
  }));

  if (historicalData) {
    historicalData.forEach((item) => {
      data.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
    });
  }

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default ChartItem;
