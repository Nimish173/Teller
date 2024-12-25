import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardPage.css';
 // Import component-specific styles

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="dashboard-btn">
        <Link to="/create-transaction">
          <button>Create Transaction</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
