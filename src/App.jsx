import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Impressum from './components/Impressum';
import CookiePolicy from './CookiePolicy';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Pricing />} />
          <Route path="/pricing" element={<Products />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/policies/legal-notice" element={<Legal />} />
          <Route path="/policies/terms-of-service" element={<Terms />} />
          <Route path="/policies/privacy-policy" element={<Privacy />} />
          <Route path="/policies/impressum" element={<Impressum />} />
        </Routes>
        <CookiePolicy />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
