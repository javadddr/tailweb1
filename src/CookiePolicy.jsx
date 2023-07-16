import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const CookiePolicy = () => {
  const [expanded, setExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [acceptedAll, setAcceptedAll] = useState(() => {
    const storedAcceptedAll = localStorage.getItem('acceptedAll');
    return storedAcceptedAll ? JSON.parse(storedAcceptedAll) : false;
  });

  useEffect(() => {
    localStorage.setItem('acceptedAll', JSON.stringify(acceptedAll));
  }, [acceptedAll]);

  const handleExpand = () => {
    setSettingsExpanded(!settingsExpanded);
  };

  const handleAcceptAll = () => {
    // Handle accept all logic
    const strictlyNecessaryCheckbox = document.querySelector(
      'input[type="checkbox"][name="strictlyNecessary"]'
    );
    const performanceCheckbox = document.querySelector(
      'input[type="checkbox"][name="performance"]'
    );

    if (
      strictlyNecessaryCheckbox.checked ||
      performanceCheckbox.checked
    ) {
      setAcceptedAll(true);
    }
    setSettingsExpanded(false);
  };

  const handleDeclineAll = () => {
    // Handle decline all logic
    setAcceptedAll(false);
    setSettingsExpanded(false);
  };

  if (acceptedAll) {
    return null; // Don't render the CookiePolicy component when acceptedAll is true
  }

  return (
    <div className="cookie-policy">
      <div className="cookie-circle" onClick={handleExpand}></div>
      <div className={`cookie-popup ${settingsExpanded ? 'visible' : ''}`}>
        <h4>This website uses cookies</h4>
        <p>
        We use cookies to improve user experience. Choose what cookies you allow us to use. You can read more about our Cookie Policy in our{' '}
        <Link to="/policies/privacy-policy">Privacy policy</Link>.
      </p>
        <div className="checkboxes">
          <label>
            <input type="checkbox" defaultChecked name="strictlyNecessary" /> STRICTLY NECESSARY
          </label>
          <label>
            <input type="checkbox" name="performance" /> PERFORMANCE
          </label>
        </div>
        <div className="buttons">
          <button className='ACCEPT' onClick={handleAcceptAll}>ACCEPT</button>
          <button className='DECLINE' onClick={handleDeclineAll}>DECLINE</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
