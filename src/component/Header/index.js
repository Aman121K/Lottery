import React from 'react';
import './Header.css'; // Create a CSS file for styles

const Header = () => {
  // Function to handle navigation to the external URL
  const handleCheckResultsClick = () => {
    window.open("https://www.statelotteryresult.in/#google_vignette", "_blank");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {/* Link to open WhatsApp with pre-filled message */}
          <a
            href="https://wa.me/919781256044?text=Hello%20!%0AI%20wish%20to%20order%20lottery%20tickets%20from%20authorized%20lottery%20seller.%20Please%20send%20me%20more%20details."
            className="contact-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            +9197812-56044
          </a>
          {/* Optional: Add a short description below the phone number */}
          <div className="mobile-line"></div>
        </div>
        <div className="header-center">
          <nav>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/account">My account</a>
            <a href="/track-order">Track Your Order</a>
            <a href="/claim-forms">Claim Forms</a>
          </nav>
        </div>
        <div className="header-right">
          <button className="wallet-button">Top up your Wallet</button>
          <button className="check-results-button" onClick={handleCheckResultsClick}>
            Check Results
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;