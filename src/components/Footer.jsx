import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import logoo from "./logoei.png";

function Footer() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const storedAcceptedAllWE = localStorage.getItem('acceptedAll');
  const handleClearAcceptedAll = () => {
    localStorage.removeItem('acceptedAll');
    setRefreshFlag(!refreshFlag);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src={logoo} alt="Logo" />
        </div>
        <div className="footer-links">
          <Link to="/policies/legal-notice">Legal Notice</Link>
          <Link to="/policies/privacy-policy">Privacy Policy</Link>
          <Link to="/policies/terms-of-service">Terms of Service</Link>
          <Link to="/policies/impressum">Impressum</Link>
          <button onClick={handleClearAcceptedAll}>
            <span>{storedAcceptedAllWE ? "Delete cookies" : "You need to accept cookies to continue "}</span>
          </button>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023, DynamoChart UG</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
