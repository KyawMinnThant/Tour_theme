import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Service from "../pages/Service";

const Path = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Path;
