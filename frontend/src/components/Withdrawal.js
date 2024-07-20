import React, { useState } from 'react';
import axios from 'axios';

function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/withdrawal', { amount, password });
      alert('Withdrawal request submitted');
    } catch (error) {
      console.error(error);
      alert('Failed to submit withdrawal request');
    }
  };

  return (
    <div className="container text-center my-5">
      <h1>Withdrawal</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Withdrawal;
