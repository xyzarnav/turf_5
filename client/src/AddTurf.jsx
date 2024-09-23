import React, { useState } from 'react';
import axios from 'axios';
import './AppTurf.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AddTurf = () => {
    const [turfData, setTurfData] = useState({
        imageURL: '',
        name: '',
        price: '',
        cricket: false,
        football: false,
        badminton: false,
        area: '',
        detailed_info: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setTurfData((prevState) => ({ ...prevState, [name]: newValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/addTurf', turfData);
            alert('Turf added successfully:', response.data);

            setTurfData({
                imageURL: '',
                name: '',
                price: '',
                cricket: false,
                football: false,
                badminton: false,
                area: '',
                detailed_info: '',          
            });
        } catch (error) {
            console.error('Error adding turf:', error);
            // Handle error
        }
    };

    return (
        <div>
            <Navbar />
            <div className='navmistake'></div>
            <div className="add-turf-container">
                <h2>Add Turf</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="imageURL">Images Address:</label>
                    <input type="text" id="imageURL" name="imageURL" value={turfData.imageURL} onChange={handleChange} required />

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={turfData.name} onChange={handleChange} required />

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={turfData.price} onChange={handleChange} required />


                    <div className="checkbox-group">
                        <label htmlFor="sports">Sports:</label>
                        <input type="checkbox" id="cricket" name="cricket" checked={turfData.cricket} onChange={handleChange} />
                        <label htmlFor="cricket">Cricket</label>

                        <input type="checkbox" id="football" name="football" checked={turfData.football} onChange={handleChange} />
                        <label htmlFor="football">Football</label>

                        <input type="checkbox" id="badminton" name="badminton" checked={turfData.badminton} onChange={handleChange} />
                        <label htmlFor="badminton">Badminton</label>
                    </div>

                    <label htmlFor="area">Area:</label>
                    <input type="text" id="area" name="area" value={turfData.area} onChange={handleChange} required />

                    <label htmlFor="detailed_info">Detailed Info:</label>
                    <textarea id="detailed_info" name="detailed_info" value={turfData.detailed_info} onChange={handleChange} required />

                    <button type="submit">Add Turf</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddTurf;
