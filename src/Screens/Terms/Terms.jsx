import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';
import Termscondition from './TermsCondtion/Termscondition';
import OheoHubLanding from '../LandinPageScreens/onHub/onhub';

const Terms = () => {
  useEffect(() => {
    // Import Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1>Oheo</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                  <li><a className="dropdown-item" href="#">E-commerce Platform</a></li>
                  <li><a className="dropdown-item" href="#">Point of Sale</a></li>
                  <li><a className="dropdown-item" href="#">Online Store</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Help Center</a></li>
                  <li><a className="dropdown-item" href="#">Guides</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Enterprise</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="whatsNewDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What's new
                </a>
                <ul className="dropdown-menu" aria-labelledby="whatsNewDropdown">
                  <li><a className="dropdown-item" href="#">Features</a></li>
                  <li><a className="dropdown-item" href="#">Updates</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="#" className="btn btn-login me-3">Log in</a>
              <a href="#" className="btn btn-trial">Start free trial</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h1 className="hero-title">Terms of Service</h1>
            </div>
          </div>
        </div>
      </section>
          
        {/* Terms of Service */}
        <Termscondition/>

        <OheoHubLanding/>
    </div>
  );
};

export default Terms;
