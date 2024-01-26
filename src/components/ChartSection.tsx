import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartSection: React.FC = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = [5000, 10000, 20000, 30000, 40000, 50000];
  const barChartData = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
          " rgba(52, 202, 165, 0.10)",
        ],
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" bg-white p-2">
      <h1>Monthly Data Bar Chart</h1>
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default ChartSection;
