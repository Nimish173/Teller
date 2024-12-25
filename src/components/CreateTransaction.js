import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const CreateTransaction = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState({
    type: 'Deposit',
    amount: 0,
    description: '',
  });

  const navigate = useNavigate(); // Initialize navigate function

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload
    console.log('Transaction Data:', transaction); // Log the transaction data
    
    onSubmit(transaction); // Call the parent onSubmit function to update transactions

    // Use navigate to redirect to View Transactions page after submission
    navigate('/view-transactions');  // This will navigate to View Transactions page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="type" className="form-label">Transaction Type</label>
        <select
          id="type"
          name="type"
          className="form-input"
          value={transaction.type}
          onChange={handleInputChange}
        >
          <option value="Deposit">Deposit</option>
          <option value="Withdrawal">Withdrawal</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          id="amount"
          name="amount"
          className="form-input"
          type="number"
          value={transaction.amount}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-input"
          value={transaction.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CreateTransaction;
