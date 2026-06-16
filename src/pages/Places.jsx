import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Places.css";

function Places() {
  return (
    <div>

      <Navbar />

      <div className="places-header">

        <h1>Popular Destinations</h1>

        <p>
          Choose your dream destination and explore travel guides.
        </p>

      </div>

      <div className="places-grid">

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd"
            alt="Maldives"
          />

          <h2>Maldives</h2>

          <p>Crystal clear beaches and luxury resorts.</p>

          <Link to="/maldives">
            <button>View Guide</button>
          </Link>

        </div>

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="Paris"
          />

          <h2>Paris</h2>

          <p>Romantic city with iconic landmarks.</p>

          <Link to="/paris">
            <button>View Guide</button>
          </Link>

        </div>

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
            alt="Dubai"
          />

          <h2>Dubai</h2>

          <p>Luxury shopping and modern architecture.</p>

          <Link to="/dubai">
            <button>View Guide</button>
          </Link>

        </div>

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            alt="Bali"
          />

          <h2>Bali</h2>

          <p>Tropical paradise with beautiful temples.</p>

          <Link to="/bali">
            <button>View Guide</button>
          </Link>

        </div>

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95"
            alt="Switzerland"
          />

          <h2>Switzerland</h2>

          <p>Snow mountains and scenic train journeys.</p>

          <Link to="/swiss">
            <button>View Guide</button>
          </Link>

        </div>

        <div className="place-card">

          <img
            src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2"
            alt="New York"
          />

          <h2>New York</h2>

          <p>The city that never sleeps.</p>

          <Link to="/newyork">
            <button>View Guide</button>
          </Link>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Places;