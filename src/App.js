import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'; // Updated imports
import CreateTransactionPage from './pages/CreateTransactionPage';
import ViewTransactionsPage from './pages/ViewTransactionsPage';
import AccountsPage from './pages/AccountsPage';
import DashboardPage from './pages/DashboardPage';
import './styles/App.css'; // Ensure the path to your CSS file is correct

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Handle transaction submission and store the transaction data
  const handleTransactionSubmit = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Top Navbar */}
        <div className="top-nav">
          <ul>
            <li><Link to="/">🏠</Link></li> {/* Home Icon */}
            <li><Link to="/create-transaction">💳</Link></li> {/* Create Transaction Icon */}
            <li><Link to="/view-transactions">📊</Link></li> {/* View Transactions Icon */}
            <li><Link to="/accounts">💼</Link></li> {/* Accounts Icon */}
          </ul>
        </div>

        <div className="container">
          <Routes> {/* Replaced Switch with Routes */}
            <Route path="/" element={<DashboardPage />} /> {/* Render the Dashboard */}
            <Route path="/create-transaction" element={<CreateTransactionPage onSubmit={handleTransactionSubmit} />} />
            <Route path="/view-transactions" element={<ViewTransactionsPage transactions={transactions} />} />
            <Route path="/accounts" element={<AccountsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
