import React from "react";
import Ourservices from "../components/Ourservices";
// import Search_info from "../components/Popular";
import Popular from "../components/Popular";
import Destinations from "../components/Destinations";
import Activity_tours from "../components/Activity_tours";
import Discount from "../components/Discount";
import TravelArticles from "../components/TravelArticles";
import Booking from "../components/Booking";

const Dashboard = () => {
  return (
    <div className=" overflow-hidden">
      <Ourservices />
      <Popular />
      <Destinations />
      <Activity_tours />
      <Discount />
      <TravelArticles />
      <Booking />
    </div>
  );
};

export default Dashboard;
