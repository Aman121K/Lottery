import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info-container">
                <div className="footer-info-item">
                    {/* <i className="fas fa-home"></i> */}
                    <h3>ADDRESS</h3>
                    <p>Plot 186 Bus Stand<br />Morinda (Ropar) -140101</p>
                </div>
                <div className="footer-info-item">
                    {/* <i className="fas fa-lock"></i> */}
                    <h3>HOURS</h3>
                    <p>Mon-Sat: 11am – 10:00pm<br />Sunday: 11am – 5:00pm</p>
                </div>
                <div className="footer-info-item">
                    {/* <i className="fas fa-phone"></i> */}
                    <h3>LET'S CONNECT</h3>
                    <p>+91-9781256044<br />help@buystatelottery.com</p>
                </div>
                <div className="footer-info-item">
                    {/* <i className="fas fa-share-alt"></i> */}
                    <h3>FOLLOW US</h3>
                    {/* <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div> */}
                </div>
            </div>

            <div className="footer-policy-container">
                <a href="/refund-policy" className="policy-link">Refund Policy</a>
                <a href="/privacy-policy" className="policy-link">Privacy Policy</a>
                <a href="/terms-service" className="policy-link">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;