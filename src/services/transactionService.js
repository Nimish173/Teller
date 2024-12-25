// src/services/transactionService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/transactions';  // Adjust the URL to your backend

// Function to fetch all transactions
export const getTransactions = () => {
  return axios.get(API_URL);
};

// Function to fetch transactions by account number
export const getTransactionsByAccount = (accountNumber) => {
  return axios.get(`${API_URL}/account/${accountNumber}`);
};

// Function to create a transaction
export const createTransaction = (transaction) => {
  return axios.post(API_URL, transaction);
};
