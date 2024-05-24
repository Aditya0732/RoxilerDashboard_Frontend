import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  console.log('pie', data);

  const chartData = {
    labels: data?.map((item) => item.category),
    datasets: [
      {
        data: data?.map((item) => item.count),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#AC92EC',
          '#CCD1D1',
          '#5DD39E',
          '#FF6B6B',
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    responsive: true, // Enable responsive mode
    maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
  };

  return (
    <div className="my-4 p-6 rounded-lg shadow-md font-mono bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-xl font-bold mb-2">Pie Chart</h2>
      <div className="chart-container sm:max-w-md md:max-w-2xl mx-auto">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;