import React from 'react';
import './Aboutus.css';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar component */}
      <div className='navmistake'></div>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-header">
            <h2>About BookMyTurf</h2>
            <p> <b>BookMyTurf is your ultimate destination for hassle-free turf booking.</b></p>
            <p> <b>
              BookMyTurf was born out of the need to simplify the process of booking turfs for sports activities. Our goal is to provide sports enthusiasts with an effortless experience to discover, book, and manage turf bookings seamlessly. </b>
            </p>
          </div>
          <div className="about-us-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Turf Partners</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Games Booked</p>
            </div>
          </div>
          <div className="about-us-story">
            <h2>Our Journey</h2>
            <p>
              <b>
              BookMyTurf was founded to address the challenges faced by sports enthusiasts in finding and booking turfs efficiently. We experienced the frustration of navigating through complex booking processes and managing multiple bookings across different venues.</b>
            </p>
            <p>
            <b> Our journey led us to create a platform where turf booking is simplified, fast, and enjoyable. BookMyTurf is designed to empower sports enthusiasts to focus on their game while we take care of the booking logistics.</b>
            </p>
            <p>
            <b> Today, BookMyTurf stands as a trusted name in turf booking, offering a user-friendly interface and a wide network of turf partners. Join us in revolutionizing how sports enthusiasts book and enjoy their turf experiences with just a click!</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
