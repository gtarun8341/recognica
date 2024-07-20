// src/components/BindWallet.js
import React, { useState } from 'react';

function BindWallet() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Wallet bound with password: ' + password);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Bind Wallet</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bind Wallet Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Bind Wallet</button>
      </form>
    </div>
  );
}

export default BindWallet;
