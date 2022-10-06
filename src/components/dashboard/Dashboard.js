import React from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import "./Dashboard.css";

function Dashboard() {
  const mapData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const chartData = {
    options: {
      chart: {
        id: "range-bar",
      },
    },
    series: [
      {
        data: [
          {
            x: "TEAM A",
            y: [1358447400000, 1358620200000],
          },
          {
            x: "TEAM B",
            y: [1358447400000, 1358620200000],
          },
        ],
      },
    ],
  };

  return (
    <div className="container dashboard-container mt-5 pb-5">
      <div className="row">
        <div className="col-sm-4">
          {" "}
          <Chart
            options={mapData.options}
            series={mapData.series}
            className="chart-card"
            type="area"
          />
        </div>
        <div className="col-sm-4">
          {" "}
          <Chart
            options={mapData.options}
            series={mapData.series}
            className="chart-card"
            type="area"
          />
        </div>
        <div className="col-sm-4">
          {" "}
          <Chart
            options={mapData.options}
            series={mapData.series}
            className="chart-card"
            type="area"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="mixed-chart">
            <Chart
              options={mapData.options}
              series={mapData.series}
              type="bar"
              className="chart-card"
            />
          </div>
        </div>
        <div className="col">
          <div className="mixed-chart">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="rangeBar"
              className="chart-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
