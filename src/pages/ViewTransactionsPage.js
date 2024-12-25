import React from 'react';

const ViewTransactionsPage = ({ transactions }) => {
  return (
    <div className="view-transactions-container">
      <h1>View Transactions</h1>
      {transactions.length === 0 ? (
        <p>No transactions available</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <p>Type: {transaction.type}</p>
              <p>Amount: {transaction.amount}</p>
              <p>Description: {transaction.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewTransactionsPage;
