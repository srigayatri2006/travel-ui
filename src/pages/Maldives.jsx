import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function Maldives() {
  const guides = [
    {
      name: "Ahmed Hassan",
      specialty: "Luxury Resort Specialist",
      rating: "4.9",
      phone: "+960 987654321"
    },
    {
      name: "Rahim Ali",
      specialty: "Adventure Tour Guide",
      rating: "4.8",
      phone: "+960 912345678"
    },
    {
      name: "Shifa Noor",
      specialty: "Photography Expert",
      rating: "4.7",
      phone: "+960 923456789"
    },
    {
      name: "Faisal Ibrahim",
      specialty: "Island Explorer",
      rating: "4.9",
      phone: "+960 934567890"
    },
    {
      name: "Sarah Khan",
      specialty: "Vacation Planner",
      rating: "4.8",
      phone: "+960 945678901"
    },
    {
      name: "Daniel Joseph",
      specialty: "Family Tour Specialist",
      rating: "4.7",
      phone: "+960 956789012"
    }
  ];

  return (
    <div className="guide-page">

      <Navbar />

      <div className="guide-content">

        <h1>Maldives Travel Guide</h1>

        <p className="intro">
          Discover crystal-clear waters, luxury resorts, coral reefs,
          and unforgettable island adventures in the Maldives.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Scuba Diving</li>
            <li>Snorkeling</li>
            <li>Island Hopping</li>
            <li>Sunset Cruise</li>
            <li>Dolphin Watching</li>
            <li>Jet Ski Adventure</li>
            <li>Luxury Water Villa Stay</li>
            <li>Parasailing</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Male City</li>
            <li>Vaadhoo Island</li>
            <li>Maafushi Island</li>
            <li>Banana Reef</li>
            <li>Sun Island</li>
            <li>Baa Atoll</li>
            <li>Hulhumale Beach</li>
            <li>Alimatha Island</li>
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

export default Maldives;