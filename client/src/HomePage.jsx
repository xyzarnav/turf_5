import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import TurfCard from "./TurfCard";
import Footer from "./Footer";
import axios from "axios";
import { Row, Col, Select, Button } from "antd";
import video from "./assets/media/beachsoccer.mp4"; // Ensure the video file name is correct

const { Option } = Select;

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchAreas();
    fetchTurfs();
  }, []);

  const fetchTurfs = (filters = {}) => {
    setLoading(true);
    axios
      .get("http://localhost:3001/turfs", { params: filters })
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch turfs");
        setLoading(false);
      });
  };

  const fetchAreas = () => {
    axios
      .get("http://localhost:3001/areas")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((error) => {
        console.error("Fetch areas error:", error);
      });
  };

  const handleApplyFilters = () => {
    const filters = {
      area: selectedArea,
      priceOrder: selectedPriceOrder,
    };
    fetchTurfs(filters);
  };

  const handleAreaChange = (value) => {
    setSelectedArea(value);
  };

  const handlePriceOrderChange = (value) => {
    setSelectedPriceOrder(value);
  };

  return (
    <div className="app-container h-full bg-gray-900 text-white">
      <Navbar />

      {/* Video Background Section */}
      <div className="relative h-screen overflow-hidden">
        <video
          src={video}
          loop
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover z-[2]"
        />
        <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl sm:text-7xl font-bold text-center">
            Welcome to Turf Booking
          </h1>
          <h2 className="mt-4 text-3xl font-medium">Find Your Perfect Turf</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border-t-2 border-green-600 bg-slate-900 ">
        <div className="w-full md:w-1/2">
          <img  className="w-full md:h-full object-cover" alt="" />
        </div>
        <div className="bg-gradient-to-r from-green-400 to-yellow-300 p-4 md:w-1/2">
          <h3 className="text-2xl md:text-5xl font-medium mt-4 md:mt-10">
            PLAYSPOT HAS
          </h3>
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold text-white mt-2 md:mt-5">
            PRESENCE IN ALL CITIES ACROSS INDIA
          </h1>
          <h6 className="text-sm md:text-xl font-normal mt-2 md:mt-5">
            JOIN WITH THE LARGEST SPORTS GROUND MANAGEMENT SOLUTION
          </h6>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-around p-10">
        <div className="text-center md:w-1/3 mt-10 md:px-10">
          <img className="w-14 mx-auto"  alt="" />
          <h1 className="mt-2 text-2xl">Search</h1>
          <p className="mt-2 text-sm font-light md:text-base">
            Are you looking to play after work, organize your Sunday Five's
            football match? Explore the largest network of sports facilities all
            over India
          </p>
        </div>
        <div className="text-center md:w-1/3 mt-10 md:px-10">
          <img className="w-14 mx-auto"  alt="" />
          <h1 className="mt-2 text-2xl">Book</h1>
          <p className="mt-2 text-sm font-light md:text-base">
            Once you’ve found the perfect ground, court, or gym, connect with
            the venue through the "Book Now" button to make an online booking
            and secure easier payment.
          </p>
        </div>
        <div className="text-center md:w-1/3 mt-10 md:px-10">
          <img className="w-14 mx-auto"  alt="" />
          <h1 className="mt-2 text-2xl">Play</h1>
          <p className="mt-2 text-sm font-light md:text-base">
            You’re the hero. You’ve found a stunning turf or court, booked with
            ease, and now it's time to play. The scene is set for your epic
            match.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-900 py-5">
        <div className="md:hidden p-10 text-center">
          <img
            // src={meetPal}
            className="w-80 object-cover mx-auto px-10"
            alt=""
          />
        </div>
        <div className="text-center md:w-1/2 md:p-10 md:mt-5">
          <h1 className="text-green-600 text-3xl md:text-4xl">
            MEET YOUR PALS OVER GAME
          </h1>
          <p className="text-white px-16 mt-5 font-light md:text-lg">
            Want to play games ?
            <br />
            But don't get an opponent team?
            <br />
            You can Invite a team or Join a pre scheduled match Through
            Playspots
          </p>
        </div>
        <div className="hidden md:flex md:w-1/2">
          <img
            // src={meetPal}
            className="w-96 object-cover px-10 mx-auto"
            alt=""
          />
        </div>
      </div>

      <div className="carousel-container mb-7">
        <Carousel />
      </div>

      {/* <div className="cards-background bg-gray-800 rounded-lg shadow-md p-5">
        <div className="filter-section mb-5">
          <h2 className="filter-title text-xl font-semibold mb-3">Filters</h2>
          <div className="filter-options flex flex-wrap justify-between items-center">
            <div className="filter-option mb-3 sm:mb-0 sm:mr-3">
              <label htmlFor="area" className="block text-sm font-medium">
                Search Area:
              </label>
              <Select
                value={selectedArea}
                onChange={handleAreaChange}
                className="select-area w-full sm:w-48"
              >
                <Option value="">All Areas</Option>
                {areas.map((area) => (
                  <Option key={area} value={area}>
                    {area}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="filter-option mb-3 sm:mb-0 sm:mr-3">
              <label htmlFor="priceOrder" className="block text-sm font-medium">
                Price Order:
              </label>
              <Select
                value={selectedPriceOrder}
                onChange={handlePriceOrderChange}
                className="select-price-order w-full sm:w-48"
              >
                <Option value="">Select price order</Option>
                <Option value="highToLow">Price High to Low</Option>
                <Option value="lowToHigh">Price Low to High</Option>
              </Select>
            </div>
            <Button
              onClick={handleApplyFilters}
              type="primary"
              className="apply-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="card-container">
          <Row gutter={[16, 16]}>
            {data.map((turf) => (
              <Col key={turf.id} xs={24} sm={12} md={8}>
                <TurfCard turf={turf} />
              </Col>
            ))}
          </Row>
           </div>
         </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
