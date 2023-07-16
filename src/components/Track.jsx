import React from 'react';
import './Track.css';
import trackImage from './track.png';

function Track() {
  return (
    <div className="track-container1">
      <div className="track-content1">
        <div className="track-info">
          <h1 className="track-title">See history of your packages:</h1>
          <p className="track-description">
            A summary of your shipments is displayed on the tracking page. You can see the travel story of each shipment.
          </p>
        </div>
        <div className="track-image-container">
          <img className="track-image" src={trackImage} alt="Tracking Packages" />
        </div>
      </div>
    </div>
  );
}

export default Track;
