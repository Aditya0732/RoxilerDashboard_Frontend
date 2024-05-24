import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.range),
    datasets: [
      {
        label: 'Number of Items',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(147, 197, 253, 0.6)', // Light blue color
        borderColor: 'rgba(96, 165, 250, 1)', // Darker blue color for border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Price Range',
          font: {
            size: 16,
            family: 'monospace', // Use a monospaced font
          },
        },
        ticks: {
          font: {
            family: 'monospace', // Use a monospaced font for tick labels
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Items',
          font: {
            size: 16,
            family: 'monospace', // Use a monospaced font
          },
        },
        beginAtZero: true,
        ticks: {
          font: {
            family: 'monospace', // Use a monospaced font for tick labels
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'monospace', // Use a monospaced font for the legend label
          },
        },
      },
    },
  };

  return (
    <div className="my-4 p-6 rounded-lg shadow-md font-mono bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;