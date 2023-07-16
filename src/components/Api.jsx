import React, { useState, useEffect } from 'react';
import './Api.css';

function Api() {
  const [text, setText] = useState('');
const phrase = `Travel History: Delivered! signed by Mr Customer!`;

useEffect(() => {
  const interval = setInterval(() => {
    setText((prevText) => {
      const nextWordIndex = prevText.split(' ').length;
      const nextWord = phrase.split(' ')[nextWordIndex];
      
      if (nextWord === undefined) {
        return phrase;
      } else {
        return prevText + nextWord + ' ';
      }
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);




  return (
    <div className='koliapi'>
    <div className="api-container">
      <div className="api-info">
        <h2>Api Integration</h2>
        <p>
          Export all of your information to your internal system and share all information of your packages all over the teams.
        </p>
      </div>
      <div className="api-terminal">
        <div className="terminal-title">
          <span className="red-circle"></span>
          <span className="yellow-circle"></span>
          <span className="green-circle"></span>
          <p className="title-text">API Global Package Tracker</p>
        </div>
        <div className="terminal-content">
          <p><span className='toti'>Tracking Number:</span> 1234567890</p>
          <p><span className='toti'>Carrier:</span> DHL...FedEX...Ups...</p>
          <p className="animated-text">{text}</p>
          <p><span id='sisi'>status: </span>Shipment is out with courier for delivery</p>
          <p><span id='sisi'>location: </span>Düsseldorf - NRW - Germany</p>
          <p><span id='sisi'>datetime:</span> 2023-05-22T10:20:00.000Z</p>
          <p><span id='sisi'>statusMilestone:</span> out_for_delivery</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Api;
