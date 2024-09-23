import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const TurfCard = ({ turf }) => {
  const handleBookNow = (turfId) => {
    localStorage.setItem('selectedTurfId', turfId); // Store turf ID in local storage
  };

  return (
    <Link to="/bookingpage"> {/* Link to booking page */}
      <Card
        hoverable
        style={{ width: 250, marginBottom: 20 }}
        cover={<img alt={turf.name} src={turf.imageUrl} style={{ height: 150, objectFit: 'cover' }} />}
      >
        <Meta
          title={turf.name}
          description={`Price: ${turf.price}, Area: ${turf.area}`}
        />
        <Button className='custom-button' type="primary" style={{ marginTop: '16px' }} onClick={() => handleBookNow(turf.id)}>Book Now</Button>
      </Card>
    </Link>
  );
};

export default TurfCard;
