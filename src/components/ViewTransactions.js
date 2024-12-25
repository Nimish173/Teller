// src/components/ViewTransactions.js
import React, { useEffect, useState } from 'react';
import { getTransactionsByAccount } from '../services/transactionService';

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const accountNumber = "12345";  // Replace this with a dynamic value, such as from props or state

  useEffect(() => {
    // Fetch transactions by account number
    getTransactionsByAccount(accountNumber).then((response) => {
      setTransactions(response.data);
    });
  }, [accountNumber]);

  return (
    <div className="container">
      <h1>Transactions for Account: {accountNumber}</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <p>Transaction Type: {transaction.transactionType}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Transaction Date: {transaction.transactionDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTransactions;
