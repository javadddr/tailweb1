import React from 'react';
import './Excel.css';
import excelImage from './excel.png';
import msexcel from "./msexcel.png"
import gexcel from "./gexcel.png"
function Excel() {
  return (
    <div className="excel-container">
      <div className="excel-content">
        <div className="excel-info">
          <h1 className="excel-title">Add-ins</h1>
          <p className="excel-description">
            Expand your visibility of your packages with our Microsoft and Google add-ins.
          </p>
          <a className='Register3' href="https://appsource.microsoft.com/en-sg/product/office/WA200005597?tab=Overview" target="_blank" rel="noopener noreferrer">
          <img src={msexcel} alt="Microsoft Excel Icon" className="iconsds" />
             Download Excel Add-in
            </a>
            <a className='Register4' href="https://workspace.google.com/marketplace/app/global_package_tracker/543013470351" target="_blank" rel="noopener noreferrer">
            <img src={gexcel} alt="Microsoft Excel Icon" className="iconsds" />
  Download Google spreadsheet Add-on
</a>
        </div>
        <div className="excel-image-container">
          <img className="excel-image" src={excelImage} alt="Excel Add-ins" />
        </div>
      </div>
    </div>
  );
}

export default Excel;
