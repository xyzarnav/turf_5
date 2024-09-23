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
