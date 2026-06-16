import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        TravelX
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/places">Places</Link>
        </li>

        <li>
          <Link to="/booking">Booking</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;