// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardPage.css';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Link to="/create-transaction">
        <button>Go to Create Transaction</button>
      </Link>
    </div>
  );
};

export default Dashboard;
