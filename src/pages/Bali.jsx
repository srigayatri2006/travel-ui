import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Guide.css";

function Bali() {
  const guides = [
    {
      name: "Made Putra",
      specialty: "Temple & Culture Guide",
      rating: "4.9",
      phone: "+62 81234567890"
    },
    {
      name: "Wayan Sari",
      specialty: "Adventure Tour Expert",
      rating: "4.8",
      phone: "+62 81345678901"
    },
    {
      name: "Ketut Dewi",
      specialty: "Photography Specialist",
      rating: "4.9",
      phone: "+62 81456789012"
    },
    {
      name: "Nyoman Agus",
      specialty: "Beach & Water Sports Guide",
      rating: "4.7",
      phone: "+62 81567890123"
    },
    {
      name: "Komang Putri",
      specialty: "Family Vacation Planner",
      rating: "4.8",
      phone: "+62 81678901234"
    },
    {
      name: "Gede Santoso",
      specialty: "Nature & Trekking Guide",
      rating: "4.9",
      phone: "+62 81789012345"
    }
  ];

  return (
    <div
      className="guide-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <Navbar />

      <div className="guide-content">

        <h1>Bali Travel Guide</h1>

        <p className="intro">
          Discover tropical beaches, stunning temples, lush rice terraces,
          waterfalls, adventure activities and the rich culture of Bali.
        </p>

        <section className="section">

          <h2>Top Activities</h2>

          <ul>
            <li>Surfing at Kuta Beach</li>
            <li>Visit Uluwatu Temple</li>
            <li>Snorkeling and Scuba Diving</li>
            <li>Explore Rice Terraces</li>
            <li>Waterfall Trekking</li>
            <li>ATV Adventure Tours</li>
            <li>Traditional Balinese Dance Shows</li>
            <li>Sunset Beach Experience</li>
          </ul>

        </section>

        <section className="section">

          <h2>Best Places To Visit</h2>

          <ul>
            <li>Uluwatu Temple</li>
            <li>Tanah Lot Temple</li>
            <li>Kuta Beach</li>
            <li>Seminyak Beach</li>
            <li>Ubud Monkey Forest</li>
            <li>Tegallalang Rice Terrace</li>
            <li>Mount Batur</li>
            <li>Sekumpul Waterfall</li>
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

export default Bali;