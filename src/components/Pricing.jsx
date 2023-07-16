import React, { useState } from 'react';
import './Pricing.css';
import dpImage from './dp.gif';
import tracki from './traki.gif';
import dido from './checkmark.png';
import sio from './fast.png';
import Products from './Products';
import sxzt from './sxzt.png';
import Comment from './Commen';

const Pricing = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(true);
  };

  return (
    <div className="vaghan">
      <div className="tamam">
        <div className={`mainapphalf3 ${isHovered ? 'visible' : ''}`}>
          <img src={dpImage} alt="DP" />
        </div>
        <div className={`mainapphalf4 ${isHovered ? 'visible' : ''}`}>
          <img className="axtrack" src={tracki} alt="DPs" />
        </div>

        <div
          className={`beforemain ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <div className="mainapp">
            <h className="topih">Global Package Tracker</h>

            <img className="sio" src={sio} alt="dff" />
            <div className={`mainapphalf ${isHovered ? 'visible' : ''}`}>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Integration with 1,200+ carriers</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Detailed shipment tracking page</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Analytical Dashboard</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Microsoft Office Add-in for Excel</h>
              </div>
            </div>
            <div className={`mainapphalf1 ${isHovered ? 'visible' : ''}`}>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm"> Api to export data</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Tracking API & Webhook</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Extensive alert notification system</h>
              </div>
              <div className="checkandtext">
                <img className="iconprice" src={dido} alt="Checkmark Icon" />{' '}
                <h className="checkm">Assign customer, Product, Hub and costs to your packages</h>
              </div>
            </div>
            <div className={`mainapphalf2 ${isHovered ? 'visible' : ''}`}>
              <h>Global Package Tracker</h>
              <h>Track all of your shipment</h>
            </div>
          </div>
        </div>
      </div>
      <Comment/>
      <Products />
    </div>
  );
};

export default Pricing;
