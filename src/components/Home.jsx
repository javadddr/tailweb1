import React, { useState } from 'react';
import '../index.css';
import './Home.css';
import { Link } from 'react-router-dom';
import routeGif from "./baki.gif";
import logo from "./logo.png";
import completeGif from "./complete.gif";
import deliveryGif from "./delivery.gif";
import packageGif from "./package.gif";
import Homet from './Homet';
import Dash from './Dash';
import Excel from './Excel';
import Track from './Track';
import Carriers from './Carriers';
import Trackp from './Trackp';
import Api from './Api';
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <div className="relative">
      <div className='divi'>
       
      <div className='bot'>
  <div className='bleft'>
    <h1 className='titlebig'>Track your packages and parcels from shipping to delivery with +1200 carriers all over the world!</h1>
    <div className='titlebig1'>Track your packages with our Webapp, Excel add-in, Google spreadsheet addon, and enjoy our analytical dashboard</div>
    <a className='Register' href="https://app.globalpackagetracker.com/register" target="_blank" rel="noopener noreferrer">
      Register for 10 free shipments
    </a>
  </div>
  <div className='bright'>
    <img src={routeGif} alt="route gif" className="gif-transparent" />
  </div>
</div>

        <div>
        
            <div className='bright2'>
              <img src={completeGif} alt="complete gif" className="gif-transparent" />
              <img src={deliveryGif} alt="delivery gif" className="gif-transparent" />
              <img src={packageGif} alt="package gif" className="gif-transparent" />
            </div>
          
        </div>
      </div>
      
    </div>
    
    <Carriers/>
    {/* <Trackp/> */}
    <Homet/>
    <Dash/>
    <Excel/>
    <Api/>
    <Track/>
    
    
    </div>
  );
}

export default Home;





















