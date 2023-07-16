import React from 'react';
import './Dash.css';
import dash1 from './dash1.png';
import dash2 from './dash2.png';
import dash3 from './dash3.png';

function Dash() {
  return (
    <div className='dashboardmain'>
    <div className="dashboard">
      <h1 className="title">Analytical Shipping Dashboard</h1>
      <p className="description">
        Explore your shipments and packages, monitor status, costs, and all shipping KPIs.
      </p>
      <div className="images">
        <img src={dash1} alt="Dashboard 1" />
        <img src={dash2} alt="Dashboard 2" />
        <img src={dash3} alt="Dashboard 3" />
      </div>
     
      <a className='Register1' href="https://app.globalpackagetracker.com/register" target="_blank" rel="noopener noreferrer">
      Order a custom dashboard for your team!
            </a>
    </div>
    </div>
  );
}

export default Dash;
