import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function Paris() {
  const guides = [
    {
      name: "Sophie Martin",
      specialty: "Paris City Tour Expert",
      rating: "4.9",
      phone: "+33 612345678"
    },
    {
      name: "Lucas Bernard",
      specialty: "Photography Tour Guide",
      rating: "4.8",
      phone: "+33 623456789"
    },
    {
      name: "Emma Laurent",
      specialty: "Museum & Art Specialist",
      rating: "4.9",
      phone: "+33 634567890"
    },
    {
      name: "Julien Moreau",
      specialty: "Food & Café Expert",
      rating: "4.7",
      phone: "+33 645678901"
    },
    {
      name: "Claire Dubois",
      specialty: "Luxury Travel Planner",
      rating: "4.8",
      phone: "+33 656789012"
    },
    {
      name: "Antoine Petit",
      specialty: "Historical Landmarks Guide",
      rating: "4.9",
      phone: "+33 667890123"
    }
  ];

  return (
    <div
      className="guide-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <Navbar />

      <div className="guide-content">

        <h1>Paris Travel Guide</h1>

        <p className="intro">
          Discover the City of Lights, famous landmarks, world-class museums,
          romantic streets and unforgettable French culture.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Visit the Eiffel Tower</li>
            <li>Seine River Cruise</li>
            <li>Explore the Louvre Museum</li>
            <li>Photography Tours</li>
            <li>Café Hopping</li>
            <li>Luxury Shopping</li>
            <li>Street Walking Tours</li>
            <li>Night City Tour</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Eiffel Tower</li>
            <li>Louvre Museum</li>
            <li>Notre-Dame Cathedral</li>
            <li>Arc de Triomphe</li>
            <li>Champs-Élysées</li>
            <li>Montmartre</li>
            <li>Palace of Versailles</li>
            <li>Seine River</li>
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

export default Paris;