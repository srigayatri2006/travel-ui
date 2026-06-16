import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>TravelX</h2>

        <p>
          Discover amazing destinations around the world with
          our trusted travel services.
        </p>

        <div className="footer-sections">

          <div>
            <h3>Destinations</h3>
            <p>Maldives</p>
            <p>Paris</p>
            <p>Dubai</p>
            <p>Bali</p>
            <p>Switzerland</p>
          </div>

          <div>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Travel Guides</p>
            <p>Booking Help</p>
            <p>FAQs</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>support@travelx.com</p>
            <p>+91 9876543210</p>
            <p>Chennai, India</p>
          </div>

        </div>

        <hr />

        <p>
          © 2026 TravelX. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;