import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Places from "./pages/Places";
import Booking from "./pages/Booking";

import Maldives from "./pages/Maldives";
import Paris from "./pages/Paris";
import Dubai from "./pages/Dubai";
import Bali from "./pages/Bali";
import Swiss from "./pages/Swiss";
import NewYork from "./pages/NewYork";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/booking" element={<Booking />} />

        {/* Destination Guide Pages */}
        <Route path="/maldives" element={<Maldives />} />
        <Route path="/paris" element={<Paris />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/swiss" element={<Swiss />} />
        <Route path="/newyork" element={<NewYork />} />

      </Routes>
    </HashRouter>
  );
}

export default App;