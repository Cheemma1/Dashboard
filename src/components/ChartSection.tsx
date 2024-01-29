import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const barChartData = {
    labels,
    datasets: [
      {
        data: [
          5000, 10000, 20000, 30000, 40000, 55000, 45000, 50000, 35000, 25000,
          15000, 45000,
        ],

        backgroundColor: " rgba(52, 202, 165, 0.10)",
        hoverBackgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.right,
            chartArea.bottom
          );

          gradient.addColorStop(0, "rgba(52, 202, 165, 0.8)");
          gradient.addColorStop(1, "rgba(52, 202, 165, 0)");
          gradient.addColorStop(1, "rgba(52, 202, 165, 0)");

          return gradient;
        },
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
      legend: {
        display: false,
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
    <div className=" bg-white p-2 font-plus">
      <div className="flex items-center justify-between  mb-16 mt-6">
        <h1 className="font-bold">Sales trend</h1>
        <div className="flex items-center gap-2">
          <h4 className="font-bold">Sort by:</h4>
          <Select>
            <SelectTrigger className="w-[150px] border border-border rounded-full">
              <SelectValue placeholder="Weekly " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Weekly</SelectLabel>

                <SelectItem value="banana">Monthly</SelectItem>
                <SelectItem value="blueberry">Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default ChartSection;
