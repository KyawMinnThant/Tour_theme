import  React,{ useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Searchmodal from "../components/Searchmodal";

const Path = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" relative">
      {modal === true && (
        <Searchmodal modal={modal} setModal={setModal} className=" " />
      )}
      <Navbar modal={modal} setModal={setModal} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Path;
