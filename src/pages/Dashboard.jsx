import React, { useState } from "react";
import Ourservices from "../components/Ourservices";
// import Search_info from "../components/Popular";
import Popular from "../components/Popular";
import Destinations from "../components/Destinations";
import Activity_tours from "../components/Activity_tours";
import Discount from "../components/Discount";
import TravelArticles from "../components/TravelArticles";
import Booking from "../components/Booking";
import Carousel from "../components/Carousel";
import Test from "../components/Test";
import { IoIosArrowUp } from "react-icons/io";

const Dashboard = () => {
  const [up, setUp] = useState(false);

  const h75 =
    0.1 * (document.body.getBoundingClientRect().height - window.innerHeight);
  window.addEventListener("scroll", () => {
    if (window.scrollY > h75) {
      setUp(true);
    } else {
      setUp(false);
    }
  });
  return (
    <div id="one">
      {/* <Carousel /> */}
      <Test />
      <Ourservices />
      <Popular />
      <Destinations />
      <Activity_tours />
      <Discount />
      <TravelArticles />
      <Booking />
      <a
        href="#one"
        className={up ? " z-[200] fixed bottom-[30px] right-[30px]" : "hidden"}
      >
        <button className=" w-[40px] h-[40px] bg-[#DBDBDB] text-[#4B92E4] hover:transform hover:translate-y-[-5px] duration-300 flex justify-center items-center rounded-full">
          <IoIosArrowUp />
        </button>
      </a>
    </div>
  );
};

export default Dashboard;
