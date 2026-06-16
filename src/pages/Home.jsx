import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [travelers, setTravelers] = useState(0);
  const [destinations, setDestinations] = useState(0);
  const [guides, setGuides] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTravelers((prev) => (prev < 10000 ? prev + 100 : 10000));
      setDestinations((prev) => (prev < 50 ? prev + 1 : 50));
      setGuides((prev) => (prev < 100 ? prev + 2 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <span className="badge">
            ✈ Trusted by 10,000+ Travelers
          </span>

          <h1>Your Journey Begins With TravelX</h1>

          <p>
            Explore beautiful destinations, book flights,
            find expert tourist guides and create unforgettable memories.
          </p>

          <div className="hero-buttons">
            <Link to="/places">
              <button>Explore Places</button>
            </Link>

            <Link to="/booking">
              <button>Book Now</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h2>{travelers.toLocaleString()}+</h2>
              <p>Happy Travelers</p>
            </div>

            <div className="hero-stat">
              <h2>{destinations}+</h2>
              <p>Destinations</p>
            </div>

            <div className="hero-stat">
              <h2>{guides}+</h2>
              <p>Tour Guides</p>
            </div>

            <div className="hero-stat">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>

        <p className="destination-subtitle">
          Discover our most loved travel destinations around the world.
        </p>

        <div className="destination-grid">

          <Link to="/maldives" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80"
                alt="Maldives"
              />
              <h3>Maldives</h3>
            </div>
          </Link>

          <Link to="/paris" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
                alt="Paris"
              />
              <h3>Paris</h3>
            </div>
          </Link>

          <Link to="/dubai" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
                alt="Dubai"
              />
              <h3>Dubai</h3>
            </div>
          </Link>

          <Link to="/bali" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
                alt="Bali"
              />
              <h3>Bali</h3>
            </div>
          </Link>

          <Link to="/swiss" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1000&q=80"
                alt="Switzerland"
              />
              <h3>Switzerland</h3>
            </div>
          </Link>

          <Link to="/newyork" className="destination-link">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1000&q=80"
                alt="New York"
              />
              <h3>New York</h3>
            </div>
          </Link>

        </div>
      </section>

      <section className="reviews">
        <h2>Traveler Reviews</h2>

        <div className="review-grid">
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>Amazing experience and excellent guides.</p>
            <h4>- Priya</h4>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>Easy booking process and great support.</p>
            <h4>- Rahul</h4>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>One of the best trips I've ever had.</p>
            <h4>- Sneha</h4>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose TravelX?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>✈ Best Flight Deals</h3>
            <p>Affordable domestic and international flights.</p>
          </div>

          <div className="feature-card">
            <h3>🧑‍💼 Expert Guides</h3>
            <p>Professional local guides at every destination.</p>
          </div>

          <div className="feature-card">
            <h3>💳 Secure Booking</h3>
            <p>Safe and trusted booking process.</p>
          </div>

          <div className="feature-card">
            <h3>📞 24/7 Support</h3>
            <p>Travel assistance whenever you need it.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;