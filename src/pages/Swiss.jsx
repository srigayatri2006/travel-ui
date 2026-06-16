import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function Swiss() {
  const guides = [
    {
      name: "Lucas Meier",
      specialty: "Swiss Alps Specialist",
      rating: "4.9",
      phone: "+41 791234567"
    },
    {
      name: "Sophie Muller",
      specialty: "Nature & Hiking Guide",
      rating: "4.8",
      phone: "+41 792345678"
    },
    {
      name: "Daniel Fischer",
      specialty: "Mountain Adventure Expert",
      rating: "4.9",
      phone: "+41 793456789"
    },
    {
      name: "Emma Weber",
      specialty: "Photography Tour Guide",
      rating: "4.7",
      phone: "+41 794567890"
    },
    {
      name: "Noah Keller",
      specialty: "Luxury Travel Planner",
      rating: "4.8",
      phone: "+41 795678901"
    },
    {
      name: "Olivia Baumann",
      specialty: "Family Vacation Guide",
      rating: "4.9",
      phone: "+41 796789012"
    }
  ];

  return (
    <div
      className="guide-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <Navbar />

      <div className="guide-content">

        <h1>Switzerland Travel Guide</h1>

        <p className="intro">
          Explore breathtaking mountains, beautiful lakes,
          scenic train rides, charming villages and unforgettable
          adventures in Switzerland.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Swiss Alps Hiking</li>
            <li>Jungfraujoch Excursion</li>
            <li>Scenic Train Journeys</li>
            <li>Paragliding</li>
            <li>Skiing & Snowboarding</li>
            <li>Lake Cruises</li>
            <li>Mountain Cable Car Rides</li>
            <li>Photography Tours</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Interlaken</li>
            <li>Jungfraujoch</li>
            <li>Zurich</li>
            <li>Lucerne</li>
            <li>Geneva</li>
            <li>Zermatt</li>
            <li>Lake Geneva</li>
            <li>Mount Titlis</li>
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

export default Swiss;