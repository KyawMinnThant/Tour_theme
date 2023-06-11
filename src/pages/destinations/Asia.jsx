import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiSupport } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaDollarSign, FaHeadphones, FaPhone, FaStar } from "react-icons/fa";

import StarRating from "../../components/StarRating";

const Asia = () => {
  const places = [
    {
      id: 1,
      link: "dubai",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_151616084-800x960.jpg",
      name: "Dubai – All Stunning Places",
      price: "1,200",
      duration: "8 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 6,
    },
    {
      id: 2,
      link: "japan",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-800x960.jpg",
      name: "Japan – 5 Days in Tokyo, Fujikawa",
      price: "1,600",
      duration: "5 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 3,
    },
    {
      id: 3,
      link: "india",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_134373716-800x960.jpg",
      name: "India – Mumbai, New Delhi",
      price: "1,600",
      duration: "5 Days 4 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 4,
      link: "thailand",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-176400-800x960.jpeg",
      name: "Thailand – 4 Days in Phuket",
      price: "1,700",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3.5,
      review: 1,
    },
    {
      id: 5,
      link: "china",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-47426-800x960.jpeg",
      name: "China – Suzhou and Zhouzhuang",
      price: "1,400",
      duration: "4 Days 3 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
  ];

  return (
    <>
      <div className=" bg-about-main bg-cover bg-center h-[160px] md:h-[410px] w-auto relative">
        <p className=" h-1 font-bold text-2xl md:text-5xl absolute top-16 left-10 md:top-64 md:left-32 text-white">
          Asia
        </p>
      </div>

      <div className=" md:grid md:grid-cols-12 md:grid-flow-row md:gap-10 pt-[70px] pb-[30px] mx-10 md:mx-0 flex flex-col justify-center items-center align-middle md:items-start">
        <div className=" md:col-start-2 md:col-span-7 ">
          {places?.map((place) => {
            return (
              <div
                key={place.id}
                className="md:grid md:grid-cols-7 min-h-[230px] max-w-[430px] md:max-w-full shadow-lg items-center align-middle mb-[30px]"
              >
                <div className=" col-start-1 col-span-7 md:col-start-1 md:col-span-2 h-auto max-w-full">
                  <img src={place.src} className=" md:h-auto cursor-pointer" />
                </div>
                <div className=" col-start-1 col-span-7 md:col-start-3 md:col-span-5 px-6 py-9">
                  <div className="flex flex-col md:grid md:grid-cols-7">
                    <div className="md:col-start-1 md:col-span-5 md:border-e-2">
                      <h2 className=" text-2xl font-bold">{place.name}</h2>

                      <p className=" flex justify-start align-middle items-center gap-2 mt-5  text-custom">
                        <HiOutlineClock className=" text-blue-300" />
                        {place.duration}
                      </p>

                      <p className=" flex justify-start align-middle items-center gap-2 mt-1  text-custom">
                        <AiTwotoneCalendar className=" text-blue-300" />
                        {place.availability}
                      </p>
                      <p className=" text mt-5 text-custom">{place.detail}</p>
                    </div>
                    <div className=" col-start-6 col-span-2 flex flex-col px-5 py-5">
                      <p className=" text-custom text-center">From</p>
                      <h2 className=" text-3xl text-center font-bold mt-1">
                        $ {place.price}
                      </h2>
                      <div className=" flex items-center justify-center mt-5">
                        <StarRating rating={place.rating} />
                      </div>
                      <p className=" text-custom text-xs text-center mt-1">
                        ({place.review} review)
                      </p>

                      <button className=" mt-5 text-white w-full text-sm bg-blue-400 px-[14px] py-[15px] text-center mx-auto">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" md:col-start-9 md:col-span-3">
          <div className=" bg-whyBookUsBg min-h-[270px] mb-12">
            <div className=" pt-9 px-7 mb-3 font-bold text-md">
              <h4>Why Book With Us?</h4>
            </div>
            <div className=" flex justify-start gap-3 items-center align-middle py-3 px-7 border-b">
              <FaDollarSign color="rgb(255 161 39)" />
              <p className="  text-custom">No-hassle best price guarantee</p>
            </div>
            <div className=" flex justify-start gap-3 items-center align-middle py-3 px-7 border-b">
              <FaHeadphones color="rgb(255 161 39)" />
              <p className="  text-custom">Customer care available 24/7</p>
            </div>
            <div className=" flex justify-start gap-3 items-center align-middle py-3 px-7 border-b">
              <FaStar color="rgb(255 161 39)" />
              <p className="  text-custom">Hand-picked Tours & Activities</p>
            </div>
            <div className=" flex justify-start gap-3 items-center align-middle py-3 px-7">
              <HiSupport color="rgb(255 161 39)" size={20} />
              <p className="  text-custom">Free Travel Insureance</p>
            </div>
          </div>
          <div
            className=" min-h-[270px] px-9 pt-10 pb-2 bg-cover"
            style={{
              backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/widget-bg.jpg)`,
            }}
          >
            <h2 className=" mb-5 text-xl font-bold text-white">
              Get a Question?
            </h2>
            <p className=" text-[#C9E2FF] text-sm font-thin mb-5">
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you.
            </p>
            <div className=" mb-5 text-[#FFCF2A] flex justify-normal align-middle items-center gap-3 text-xl font-bold">
              <FaPhone />
              <p>1.8445.3356.33</p>
            </div>

            <div className=" mb-5 text-[#FFCF2A] flex justify-normal align-middle items-center gap-3">
              <FiMail />
              <p className=" text-white">Help@goodlayers.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asia;
