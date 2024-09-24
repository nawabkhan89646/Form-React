import React from 'react'
import './App.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdSearch, MdShoppingBag } from 'react-icons/md';
import pic1 from '../src/assets/tent-1.jpg'
import pic2 from '../src/assets/tent-2.jpg'

function App() {
  return (
    <div>
      <div>
      <div className="navbar">
        <h2>Camp</h2>
        <ul className="heading">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
        <div className="right">
          <MdSearch className="material-icons" />
          <MdShoppingBag className="material-icons" />
        </div>
      </div>

      <div className="main">
        <div className="left">
          <h1>Enjoy Your Holidays</h1>
          <p className="button">BOOK NOW</p>
        </div>
        <div className="right">
          <div className="content">
            <p>12m2 | 2 beds</p>
            <h1>BASIC TENT</h1>
            <p>Your Camping Experience</p>
            <p>
              Designed for those who appreciate the fundamental joys of camping,
              our selection of basic tents offers comfort and reliability
              without unnecessary frills.
            </p>
          </div>
          <img src={pic1} alt="pic-1" className="pic-1" />
          <img src={pic2} alt="pic-2" className="pic-2" />
        </div>
      </div>

      <div className="footer">
        <div className="left">
          <MdLocationOn className="material-icons" />
          <p>OUR LOCATION</p>
        </div>
        <div className="right">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App

