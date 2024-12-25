// src/components/Accounts.js
import React, { useEffect, useState } from 'react';
import { getAccounts } from '../services/accountService';

const AccountsComponent = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts().then((response) => {
      setAccounts(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            <p>Account Number: {account.accountNumber}</p>
            <p>Balance: {account.balance}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsComponent;
