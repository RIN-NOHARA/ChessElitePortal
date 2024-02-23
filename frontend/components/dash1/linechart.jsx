import React from "react";
import "../../styles/Chart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const GridCard = ({ title, content }) => {
  return (
    <div className="grid-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const AChart = () => {
  const data = [
    { name: "No of tournaments", CSE: 2000000000 },
    { name: "WON", CSE: 1500000000 },
    { name: "LOST", CSE: 1000000000 },
    
  ];

  return (
    <div className="kp">
    <div className="admin-panel">
      <div className="main-content">
        <div className="left-content">
          <div className="grid-container">
            <GridCard title="" content="" />
            <GridCard title="" content="" />
          </div>
        </div>
        <div className="right-content">
          <div className="chart-title">Pie Chart representation</div>
          <div className="pie-chart">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="CSE"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
          <div className="chart-title">YOUR PROGRESS</div>
          <div className="bar-chart">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="CSE"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AChart;