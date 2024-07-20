// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Recharge from './components/Recharge';
import Withdrawal from './components/Withdrawal';
import Profile from './components/Profile';
import Invitation from './components/Invitation';
import Company from './components/Company';
import Terms from './components/Terms';
import FAQs from './components/FAQs';
import Certification from './components/Certification';
import BottomNav from './components/BottomNav';
import Starting from './components/Starting';
import Records from './components/Records';
import MyTeam from './components/MyTeam';
import BindWallet from './components/BindWallet';
import ChangePassword from './components/ChangePassword';
import Transaction from './components/Transaction';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer-service" element={<Recharge />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/company" element={<Company />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/starting" element={<Starting />} />
            <Route path="/records" element={<Records />} />
            <Route path="/my-team" element={<MyTeam />} />
            <Route path="/bind-wallet" element={<BindWallet />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
