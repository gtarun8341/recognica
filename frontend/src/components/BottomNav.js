// src/components/BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav() {
  return (
    <nav className="navbar fixed-bottom navbar-expand navbar-light bg-light shadow-sm">
      <div className="container">
        <ul className="navbar-nav w-100 justify-content-around">
          <li className="nav-item">
            <Link to="/" className="nav-link text-center">
              <i className="bi bi-house-door" style={{ fontSize: '1.5rem' }}></i>
              <div>Home</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starting" className="nav-link text-center">
              <i className="bi bi-clipboard" style={{ fontSize: '1.5rem' }}></i>
              <div>starting</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/records" className="nav-link text-center">
              <i className="bi bi-clipboard" style={{ fontSize: '1.5rem' }}></i>
              <div>Records</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-center">
              <i className="bi bi-person" style={{ fontSize: '1.5rem' }}></i>
              <div>Profile</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BottomNav;
