import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Recognica</h1>
      <div className="row">
        <div className="col-md-3 mb-3">
          <Link to="/events" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Events</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/customer-service" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Recharge</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/withdrawal" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Withdrawal</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/invitation" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Invitation</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/company" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Company</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/terms" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Terms</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/faqs" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">FAQs</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <Link to="/certification" className="card text-decoration-none shadow-sm">
            <div className="card-body bg-light rounded">
              <h5 className="card-title text-primary">Certification</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
