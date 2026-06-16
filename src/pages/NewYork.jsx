import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function NewYork() {
  const guides = [
    {
      name: "Michael Johnson",
      specialty: "New York City Expert",
      rating: "4.9",
      phone: "+1 2125551001"
    },
    {
      name: "Emily Brown",
      specialty: "Food & Culture Guide",
      rating: "4.8",
      phone: "+1 2125551002"
    },
    {
      name: "David Miller",
      specialty: "Photography Tour Specialist",
      rating: "4.9",
      phone: "+1 2125551003"
    },
    {
      name: "Sophia Wilson",
      specialty: "Family Travel Planner",
      rating: "4.7",
      phone: "+1 2125551004"
    },
    {
      name: "James Anderson",
      specialty: "Historical Landmarks Guide",
      rating: "4.8",
      phone: "+1 2125551005"
    },
    {
      name: "Olivia Taylor",
      specialty: "Luxury City Tour Expert",
      rating: "4.9",
      phone: "+1 2125551006"
    }
  ];

  return (
    <div
      className="guide-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <Navbar />

      <div className="guide-content">

        <h1>New York Travel Guide</h1>

        <p className="intro">
          Experience the energy of New York City with iconic landmarks,
          world-famous attractions, shopping, entertainment and unforgettable city life.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Visit Times Square</li>
            <li>Statue of Liberty Tour</li>
            <li>Broadway Shows</li>
            <li>Central Park Cycling</li>
            <li>Empire State Building Visit</li>
            <li>Brooklyn Bridge Walk</li>
            <li>Fifth Avenue Shopping</li>
            <li>Night City Tour</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Times Square</li>
            <li>Statue of Liberty</li>
            <li>Central Park</li>
            <li>Empire State Building</li>
            <li>Brooklyn Bridge</li>
            <li>One World Observatory</li>
            <li>Fifth Avenue</li>
            <li>Rockefeller Center</li>
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

export default NewYork;