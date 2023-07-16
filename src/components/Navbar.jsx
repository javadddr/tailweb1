import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navmain'>
      <div className='navtop'>
       <div className={`top ${isMenuOpen ? 'open' : ''}`}>
          <div className='titlpic'>
            <img className='ax1' src={logo} alt="logo" />
            <div className='titelii'>Global Package Tracker</div>
          </div>
          <div className={`linki ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
              <Link className='linkmain' to="/">Home</Link>
              <Link className='linkmain' to="/pricing">Pricing</Link>
              <Link className='linkmain' to="/products">Products</Link>
              <Link className='linkmain' to="/pages/contact">Contact</Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
