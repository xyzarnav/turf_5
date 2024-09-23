import React, { useEffect, useState } from 'react';
import './Bookings.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            const userEmail = localStorage.getItem('UserEmail');
            if (!userEmail) {
                setError('User email not found in localStorage');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3001/bookings/${userEmail}`);
                setBookings(response.data);
            } catch (error) {
                setError('Failed to fetch bookings');
                console.error('Error fetching bookings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='navmistake'></div>
            <div className="bookings-page">
                <h2>Your Bookings</h2>
                <div className="bookings-container">
                    {bookings.map((booking, index) => (
                        <div key={index} className="booking-card">
                            <h3>{booking.turfName}</h3>
                            <p>Date: {booking.date}</p>
                            <p>Time: {booking.time_slot}:00 - {booking.time_slot + 1}:00</p>
                            <p>Amount: {booking.price} Rupees</p>
                            <p>Number of People: {booking.numberOfPeople}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingsPage;
