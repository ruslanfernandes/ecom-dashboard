import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [1200, 1900, 1700, 2200, 2000, 2500],
      fill: false,
      borderColor: "#1976d2",
      backgroundColor: "#1976d2",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 500,
      },
    },
  },
};

const SalesChart = () => (
  <Card className="mb-4  ">
    <CardContent>
      <Typography variant="subtitle1" gutterBottom>
        Sales (Last 6 Months)
      </Typography>
      <div style={{ height: 170, flexShrink: 0 }}>
        <Line data={data} options={options} style={{ maxHeight: 240 }} />
      </div>
    </CardContent>
  </Card>
);

export default SalesChart;
