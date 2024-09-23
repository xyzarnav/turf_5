import React, { useState, useEffect } from "react";
import "./BookingPage.css"; // Ensure you have any custom CSS if needed
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, DatePicker } from "antd";
import axios from "axios";
import moment from "moment";

const BookingPage = () => {
  const [turf, setTurf] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    const turfId = localStorage.getItem("selectedTurfId");
    if (!turfId) {
      console.error("No turf ID provided");
      return;
    }

    axios
      .get(`http://localhost:3001/turfs/${turfId}`)
      .then((response) => {
        setTurf(response.data);
      })
      .catch((error) => console.error("Error fetching turf:", error));
  }, []);

  useEffect(() => {
    if (!turf || !date) {
      return;
    }

    axios
      .get(`http://localhost:3001/turfs/${turf.id}/availability?date=${date}`)
      .then((response) => {
        setBookedSlots(response.data);
      })
      .catch((error) => console.error("Error fetching availability:", error));
  }, [turf, date]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!paymentProof) {
      console.error("Please select payment proof");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("date", date);
    formData.append("time_slot", selectedTime);
    formData.append("paymentProof", paymentProof);
    formData.append("numberOfPeople", numberOfPeople);
    formData.append("turfId", turf.id);

    axios
      .post("http://localhost:3001/bookings", formData)
      .then((response) => {
        console.log("Booking successful:", response.data);
        setBookedSlots([...bookedSlots, parseInt(selectedTime)]);

        // Reset form
        setName("");
        setEmail("");
        setDate(moment().format("YYYY-MM-DD"));
        setSelectedTime("");
        setPaymentProof(null);
        setNumberOfPeople(1);
      })
      .catch((error) => console.error("Error making booking:", error));
  };

  const handlePaymentProofChange = (event) => {
    const file = event.target.files[0];
    setPaymentProof(file);
  };

  const renderAvailabilityGrid = () => {
    return (
      <Card title="6 AM to 12 AM Availability" className="shadow-lg rounded-lg">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(18)].map((_, index) => {
            const timeSlot = index + 6;
            const isBooked = bookedSlots.includes(timeSlot);
            return (
              <div
                key={index}
                className={`p-4 text-center rounded-lg transition-colors duration-300 ${
                  isBooked
                    ? "bg-red-600 cursor-not-allowed"
                    : "bg-green-600 cursor-pointer hover:bg-green-500"
                }`}
                onClick={() => !isBooked && setSelectedTime(timeSlot)}
              >
                {timeSlot}:00 - {timeSlot + 1}:00
              </div>
            );
          })}
        </div>
      </Card>
    );
  };

  if (!turf) {
    return <div className="text-center text-black">Loading...</div>;
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <div className="relative">
            <img
              src={turf.imageUrl}
              alt={turf.name}
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
              <h2 className="text-2xl font-bold text-white">{turf.name}</h2>
              <p className="text-white">{turf.detailed_info}</p>
              <p className="text-white">Price: {turf.price}</p>
              <p className="text-white">Area: {turf.area}</p>
              <p className="text-white">
                Sports: {turf.cricket && "Cricket"}{" "}
                {turf.football && "Football"} {turf.badminton && "Badminton"}
              </p>
            </div>
            {renderAvailabilityGrid()}
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Book Now</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label htmlFor="name" className="font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label htmlFor="email" className="font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label htmlFor="date" className="font-semibold">
                Date:
              </label>
              <DatePicker
                id="date"
                name="date"
                value={date ? moment(date, "YYYY-MM-DD") : null}
                onChange={(date, dateString) => setDate(dateString)}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                format="YYYY-MM-DD"
              />

              <label htmlFor="selectedTime" className="font-semibold">
                Select Time:
              </label>
              <select
                id="selectedTime"
                name="selectedTime"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Time</option>
                {[...Array(18)].map((_, index) => {
                  const timeSlot = index + 6;
                  return !bookedSlots.includes(timeSlot) ? (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}:00 - {timeSlot + 1}:00
                    </option>
                  ) : null;
                })}
              </select>

              <label htmlFor="paymentProof" className="font-semibold">
                Payment Proof (Image):
              </label>
              <input
                type="file"
                id="paymentProof"
                name="paymentProof"
                onChange={handlePaymentProofChange}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                accept="image/*"
              />

              <label htmlFor="numberOfPeople" className="font-semibold">
                Number of People:
              </label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                className="p-2 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
