import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Loader from './components/Loader';
import ToasterMessage from './components/ToasterMessage';

const App = () => {
  const [month, setMonth] = useState('01');
  const [transactions, setTransactions] = useState({});
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://roxilerdashboard-backend.onrender.com/api/combined?month=${month}&search=${search}&page=${currentPage}`);
        setSuccessMessage('Data fetched successfully!');
        const { products, statistics, barChartData, pieChartData } = response?.data;
        console.log(response?.data);
        setTransactions(products);
        setStatistics(statistics);
        setBarChartData(barChartData);
        setPieChartData(pieChartData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage('Failed to fetch data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [month, currentPage, search]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setCurrentPage(1);
    setSearch('');
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = async (action) => {
    if (action === 'next' && transactions?.page < transactions?.totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (action === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCloseToaster = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container mx-auto w-full p-4 text-white">
      {isLoading && <Loader />}
      {successMessage && (
        <ToasterMessage
          type="success"
          message={successMessage}
          onClose={handleCloseToaster}
        />
      )}
      {errorMessage && (
        <ToasterMessage
          type="error"
          message={errorMessage}
          onClose={handleCloseToaster}
        />
      )}
      <div className="mb-4">
        <label htmlFor="month" className="mr-2 font-mono">
          Select Month:
        </label>
        <select
          id="month"
          value={month}
          onChange={handleMonthChange}
          className="border rounded p-1 bg-gray-800 text-white font-mono placeholder-gray-500 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="01" className="bg-gray-800 text-white">
            January
          </option>
          <option value="02" className="bg-gray-800 text-white">
            February
          </option>
          <option value="03" className="bg-gray-800 text-white">
            March
          </option>
          <option value="04" className="bg-gray-800 text-white">
            April
          </option>
          <option value="05" className="bg-gray-800 text-white">
            May
          </option>
          <option value="06" className="bg-gray-800 text-white">
            June
          </option>
          <option value="07" className="bg-gray-800 text-white">
            July
          </option>
          <option value="08" className="bg-gray-800 text-white">
            August
          </option>
          <option value="09" className="bg-gray-800 text-white">
            September
          </option>
          <option value="10" className="bg-gray-800 text-white">
            October
          </option>
          <option value="11" className="bg-gray-800 text-white">
            November
          </option>
          <option value="12" className="bg-gray-800 text-white">
            December
          </option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white font-mono placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <TransactionsTable transactions={transactions} month={month} handlePageChange={handlePageChange} currentPage={currentPage} />
      <Statistics statistics={statistics} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <BarChart data={barChartData} />
        </div>
        <div>
          <PieChart data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default App;