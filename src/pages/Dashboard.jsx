import React from "react";
import Ourservices from "../components/Ourservices";
// import Search_info from "../components/Popular";
import Popular from "../components/Popular";
import Destination from "../components/Destination";
import Activity_tours from "../components/Activity_tours";
import Discount from "../components/Discount";
import TravelArticles from "../components/TravelArticles";
import Booking from "../components/Booking";
import Carousel from "../components/Carousel";

const Dashboard = () => {
  return (
    <div className=" overflow-hidden">
      <Carousel />
      <Ourservices />
      <Popular />
      <Destination />
      <Activity_tours />
      <Discount />
      <TravelArticles />
      <Booking />
    </div>
  );
};

export default Dashboard;
