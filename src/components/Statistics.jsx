import React from 'react';

const Statistics = ({ statistics }) => {
  return (
    <div className="my-4">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg p-6 text-white transition-all duration-300 hover:shadow-xl">
        <h2 className="text-xl font-bold mb-4 font-mono">Transaction Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 p-4 rounded-lg transition-all duration-300 hover:scale-105">
            <p className="font-bold font-mono">Total Sale Amount</p>
            <p className="text-lg font-semibold text-green-400">{statistics?.totalSaleAmount}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 p-4 rounded-lg transition-all duration-300 hover:scale-105">
            <p className="font-bold font-mono">Total Sold Items</p>
            <p className="text-lg font-semibold text-green-400">{statistics?.soldItems}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 p-4 rounded-lg transition-all duration-300 hover:scale-105">
            <p className="font-bold font-mono">Total Not Sold Items</p>
            <p className="text-lg font-semibold text-red-500">{statistics?.notSoldItems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;