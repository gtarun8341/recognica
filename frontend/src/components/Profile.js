// src/components/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [exchange, setExchange] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [userData] = useState({
    username: 'User123', // Placeholder; replace with dynamic data if available
    invitationCode: 'INV123456',
    balance: '100.00 USD',
  });

  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container my-5">
      {/* User Info Card */}
      <div className="card mb-4">
        <div className="card-body text-center">
          <h4 className="card-title">{userData.username}</h4>
          <p className="card-text">Invitation Code: {userData.invitationCode}</p>
          <p className="card-text">Balance: {userData.balance}</p>
        </div>
      </div>

      {/* Action Cards */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/customer-service')}>
            <div className="card-body">
              <h5 className="card-title">Deposit</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/withdrawal')}>
            <div className="card-body">
              <h5 className="card-title">Withdraw</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/my-team')}>
            <div className="card-body">
              <h5 className="card-title">My Team</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/bind-wallet')}>
            <div className="card-body">
              <h5 className="card-title">Bind Wallet</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/change-password')}>
            <div className="card-body">
              <h5 className="card-title">Change Password</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/transaction')}>
            <div className="card-body">
              <h5 className="card-title">Transaction</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/customer-service')}>
            <div className="card-body">
              <h5 className="card-title">Customer Service</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/notification')}>
            <div className="card-body">
              <h5 className="card-title">Notification</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center" onClick={() => handleCardClick('/invitation')}>
            <div className="card-body">
              <h5 className="card-title">invitation</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
