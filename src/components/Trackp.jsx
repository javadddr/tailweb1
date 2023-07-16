import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trackp.css';

const Trackp = () => {
  
  const [trackingNumber, setTrackingNumber] = useState('');
  const [courierCode, setCourierCode] = useState('');
  const [carriers, setCarriers] = useState([]);
  const [filteredCarriers, setFilteredCarriers] = useState([]);
  const [travelHistory, setTravelHistory] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [transitTime, setTransitTime] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // New state variable

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.globalpackagetracker.com/courier/get', {
          headers: {
            key: '0LAQsGQfjSIVDQn46wCWGHokFrwbsAwu'
          }
        });
        setCarriers(response.data.documents);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const filtered = carriers.filter((carrier) =>
      carrier.courierName.toLowerCase().includes(courierCode.toLowerCase())
    );
    setFilteredCarriers(filtered);
  }, [courierCode, carriers]);

 
  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.globalpackagetracker.com/shipment/track', {
        params: {
          key: '0LAQsGQfjSIVDQn46wCWGHokFrwbsAwu',
          tracking_number: trackingNumber,
          courier_code: courierCode,
        },
      });

      const { delivery_status, transit_time, travel_history } = response.data.shipment;
      const history = travel_history.filter((event) => event.location !== null);

      if (history.length > 0) {
        const lastLocation = history[history.length - 1].location;
        const destinationLocation = lastLocation || history[history.length - 2]?.location || '';
        setOrigin(history[0]?.location || '');
        setDestination(destinationLocation);
        setDeliveryStatus(delivery_status);
        setTransitTime(transit_time);
        setTravelHistory(history);
      } else {
        setOrigin('');
        setDestination('');
        setDeliveryStatus('');
        setTransitTime('');
        setTravelHistory([]);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

 
  const handleCarrierSelection = (carrierCode) => {
    setCourierCode(carrierCode);
    setShowDropdown(false); 
  };

  return (
    <div className='maintrackp'>
      <div className='idk'>
    <div className="track-container">
      <h className='bb' >Track a shipment</h>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter tracking number"
        className="track-input"
      />
      <div className="dropdown-menu">
        <input
          type="text"
          value={courierCode}
          onChange={(e) => {
            setCourierCode(e.target.value);
            setShowDropdown(true); 
          }}
          placeholder="Select carrier"
          className="carrier-input"
        />
        {showDropdown && courierCode && ( 
          <div className="dropdown-content">
            {filteredCarriers.map((carrier) => (
              <div
                key={carrier.courierCode}
                className="carrier-item"
                onClick={() => handleCarrierSelection(carrier.courierCode)} 
              >
                <div className="carrier-name">{carrier.courierName}</div>
                <div className="carrier-code">{carrier.courierCode}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={handleSearch} className="search-button">Track</button>

      {origin && destination && (
        <div className="shipment-details">
          <h2 className='Shipment1'>Shipment Details</h2>
          <p className='Shipment2'><span className='titleinfo'>From:</span> {destination}</p>
          <p className='Shipment3'><span className='titleinfo'>To:</span> {origin}</p>
        </div>
      )}

      {deliveryStatus && transitTime && (
        <div className={deliveryStatus === 'Delivered' ? 'shipment-details' : deliveryStatus === 'Transit' ? 'shipment-details1' : 'shipment-details2'}>
          <p className='Shipment5'><span className='titleinfo'>Delivery Status:</span><span id={deliveryStatus === 'Delivered' ? 'deli' : deliveryStatus === 'Transit' ? 'deli1' : 'deli2'}>{deliveryStatus}</span> </p>
          <p className='Shipment4'><span className='titleinfo'>Transit Time:</span> {transitTime} days</p>
        </div>
      )}

      {travelHistory.length > 0 && (
        <div className="travel-history">
          <h2 className='Shipment6'>Travel History</h2>
          <ul>
            {travelHistory.map((event, index) => (
              <li key={index}>
                <div className='wholeifo'>
                  <div className='justtitle'>
                  <div className="location">{event.location}</div>
                  <div className="status">{event.status}</div>
                  </div>
                <div className='datetime'>
                  <div className="date">{new Date(event.datetime).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                  <div className="time">{new Date(event.datetime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Trackp;
