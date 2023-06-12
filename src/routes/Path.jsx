import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Service from "../pages/Service";

// Destinations
import Destinations from "../pages/Destinations";
import Africa from "../pages/destinations/Africa";
import America from "../pages/destinations/America";
import Asia from "../pages/destinations/Asia";
import EasternEurope from "../pages/destinations/EasternEurope";
import Europe from "../pages/destinations/Europe";
import SouthAmerica from "../pages/destinations/SouthAmerica";
import TourList from "../pages/TourList";

const Path = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tour-list" element={<TourList />} />

        {/* destinations */}
        <Route path="/tour-destination/africa" element={<Africa />} />
        <Route path="/tour-destination/america" element={<America />} />
        <Route path="/tour-destination/asia" element={<Asia />} />
        <Route
          path="/tour-destination/easternEurope"
          element={<EasternEurope />}
        />
        <Route path="/tour-destination/europe" element={<Europe />} />
        <Route
          path="/tour-destination/southAmerica"
          element={<SouthAmerica />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Path;
