
import React, { useRef, useState } from "react";

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
    <>
      <div className=" bg-about-main bg-cover bg-center h-[200px] md:h-[499px] w-auto relative">
        <p className=" h-1 font-bold text-3xl md:text-6xl absolute top-16 left-10 md:top-64 md:left-32 text-white">
          Services We Provide
        </p>
        <p className=" h-1 font-bold text-lg md:text-2xl absolute top-28 left-10 md:top-80 md:left-32 text-white">
          A small river named Duden flows by their place.
        </p>
      </div>


      <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative">
        <Parallax
          bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_210601591.jpg"
          strength={200}
        >
          <div className="w-full h-[360px] md:h-[925px] lg:h-[900.238px]"></div>
        </Parallax>
        <div className=" px-10 md:px-20 pt-20 pb-10 md:pb-0 bg-about-pair">
          <div className="wow animate__fadeInRight">
            <p className=" text-lg font-normal text-gray-500 mb-5">Our Story</p>
            <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
              A Little About Us
            </p>
            <p className=" text-xl text-slate-500 py-8">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <div className=" px-10 md:px-20 pt-20 pb-10 md:pb-0 bg-about-pair">
          <div className="wow animate__fadeInLeft">
            <p className=" text-lg font-normal text-gray-500 mb-5">
              Philosophy
            </p>
            <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
              Our Top Missions

            </p>
            <p className=" text-xl text-slate-500 py-8">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
          </div>
        </div>

        <Parallax
          bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_220323652.jpg"
          strength={200}
        >
          <div className="w-full h-[360px] md:h-[925px] lg:h-[900.238px]"></div>
        </Parallax>
      </div>

      <div className=" lg:h-[500.238px] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Parallax
          bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218.jpg"
          strength={200}
        >
          <div className="w-full h-[360px] md:h-[925px] lg:h-[900.238px]"></div>
        </Parallax>
        <div className=" px-10 md:px-20 pt-20 pb-10 md:pb-0 bg-about-pair">
          <div className="wow animate__fadeInRight">
            <p className=" text-lg font-normal text-gray-500 mb-5">Strategy</p>
            <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
              We Provide Solutions

            </p>
            <p className=" text-xl text-slate-500 py-8">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
          </div>
        </div>

      </div>

      <div className="h-auto bg-service-middle bg-center bg-cover bg-fixed">
        <div className=" px-20 py-20 flex flex-wrap gap-5">
          {cards?.map((card, index) => {
            return (
              <div key={index} className={` w-[380px] py-5 ${card?.ani}`}>
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

      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 py-10 px-16">
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
    </>
  );
};

export default Service;
