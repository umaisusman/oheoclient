
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './policy.css';
const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Apple";
    
    // Add Bootstrap JS (required for navbar toggler)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="privacy-policy fade-in">
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-lg privacy-nav">
        <div className="container">
          <Link className="navbar-brand" to="/">
                OHEO
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mac</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">iPad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">iPhone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vision</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">AirPods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TV & Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Accessories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="container py-5">
        <h1>Privacy Policy</h1>
        <div className="updated-date">Updated December 12, 2023</div>
        
        <p>
          Apple's Privacy Policy describes how Apple collects, uses, and shares your personal data.
          In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features
          that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.
        </p>
        
        <p>
          You will be given an opportunity to review this product-specific information before using these features.
          You also can view this information at any time in Settings related to those features and/or online at <a href="#">apple.com/legal/privacy/data</a>.
        </p>
        
        <p>
          Please take a moment to familiarize yourself with our privacy practices, accessible via the headings below,
          and <a href="#">contact us</a> if you have any questions.
        </p>
        
        <hr />
        
        <h2>Your California Privacy Disclosures</h2>
        <p>
          Information regarding the categories and specific pieces of personal information we collect, the sources from which we collect your personal information,
          our purposes for collecting or selling your personal information, the categories of personal information we have disclosed for a business purpose, and information
          about how we share your personal information with third parties, is available at <a href="#">apple.com/legal/privacy/california</a>.
        </p>
        
        <h2>What Is Personal Data at Apple?</h2>
        <p>
          At Apple, we believe strongly in fundamental privacy rights — and that those fundamental rights should not differ depending on where
          you live in the world. That's why we treat any data that relates to an identified or identifiable individual or that is linked or
          linkable to them by Apple as "personal data," no matter where the individual lives. This means that data that directly identifies
          you — such as your name — is personal data, and also data that does not directly identify you, but that can reasonably be used to identify
          you — such as the serial number of your device — is personal data.
        </p>
        
        <p>
          This Privacy Policy covers how Apple or an Apple-affiliated company (collectively, "Apple") handles personal data whether you interact with us
          on our websites, through Apple apps (such as Apple Music or Wallet), or in person (including by phone or when visiting our retail stores).
          Apple may also link to third parties on our services or make third-party apps available for download in our App Store. Apple's Privacy Policy does
          not apply to how third parties define personal data or how they use it. We encourage you to read their privacy policies and know your privacy rights
          before interacting with them.
        </p>
        
        <h2>Your Privacy Rights at Apple</h2>
        <p>
          At Apple, we respect your ability to know, access, correct, transfer, restrict the processing of, and delete your personal data. We have provided these
          rights to our global customer base and if you choose to exercise these privacy rights, you have the right not to be treated in a discriminatory way nor to
          receive a lesser degree of service from Apple. Apple does not sell your data including as "sale" is defined in Nevada and California, nor does Apple engage in 
          profiling or automated decision making with your data.
        </p>

        <h2>Personal Data Apple Collects from You</h2>
        <p>
          When you create an Apple ID, apply for commercial credit, purchase and/or activate a product or device, download a software update, register for a class at an 
          Apple Store, connect to our services, contact us (including by social media), participate in an online survey, or otherwise interact with Apple, we may collect 
          a variety of information, including:
        </p>

        <p>
          <strong>Account Information.</strong> Your Apple ID and related account details, including email address, devices registered, account status, and age
        </p>

        <p>
          <strong>Device Information.</strong> Data from which your device could be identified, such as device serial number, or about your device, such as browser type
        </p>

        <p>
          <strong>Contact Information.</strong> Data such as name, email address, physical address, phone number, or other contact information
        </p>

        <p>
          <strong>Payment Information.</strong> Data about your billing address, bank details, and method of payment (such as details from a credit or debit card)
        </p>

        <h2>How Apple Uses Personal Data</h2>
        <p>
          Apple uses personal data to provide you with our services, process your transactions, communicate with you, for security and fraud prevention, and to comply 
          with law. We may also use personal data for other purposes with your consent.
        </p>

        <p>
          Apple uses your personal data only when we have a valid legal basis to do so. Depending on the circumstance, Apple may rely on your consent or the fact that 
          the processing is necessary to fulfill a contract with you, protect your vital interests or those of other persons, or to comply with law. We may also process 
          your personal data where we believe it is in our or others' legitimate interests, taking into consideration your interests, rights, and expectations.
        </p>
        
        <h2>Cookies and Other Technologies</h2>
        <p>
          Apple's websites, online services, interactive applications, email messages, and advertisements may use "cookies" and other technologies such as pixel tags and 
          web beacons. These technologies help us better understand user behavior, tell us which parts of our websites people have visited, and facilitate and measure the 
          effectiveness of advertisements and web searches. We treat information collected by cookies and other technologies as non‑personal information. However, to the extent 
          that Internet Protocol (IP) addresses or similar identifiers are considered personal information by local law, we also treat these identifiers as personal information. 
          Similarly, to the extent that non-personal information is combined with personal information, we treat the combined information as personal information for the purposes of this Privacy Policy.
        </p>
        
        <h2>International Transfers</h2>
        <p>
          All the information you provide may be transferred or accessed by entities around the world as described in this Privacy Policy. Apple complies with laws on the 
          transfer of personal data between countries to help ensure your data is protected, wherever it may be.
        </p>
        
        <h2>Our Companywide Commitment to Your Privacy</h2>
        <p>
          To make sure your personal data is secure, we communicate our privacy and security guidelines to Apple employees and strictly enforce privacy safeguards within the company.
        </p>
        
        <h2>Privacy Questions</h2>
        <p>
          If you have any questions or concerns about Apple's Privacy Policy or data processing, you would like to contact our Data Protection Officer, or if you would like to make a complaint about a possible breach of local privacy laws, please <a href="#">contact us</a>. You can always contact us by phone at the relevant <a href="#">Apple Support</a> number for your country or region.
        </p>
        
        <p>
          When a privacy question or a question about personal data received in response to an access/download request is received, we have a dedicated team that triages your contact to address your issue.
        </p>
      </div>
      
      {/* Footer */}
      <footer className="privacy-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <h5>Shop and Learn</h5>
              <ul>
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Vision</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">TV & Home</a></li>
                <li><a href="#">AirTag</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <h5>Services</h5>
              <ul>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Fitness+</a></li>
                <li><a href="#">Apple News+</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">iCloud</a></li>
                <li><a href="#">Apple One</a></li>
                <li><a href="#">Apple Card</a></li>
                <li><a href="#">Apple Books</a></li>
                <li><a href="#">Apple Podcasts</a></li>
                <li><a href="#">App Store</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <h5>Apple Store</h5>
              <ul>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Apple Store App</a></li>
                <li><a href="#">Certified Refurbished</a></li>
                <li><a href="#">Apple Trade In</a></li>
                <li><a href="#">Financing</a></li>
                <li><a href="#">Carrier Deals at Apple</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Shopping Help</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <h5>For Business</h5>
              <ul>
                <li><a href="#">Apple and Business</a></li>
                <li><a href="#">Shop for Business</a></li>
              </ul>
              
              <h5 className="mt-4">For Education</h5>
              <ul>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for K-12</a></li>
                <li><a href="#">Shop for College</a></li>
              </ul>
              
              <h5 className="mt-4">For Healthcare</h5>
              <ul>
                <li><a href="#">Apple in Healthcare</a></li>
                <li><a href="#">Health on Apple Watch</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="row">
              <div className="col-12">
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                <p>
                  <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Sales and Refunds</a> | <a href="#">Legal</a> | <a href="#">Site Map</a>
                </p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;