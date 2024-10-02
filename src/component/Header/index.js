import React, { useState } from 'react';
import './Header.css'; // Create a CSS file for styles

const Header = () => {
  // State to track if the dropdown is open
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to handle navigation to the external URL
  const handleCheckResultsClick = () => {
    window.open("https://www.statelotteryresult.in/#google_vignette", "_blank");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {/* WhatsApp contact link */}
          <a
            href="https://wa.me/919781256044?text=Hello%20!%0AI%20wish%20to%20order%20lottery%20tickets%20from%20authorized%20lottery%20seller.%20Please%20send%20me%20more%20details."
            className="contact-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            +9197812-56044
          </a>
          <div className="mobile-line"></div>
        </div>
        <div className="header-center">
          <nav>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            {/* <a href="/account">My account</a> */}
            {/* <a href="/track-order">Track Your Order</a> */}

            {/* Claim Forms button with dropdown */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleDropdown}>
                Claim Forms &#9662;
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="http://www.punjabstatelotteries.gov.in/uploads/65f8d1f8aa5df7b32f84e38f955b43fe.pdf" target="_blank" rel="noopener noreferrer">
                    Punjab
                  </a>
                  <a href="https://www.goa.gov.in/wp-content/uploads/2019/07/Claim-Form.pdf" target="_blank" rel="noopener noreferrer">
                    Goa
                  </a>
                  <a href="http://www.sikkimlotteries.com/claim.html" target="_blank" rel="noopener noreferrer">
                    Sikkim
                  </a>
                  <a href="#">Nagaland</a> {/* Add correct URL for Nagaland */}
                  <a href="#">Maharashtra</a> {/* Add correct URL for Maharashtra */}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="header-right">
          <button className="check-results-button" onClick={handleCheckResultsClick}>
            Check Results
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;