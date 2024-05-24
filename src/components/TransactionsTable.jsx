import React from 'react';

const TransactionsTable = ({ transactions, month, handlePageChange, currentPage }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= transactions?.totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => handlePageChange(`page-${i}`)}
          className={`mx-1 px-4 py-2 rounded-md ${
            transactions?.page === i.toString()
              ? 'bg-purple-700 text-white'
              : 'bg-gray-700 text-gray-400'
          }`}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full">
      {transactions?.products?.length === 0 ? (
        <div className="w-full text-center py-8 font-mono text-gray-400">
          No entries found.
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse font-mono text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700">
                <th className="px-4 py-2 font-bold">Title</th>
                <th className="px-4 py-2 font-bold">Description</th>
                <th className="px-4 py-2 font-bold">Price</th>
                <th className="px-4 py-2 font-bold">Date of Sale</th>
                <th className="px-4 py-2 font-bold">Sold</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.products?.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-all duration-300"
                >
                  <td className="px-4 py-2">{transaction.title}</td>
                  <td className="px-4 py-2">{transaction.description}</td>
                  <td className="px-4 py-2">{transaction.price}</td>
                  <td className="px-4 py-2">
                    {new Date(transaction.dateOfSale).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-md ${
                        transaction.sold ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {transaction.sold ? 'Sold' : 'Not Sold'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4 flex justify-center items-center">
        {/* <div>
          <span className="text-gray-400 font-mono">
            Showing {transactions?.products?.length} of {transactions?.totalCount} entries
          </span>
        </div> */}
        <div className="mx-4 flex">
          <button
            onClick={() => handlePageChange('previous')}
            disabled={transactions?.page === '1'}
            className={`mx-1 px-4 py-2 bg-purple-800 text-white font-mono rounded-md disabled:opacity-50 transition-all duration-300 hover:bg-purple-700 ${transactions?.page === '1' ? "cursor-not-allowed":""}`}
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange('next')}
            disabled={transactions?.page >= transactions?.totalPages}
            className={`mx-1 px-4 py-2 bg-purple-800 text-white font-mono rounded-md disabled:opacity-50 transition-all duration-300 hover:bg-purple-700 ${transactions?.page >= transactions?.totalPages ? "cursor-not-allowed":""}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;