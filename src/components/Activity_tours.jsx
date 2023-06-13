import React from "react";
import { BiSliderAlt, BiEnvelope } from "react-icons/bi";
import {
  FaEnvelope,
  FaFlickr,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaSkype,
} from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { BsTwitter } from "react-icons/bs";
const Activity_tours = () => {
  return (
    <div className=" mt-[150px] flex justify-around lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-[0] gap-[80px]">
      <div className="">
        <div className=" flex justify-center lg:justify-start md:justify-start items-center gap-4">
          <BiSliderAlt className=" text-2xl text-blue-600" />
          <p className=" text-3xl text-gray-800">Browse Tour By Activity</p>
        </div>
        <div className=" flex flex-col lg:flex-row md:flex-row gap-0 items-center lg:items-start lg:gap-[100px] md:gap-[50px] mt-[20px]">
          <div className=" flex flex-col gap-4  text-blue-600">
            <p>Outdoor Activities</p>
            <p>Cultural & Thematic Tours</p>
            <p>Family Friendly Tours</p>
            <p>Holidays & Seasonal Tours</p>
          </div>

          <div className="flex flex-col gap-4  text-blue-600">
            <p>City Tours</p>
            <p>Indulgence & Luxury Tours</p>
            <p>Relaxation Tours</p>
            <p>Wild & Adventure Tours</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  gap-3">
        <div className=" flex gap-4 justify-center lg:justify-start md:justify-start items-center">
          <BiEnvelope className=" text-2xl text-blue-600" />
          <p className=" text-3xl text-gray-800">Newletters</p>
        </div>
        <p className=" text-gray-500 shadow-sm text-center md:text-start lg:text-start">
          Subscribe for updates and promotions
        </p>

        <div className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-start md:justify-start items-center  gap-3">
          <input
            type="email"
            className=" bg-gray-300 text-gray-600 p-4 w-[260px] md:w-[150px] lg:w-[260px] rounded-3xl border"
            placeholder=" Your Email Address"
          />
          <button className=" bg-blue-600 text-white font-bold p-4 w-[260px] md:w-[150px] lg:w-[260px] rounded-3xl border">
            Subscribe
          </button>
        </div>

        <div className=" flex justify-center lg:justify-start md:justify-start gap-3 mt-5 ml-3">
          <FaEnvelope className=" text-gray-400 text-xl" />
          <FaFacebookF className=" text-gray-400 text-xl" />
          <AiOutlineGoogle className=" text-gray-400 text-xl" />
          <FaLinkedinIn className=" text-gray-400 text-xl" />
          <FaPinterestP className=" text-gray-400 text-xl" />
          <FaSkype className=" text-gray-400 text-xl" />
          <BsTwitter className=" text-gray-400 text-xl" />

          <FaFlickr className=" text-gray-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Activity_tours;
