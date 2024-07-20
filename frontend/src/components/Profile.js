import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [exchange, setExchange] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/profile', { exchange, walletAddress });
      alert('Profile updated');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="container text-center my-5">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exchange</label>
          <input
            type="text"
            className="form-control"
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Wallet Address</label>
          <input
            type="text"
            className="form-control"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
