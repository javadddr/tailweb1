import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carriers.css';

const Carrier = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [carriers, setCarriers] = useState([]);
  const [filteredCarriers, setFilteredCarriers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.globalpackagetracker.com/courier/get', {
         
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
      carrier.courierName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCarriers(filtered);
  }, [searchQuery, carriers]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="carrier-container">
      <h1>Carriers that we support:</h1>
      <p>Search if your carrier is supported by us</p>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search carrier..."
      />
      {searchQuery && (
        <div className="dropdown-menu">
          {filteredCarriers.map((carrier) => (
            <div key={carrier.courierCode} className="carrier-item">
              <div className="carrier-name">{carrier.courierName}</div>
              <div className="carrier-code">{carrier.courierCode}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrier;
