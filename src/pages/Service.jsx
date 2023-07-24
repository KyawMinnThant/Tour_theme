import React, { useRef, useState } from "react";
import bgImage from "../assets/section-bg-4.jpg";
import { FaRegLightbulb, FaRegCreditCard } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Parallax } from "react-parallax";

const cards = [
  {
    icon: <FaRegLightbulb size={40} className=" text-white" />,
    title: "Clever System",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
  {
    icon: <RiDownloadCloud2Line size={40} className=" text-white" />,
    title: "Google Fonts",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
  {
    icon: <FaRegCreditCard size={40} className=" text-white" />,
    title: "Credit Cards",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
  {
    icon: <CiClock2 size={40} className=" text-white" />,
    title: "Greate Timing",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
  {
    icon: <AiOutlinePieChart size={40} className=" text-white" />,
    title: "Smart Diversification",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
  {
    icon: <SlLocationPin size={40} className=" text-white" />,
    title: "We Are Everywhere",
    desc: "On her way she met a copy. The copy warn ed the Little Blind Text, that where it came from it would have been.",
    ani: " wow animate__fadeInUp",
  },
];

const Service = () => {
  return (
    <div className=" ">
      {/* <div className=" bg-about-main bg-cover bg-center h-[200px] md:h-[499px] w-auto relative">
        <div className=" md:w-full max-w-[500px]  h-full  flex flex-col justify-center  md:max-w-[1180px] mx-auto px-[30px]">
          <p className=" h-1 font-bold text-3xl md:text-6xl  text-white">
            Services We Provide
          </p>
          <p className=" h-1 font-bold text-lg md:text-2xl  text-white">
            A small river named Duden flows by their place.
          </p>
        </div>
      </div> */}
      <div
        className=" h-[342.19px] md:h-[350.39px] lg:h-[448.38px] bg-cover  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="one"
          className="flex h-full  items-center max-w-[450px] md:w-full px-[15px] md:max-w-[1180px] mx-auto"
        >
          <div className="  flex  flex-col lg:mt-[10%] leading-extra-loose  animate__backInLeft animate__animated">
            <h1 className=" mx-[15px]  text-white     text-[40px] md:text-[70px] font-[800] tracking-wide ">
              Services We Provide
            </h1>
            <p className=" mx-[15px] mt-[13px] italic text-[#999999]  text-[21px]  tracking-wide ">
              A small river named Duden flows by their place.
            </p>
          </div>
        </div>
      </div>
      {/* md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto mb-[50px] mt-10 px-[30px] */}
      {/* */}
      <div className=" ">
        <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative ">
          <Parallax
            bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_210601591.jpg"
            strength={200}
          >
            <div className="w-full  md:h-[925px] lg:h-[900.238px]"></div>
          </Parallax>
          <div className="  max-w-[600px] my-auto px-[30px] ">
            <div className="wow animate__fadeInRight">
              <p className=" text-lg font-normal text-gray-500 mb-5">
                Our Story
              </p>
              <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
                A Little About Us
              </p>
              <p className=" text-xl text-slate-500 mt-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents.
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <div className="  max-w-[600px] my-auto px-[30px] ml-auto ">
            <div className="wow animate__fadeInLeft">
              <p className=" text-lg font-normal text-gray-500 mb-5">
                Philosophy
              </p>
              <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
                Our Top Missions
              </p>
              <p className=" text-xl text-slate-500 mt-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents.
              </p>
            </div>
          </div>

          <Parallax
            bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_220323652.jpg"
            strength={200}
          >
            <div className="w-full  md:h-[925px] lg:h-[900.238px]"></div>
          </Parallax>
        </div>

        <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <Parallax
            bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218.jpg"
            strength={200}
          >
            <div className="w-full  md:h-[925px] lg:h-[900.238px]"></div>
          </Parallax>
          <div className="  max-w-[600px] my-auto px-[30px] ">
            <div className="wow animate__fadeInRight">
              <p className=" text-lg font-normal text-gray-500 mb-5">
                Strategy
              </p>
              <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
                We Provide Solutions
              </p>
              <p className=" text-xl text-slate-500 mt-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/section-bg-3.jpg')",
        }}
        className="h-auto w-full bg-center bg-cover bg-fixed"
      >
        <div className=" px-[30px] md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto py-20 grid md:grid-cols-3 gap-[30px]">
          {cards?.map((card, index) => {
            return (
              <div key={index} className={`  py-5 ${card?.ani}`}>
                {card?.icon}
                <p className=" text-white text-2xl font-bold py-5">
                  {card?.title}
                </p>
                <p className=" text-white text-lg font-normal">{card?.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto mb-[50px] mt-10 px-[30px]">
        <div className=" grid grid-cols-1 md:grid-cols-2 py-10 ">
          <div className=" wow animate__fadeInLeft">
            <p className=" text-3xl text-gray-800 font-bold pb-3">
              Interested in our services now?
            </p>
            <p className=" text-lg text-gray-600 font-normal">
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
          </div>
          <div className=" flex items-end justify-center md:justify-end">
            <button className="w-[150px] h-[50px] mt-5 md:mt-0 border border-gray-300 rounded-full px-6 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
