import React from 'react';
import '../privacy.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          Company Name
        </a>
        <nav className="header-nav">
          <a href="#" className="header-icon">
            <i className="bi bi-search"></i>
          </a>
          <a href="#" className="header-icon">
            <i className="bi bi-bag"></i>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;