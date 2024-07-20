import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center my-5">
      <h1>Recognica</h1>
      <div className="row">
        <div className="col-md-3">
          <Link to="/events" className="card">
            <div className="card-body">
              <h5 className="card-title">Events</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/recharge" className="card">
            <div className="card-body">
              <h5 className="card-title">Recharge</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/withdrawal" className="card">
            <div className="card-body">
              <h5 className="card-title">Withdrawal</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/withdrawal" className="card">
            <div className="card-body">
              <h5 className="card-title">Invitation</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/withdrawal" className="card">
            <div className="card-body">
              <h5 className="card-title">company</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/terms" className="card">
            <div className="card-body">
              <h5 className="card-title">Terms</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/faqs" className="card">
            <div className="card-body">
              <h5 className="card-title">FAQs</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/certification" className="card">
            <div className="card-body">
              <h5 className="card-title">Certification</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
