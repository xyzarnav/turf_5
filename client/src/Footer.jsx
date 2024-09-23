import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWordpress } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CUSTOMER SUPPORT</h3>
          <ul>
            <li>Book Online</li>
            <li>Cancel Booking</li>
            <li>Customer Care (Mon - Fri | 10am - 5pm)</li>
            <li>&#9742; 81697 29906</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SPORLOC</h3>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>We Are Hiring</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>KEEP PLAYING</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaWordpress /></a>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Enter your Email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-section">
          <h3>FOR BUSINESSES</h3>
          <ul>
            <li>How This Works</li>
            <li>Add A Ground</li>
            <div className='businessbuttons'>
          
          <li><button className="business-login">BUSINESS LOGIN</button> </li>
          <li><button className="register">REGISTER WITH US</button></li>
          </div>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOR SPORTS BRANDS</h3>
          <ul>
            <li>Advertise With Us</li>
            <li>Partnerships Form</li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;