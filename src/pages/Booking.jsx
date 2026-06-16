import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Maldives",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );

      alert("Booking Saved Successfully!");

      setFormData({
        name: "",
        email: "",
        destination: "Maldives",
        date: "",
      });
    } catch (error) {
      alert("Failed to save booking");
      console.error(error);
    }
  };

  return (
    <div className="booking-page">
      <Navbar />

      <div className="booking-container">
        <h1>Book Your Dream Vacation</h1>

        <form className="booking-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Destination</label>

            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option>Maldives</option>
              <option>Paris</option>
              <option>Dubai</option>
              <option>Bali</option>
              <option>Switzerland</option>
              <option>New York</option>
            </select>
          </div>

          <div className="form-group">
            <label>Departure Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="search-btn">
            Book Now
          </button>

        </form>

        <h2 className="flight-title">
          Available Flights
        </h2>

        <div className="flight-grid">

          <div className="flight-card">
            <h3>Air India AI202</h3>
            <p>Chennai → Maldives</p>
            <p>Departure: 08:30 AM</p>
            <p>Price: ₹18,500</p>
          </div>

          <div className="flight-card">
            <h3>Emirates EK510</h3>
            <p>Chennai → Dubai</p>
            <p>Departure: 10:00 AM</p>
            <p>Price: ₹24,000</p>
          </div>

          <div className="flight-card">
            <h3>Qatar Airways QR528</h3>
            <p>Chennai → Paris</p>
            <p>Departure: 01:30 PM</p>
            <p>Price: ₹45,000</p>
          </div>

          <div className="flight-card">
            <h3>Singapore Airlines SQ401</h3>
            <p>Chennai → Bali</p>
            <p>Departure: 09:15 PM</p>
            <p>Price: ₹36,000</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Booking;