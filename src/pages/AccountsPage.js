// src/pages/AccountsPage.js

import React from 'react';

const AccountsPage = () => {
  // You can fetch account details from a mock API or state in the future
  const account = {
    accountNumber: '12345',
    balance: 1000.00,
  };

  return (
    <div className="accounts-container">
      <h2>Account Details</h2>
      <p>Account Number: {account.accountNumber}</p>
      <p>Balance: ${account.balance}</p>
    </div>
  );
};

export default AccountsPage;
