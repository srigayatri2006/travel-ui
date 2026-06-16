import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function Dubai() {
  const guides = [
    {
      name: "Omar Al Mansoori",
      specialty: "Dubai City Tour Expert",
      rating: "4.9",
      phone: "+971 501234567"
    },
    {
      name: "Ahmed Rashid",
      specialty: "Desert Safari Specialist",
      rating: "4.8",
      phone: "+971 502345678"
    },
    {
      name: "Fatima Noor",
      specialty: "Luxury Shopping Guide",
      rating: "4.9",
      phone: "+971 503456789"
    },
    {
      name: "Yusuf Khan",
      specialty: "Adventure Activities Guide",
      rating: "4.7",
      phone: "+971 504567890"
    },
    {
      name: "Sarah Malik",
      specialty: "Family Tour Planner",
      rating: "4.8",
      phone: "+971 505678901"
    },
    {
      name: "Mohammed Ali",
      specialty: "Cultural Heritage Expert",
      rating: "4.9",
      phone: "+971 506789012"
    }
  ];

  return (
    <div
      className="guide-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <Navbar />

      <div className="guide-content">

        <h1>Dubai Travel Guide</h1>

        <p className="intro">
          Experience luxury, modern architecture, desert adventures,
          world-class shopping, and iconic attractions in Dubai.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Desert Safari</li>
            <li>Dune Bashing</li>
            <li>Burj Khalifa Visit</li>
            <li>Luxury Yacht Cruise</li>
            <li>Dubai Mall Shopping</li>
            <li>Skydiving</li>
            <li>Dubai Fountain Show</li>
            <li>Hot Air Balloon Ride</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Burj Khalifa</li>
            <li>Dubai Mall</li>
            <li>Palm Jumeirah</li>
            <li>Dubai Marina</li>
            <li>Burj Al Arab</li>
            <li>Dubai Frame</li>
            <li>Global Village</li>
            <li>Dubai Miracle Garden</li>
          </ul>

        </section>

        <section className="section">

          <h2>Available Tourist Guides</h2>

          <div className="guides-grid">

            {guides.map((guide, index) => (
              <div className="guide-card" key={index}>

                <h3>{guide.name}</h3>

                <p>{guide.specialty}</p>

                <p>⭐ Rating: {guide.rating}</p>

                <p>📞 {guide.phone}</p>

                <button>Book Guide</button>

              </div>
            ))}

          </div>

        </section>

      </div>

      <Footer />

    </div>
  );
}

export default Dubai;