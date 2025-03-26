import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PrivacyControls.css';
import privacy from '../../images/access.svg';
import trash from '../../images/trash.svg';
import hand from '../../images/hand.svg';

const PrivacyControls = () => {
  return (
    <div className="shopify-page">
      {/* Header */}
      <header className="container-fluid py-3 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <a href="/" className="d-flex align-items-center text-decoration-none">
             Oheo
            </a>
            <div className="language-selector">
              <span className="me-2">🌐</span>
              English
              <span className="ms-4">shopify.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Hero Section */}
        <section className="mt-5">
          <h1 className="main-heading">Privacy controls</h1>
          <p className="subheading">Control how Shopify uses your data</p>
        </section>

        {/* Manage Your Data Section */}
        <section className="mt-5">
          <div className="mb-3">
            <p className="section-title mb-1">TAKE ACTION</p>
            <h2 className="manage-heading">Manage your data</h2>
            <p>
              Shopify gives you choices when it comes to the collection and use of your personal data. In certain circumstances, such as where 
              Shopify acts as processor or service provider of your personal data on behalf of Shopify merchants, you may be directed to make 
              these requests to the applicable merchant.
            </p>
          </div>

          <div className="row card-container g-4">
            {/* Access Data Card */}
            <div className="col-md-4">
              <div className="shopify-card">
                <div className="card-icon">
                <img src={privacy} alt="" />
                </div>
                <h3 className="card-title">Access data</h3>
                <p className="card-text">
                  I want to receive a copy of certain personal data that Shopify has about me.
                </p>
                <button className="shopify-btn">Access my data</button>
              </div>
            </div>

            {/* Erase Data Card */}
            <div className="col-md-4">
              <div className="shopify-card">
                <div className="card-icon">
                  <img src={trash} alt="" />
                </div>
                <h3 className="card-title">Erase data</h3>
                <p className="card-text">
                  I want to erase certain personal data Shopify has about me.
                </p>
                <button className="shopify-btn">Erase my data</button>
              </div>
            </div>

            {/* Exclude Data Card */}
            <div className="col-md-4">
              <div className="shopify-card">
                <div className="card-icon">
                <img src={hand} alt="" />
                </div>
                <h3 className="card-title">Exclude my personal data from Shopify Audiences</h3>
                <p className="card-text">
                  I want to exclude my personal data from being used for Shopify Audiences by all merchants.
                </p>
                <button className="shopify-btn">Exclude my data</button>
              </div>
            </div>

            {/* Opt Out Card */}
            <div className="col-md-4">
              <div className="shopify-card">
                <div className="card-icon">
                <img src={hand} alt="" />
                </div>
                <h3 className="card-title">Users of Shopify's consumer services: opt out of sharing my personal data</h3>
                <p className="card-text">
                  Don't share my personal data for targeted advertising.
                </p>
                <button className="shopify-btn">Opt out</button>
              </div>
            </div>
          </div>

          {/* Info Alert */}
          <div className="info-alert">
            <p>
              <strong>Have a merchant account?</strong> For Shopify merchants, you can correct and export most information yourself at any time directly 
              within your Shopify account. If you need assistance with this, please contact our 24/7 <a href="#">Shopify Help Center</a>.
            </p>
          </div>
        </section>
      </main>

      {/* Dark Section */}
      <section className="dark-section">
        <div className="container">
          <p className="section-title mb-1">RESOURCES</p>
          <h2>Learn how your data is handled</h2>
          <p className="mb-5">
            Trust is the foundation of the Shopify platform and includes trusting us to do the right thing with your personal information.
          </p>

          <div className="row">
            {/* Privacy Policy */}
            <div className="col-md-4">
              <div className="resource-card">
                <h3 className="resource-title">Privacy policy</h3>
                <p>
                  Learn how Shopify collects, uses, and shares your personal information.
                </p>
                <a href="#" className="resource-link">View Privacy policy</a>
              </div>
            </div>

            {/* Transparency Report */}
            <div className="col-md-4">
              <div className="resource-card">
                <h3 className="resource-title">Transparency Report</h3>
                <p>
                  Learn how Shopify safeguards your personal information.
                </p>
                <a href="#" className="resource-link">View Transparency Report</a>
              </div>
            </div>

            {/* Legal Requests */}
            <div className="col-md-4">
              <div className="resource-card">
                <h3 className="resource-title">Legal requests for information</h3>
                <p>
                  Learn how Shopify balances legal obligations when a third party wants to request information that Shopify holds.
                </p>
                <a href="#" className="resource-link">View legal request guidelines</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="#" className="footer-link">
                Oheo
              </a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </div>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-tiktok"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyControls;