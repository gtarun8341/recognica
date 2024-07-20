// src/components/ChangePassword.js
import React, { useState } from 'react';

function ChangePassword() {
  const [loginPassword, setLoginPassword] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Passwords changed');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Change Login Password</label>
          <input
            type="password"
            className="form-control"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Change Bind Wallet Password</label>
          <input
            type="password"
            className="form-control"
            value={walletPassword}
            onChange={(e) => setWalletPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Change Password</button>
      </form>
    </div>
  );
}

export default ChangePassword;
