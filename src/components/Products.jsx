import React, { useState, useEffect} from 'react';
import "./Products.css"
import { Link } from 'react-router-dom';
import dido from "./checkmark.png"
import axios from 'axios';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';


const CustomSlider = withStyles({
  root: {
    color: '#2196f3', // Slider color
    height: 8,
    marginTop: 16,
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: '#fff', // Thumb color
    border: '2px solid currentColor',
    marginTop: -10,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-20%)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: 'blue', // Value label text color
    },
  },
})(Slider);
const Products = () => {

  
  const [trackingType, setTrackingType] = useState('year');
  




  const handleTrackingTypeChange = (event) => {
    setTrackingType(event.target.value);
  };

  const calculatePrice = (rate) => {
    return rate * pp;
  };




  const calculateStepSize = () => {
    const totalSteps = stepValues.length - 1;
    const sliderWidth = 100;
    const stepSize = sliderWidth / totalSteps;
    return stepSize;
  };

  useEffect(() => {
    const slider = document.querySelector('.slider-input');
    if (slider) {
      slider.style.backgroundSize = `${calculateStepSize()}% 100%`;
    }
  }, []);
  const [products, setProducts] = useState([]);
  const [productChoosen, setProductChoosen] = useState(null);
  const [priceChoosen, setPriceChoosen] = useState(null);

  
  const handleProductClick = (productId, price) => {
    setProductChoosen(productId);
    setPriceChoosen(price);
  };
  
  const pp=0
  const pership = 0.11;

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://api.globalpackagetracker.com/stripe/products', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0NmIxN2Q5NGFkODAxZGEyZjY0NjEiLCJ0b2tlbklkIjoiNjRhNTUzZTJlNThlNTI0MDEzMmE1ZmEyIiwiaWF0IjoxNjg4NTU2NTE0LCJleHAiOjE2ODkxNjEzMTR9.S-f1F4MSmwGK4TGcim1Ep0WaKMdFziVi0PIOfRdZ71s',
        },
      });
      const sortedProducts = response.data.products.sort((a, b) => a.shipments - b.shipments);
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const uniqueShipments = new Set();

// Iterate over the products array and add unique shipments to the Set
products.forEach((product) => {
  if (product.billing_cycle === "month") {
    uniqueShipments.add(product.shipments);
  }
});

const uniqueShipmentsyear = new Set();

// Iterate over the products array and add unique shipments to the Set
products.forEach((product) => {
  if (product.billing_cycle === "year") {
    uniqueShipmentsyear.add(product.shipments);
  }
});
// Convert the Set back to an array
const uniqueShipmentsArray = Array.from(uniqueShipments);
const uniqueShipmentsArrayyear = Array.from(uniqueShipmentsyear);

const maxSliderValue = Math.max(...uniqueShipmentsArray);
const minSliderValue = 0;
const uniqueShipmentsArray1 = uniqueShipmentsArray
const uniqueShipmentsArray1year = uniqueShipmentsArrayyear

const [productChoosen1, setProductChoosen1] = useState(0);

const handleSliderChange1 = (event, value) => {
  setProductChoosen1(Number(value));
};
const [productChoosen1year, setProductChoosen1year] = useState(0);

const handleSliderChange1year = (event, value) => {
  setProductChoosen1year(Number(value));
};


  
  const marks = uniqueShipmentsArray1.map((value, index) => ({
    value: index,
    label: value,
  }));
  const marksyear = uniqueShipmentsArray1year.map((value, index) => ({
    value: index,
    label: value,
  }));

// if(trackingType==="month"){
//   const slideraddad=productChoosen1
//   return slideraddad
// }else{
//   const slideraddad=productChoosen1year
//   return slideraddad
// }
const [slideraddad, setSlideraddad] = useState(trackingType === "month" ? productChoosen1 : productChoosen1year);
useEffect(() => {
  if (trackingType === "month") {
    setSlideraddad(uniqueShipmentsArray1[productChoosen1]);
  } else {
    setSlideraddad(uniqueShipmentsArray1year[productChoosen1year]);
  }
}, [trackingType, productChoosen1, productChoosen1year]);
const filteredProducts = products.filter((product) => {
  return product.billing_cycle === trackingType && product.shipments === slideraddad;
});

const filteredProductsp = filteredProducts.filter((product) => {
  return product.plan === "Premium";
});

const premiumPrices = filteredProductsp.map((product) => {
  return product.price;
});

const filteredProductsS = filteredProducts.filter((product) => {
  return product.plan === "Standard";
});

const standardPrices = filteredProductsS.map((product) => {
  return product.price;
});


const standardship = filteredProductsS.map((product) => {
  return product.shipments;
});

const premiumship = filteredProductsp.map((product) => {
  return product.shipments;
});
console.log(premiumship)
console.log(standardship)
console.log(premiumPrices.toString().slice(0, -2))
console.log(standardPrices.toString().slice(0, -2))
const pershipmentstandard = (standardPrices.toString().slice(0, -2)/standardship).toFixed(2)
const pershipmentsperimum = (premiumPrices.toString().slice(0, -2)/premiumship).toFixed(2)
console.log(pershipmentstandard)
  return (
    <div className='pmain'>
      <div className='pmain2'>
     
    <div className='slider'>
    <div className='slidertop'>
  {trackingType === "month" ? (
    <>
      <h1 className='xo'>How many shipments do you want to track?</h1>
      <CustomSlider
        min={0}
        max={uniqueShipmentsArray1.length - 1}
        value={productChoosen1}
        step={1}
        onChange={handleSliderChange1}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => uniqueShipmentsArray1[value]}
        aria-labelledby="slider-label"
        marks={marks}
        className='slideriona'
      />
      <Typography id="slider-label" variant="caption" className='cc'>
      <p>Number of Shipments to track in a {trackingType}: {uniqueShipmentsArray1[productChoosen1]}</p>
      </Typography>
    </>
  ) : (
    <>
      <h1 className='xo'>How many shipments do you want to track?</h1>
      <CustomSlider
        min={0}
        max={uniqueShipmentsArray1year.length - 1}
        value={productChoosen1year}
        step={1}
        onChange={handleSliderChange1year}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => uniqueShipmentsArray1year[value]}
        aria-labelledby="slider-label"
        marks={marksyear}
        className='slideriona'
      />
      <Typography id="slider-label" variant="caption" className='cc'>
       <p> Number of Shipments to track in a {trackingType}: {uniqueShipmentsArray1year[productChoosen1year]}</p>
      </Typography>
    </>
  )}
</div>

         

    {/* <div className='slidertop'>
      <h1 className='xo'>How many shipments do you want to track?</h1>
      <input
        type="range"
        min={0}
        max={uniqueShipmentsArray1.length - 1}
        value={String(productChoosen1)}
        
        step={1}
        onChange={handleSliderChange1}
        className='px'
      />
      <p className='cc'>Selected Value: {uniqueShipmentsArray1[productChoosen1]}</p>
    </div> */}
    <div className='yeamon'>
    <input
    type='radio'
    id='monthly'
    name='trackingType'
    value='month'
    className="yeamon2"
    checked={trackingType === 'month'}
    onChange={handleTrackingTypeChange}
  />
  <label htmlFor="monthly">Pay monthly</label>
  <input
    type='radio'
    id='yearly'
    name='trackingType'
    value='year'
    className="yeamon1"
    checked={trackingType === 'year'}
    onChange={handleTrackingTypeChange}
  />
  <label htmlFor="yearly">Pay annually</label>
 
</div>
        
      </div>
      <div className='cards'>
        <div className='card1'>
          <div>
            <h1>Free</h1>
            <h5>10 free shipments to try out</h5>
            <h6>&#36; </h6>
            <h2><span>{calculatePrice(0)}</span>/ No Billing</h2>
          </div>
          <div className='undercard'>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>Integration with 1,200+ carriers</h>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Detailed shipment tracking page</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Analytical Dashboard (KPIs)</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Bulk import shipment data</h>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Microsoft Office Add-in for Excel</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'> Api to export data</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Tracking API & Webhook</h>
            
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Extensive alert notification system</h>
          
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Assign customer, Product, Hub and costs to your packages</h>
           
            </div>
      
          </div>
          <div className='forfree'>
            <a href="https://app.globalpackagetracker.com/register" target="_blank" rel="noopener noreferrer">
              <button className='linkmainsdrr'>Register for free</button>
            </a>
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
          <h1>Standard</h1>
          <h5>Add-ins</h5>
          <h6>&#36; {pershipmentstandard ==="NaN" ? "0.35" : String(pershipmentstandard)} Per Shipment</h6>

          <h2><span>{standardPrices.length !== 0 ? standardPrices.toString().slice(0, -2) : 209}</span>/ {trackingType === "month" ? "per month" : "per year"}</h2>
          <div className='undercard'>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>Integration with 1,200+ carriers</h>
              
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Microsoft Office Add-in for Excel</h>

            </div>
           
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Bulk import shipment data</h>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Assign customer, Product, Hub and costs to your packages</h>
           
            </div>
       
          </div>
          <div className='forfree'>
            <a href="https://billing.globalpackagetracker.com/login" target="_blank" rel="noopener noreferrer">
              <button className='linkmainsdex'>Buy Now</button>
            </a>
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card2'>
          <h1>Premium</h1>
          <h5>Access all tools</h5>
          <h6>&#36;  {pershipmentsperimum ==="NaN" ? "0.53" : String(pershipmentsperimum)} Per Shipment</h6>

          <h2><span>{premiumPrices.length !== 0 ? premiumPrices.toString().slice(0, -2) : 319}</span>/ {trackingType === "month" ? "per month" : "per year"}</h2>
          <div className='undercard'>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>Integration with 1,200+ carriers</h>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Detailed shipment tracking page</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Analytical Dashboard (KPIs)</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Bulk import shipment data</h>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Microsoft Office Add-in for Excel</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'> Api to export data</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Tracking API & Webhook</h>
            
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Extensive alert notification system</h>
          
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Assign customer, Product, Hub and costs to your packages</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Six-sigma guide </h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Custom shipments reports </h>
           
            </div>
        
          </div>
          <div className='forfree'>
            <a href="https://billing.globalpackagetracker.com/login" target="_blank" rel="noopener noreferrer">
              <button className='linkmainsd'>Buy Now</button>
            </a>
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card3'>
          <h1>Enterprise</h1>
          <h5>A custom plan built to scale</h5>
          <div className='tf'>
            <h4>Access All +<br /><br />Up to 25% shipping costs reduction guaranteed!</h4>
          </div>
          <h2>
            <p className='lastspan'>
              <Link className='linkmainsd1' to="/pages/contact">Contact Us</Link>
            </p>
          </h2>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Products;
