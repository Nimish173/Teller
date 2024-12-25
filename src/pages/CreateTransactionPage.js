// src/pages/CreateTransactionPage.js

import React from 'react';
import CreateTransaction from '../components/CreateTransaction'; // Import CreateTransaction component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../styles/CreateTransactionPage.css'; // Ensure this path is correct

const CreateTransactionPage = ({ onSubmit }) => {
  const navigate = useNavigate();

  // Handle form submission
  const handleTransactionSubmit = (transaction) => {
    console.log('Transaction Created:', transaction);

    // Call onSubmit function to update the transaction list in the parent component (App.js)
    onSubmit(transaction);
  };

  return (
    <div className="create-transaction-container">
      <h1 className="create-transaction-heading">Create Transaction</h1>
      <CreateTransaction onSubmit={handleTransactionSubmit} /> {/* Pass onSubmit function */}

      {/* Button to navigate to Accounts page */}
      <button className="go-to-accounts-btn" onClick={() => navigate('/accounts')}>
        Go to Accounts
      </button>
    </div>
  );
};

export default CreateTransactionPage;
