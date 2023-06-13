import React, { useState } from "react";
import bgImage from "../assets/section-bg-4.jpg";
import WOW from "wow.js";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaGooglePlusG,
  FaSkype,
  FaTwitter,
  FaLocationArrow,
} from "react-icons/fa";
import {IoIosArrowUp} from "react-icons/io"
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import "animate.css";

const wowjs = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wowjs.init();

const Contact = () => {
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
    <>
      <div
        className=" h-[1349px] bg-cover bg-no-repeat bg-center  "
        style={{ backgroundImage: `url(${bgImage})`, height: 606.75 }}
      >
        <div
          id="one"
          className="flex h-full  items-center w-[450px] md:w-full px-[15px] max-w-[1180px] mx-auto"
        >
          <div className="  flex animate__duration-slow animate__backInUp animate__animated  flex-col leading-extra-loose  ">
            <h1 className=" mx-[15px]  text-white     text-[75px] font-bold tracking-wide ">
              Contact Us
            </h1>
            <p className=" mx-[15px] mt-[25px]  text-[#fff] italic     text-[25px]  tracking-wide ">
              Get Intouch
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-[60px] pb-[30px] ">
        <div className="w-[470px] md:w-full max-w-[1150px] px-[15px] md:flex mx-auto">
          <div className="  wow animate__fadeInUp  w-full md:w-[33.3333%] pt-[50px] px-[20px] shadow-sm md:shadow-md">
            <div className=" px-[20px] pb-[55px] text-[#454545] text-[40px]">
              <FaPhoneAlt className=" w-[40px] h-[40px]" />
            </div>
            <div className=" px-[20px] pb-[25px] text-[24px] text-[#383838] font-[800]">
              Phone
            </div>
            <div className=" px-[20px]">
              <p className=" text-[#8c8c8c]">
                A wonderful serenity has taken possession of my entire soul,
                like these.
              </p>
            </div>
            <div className=" mt-[20px] px-[20px] pb-[30px]">
              <p className=" text-[#84a7e8]">+1-2345-2345</p>
            </div>
          </div>
          <div className=" animate__delay-2000s wow animate__fadeInDown   w-full md:w-[33.3333%] pt-[50px] px-[20px] shadow-sm md:shadow-md">
            <div className=" px-[20px] pb-[55px] text-[#454545]  text-[40px]">
              <CiMail className=" w-[50px] h-[50px]" />
            </div>
            <div className=" px-[20px] pb-[25px] text-[24px] text-[#383838] font-[800]">
              Email
            </div>
            <div className=" px-[20px]">
              <p className=" text-[#8c8c8c]">
                A wonderful serenity has taken possession of my entire soul,
                like these.
              </p>
            </div>
            <div className=" mt-[20px] px-[20px] pb-[30px]">
              <p className=" text-[#84a7e8]">Contact@goodlayers.com</p>
            </div>
          </div>
          <div className=" animate__delay-4000s duration-500 wow animate__fadeInUp   w-full md:w-[33.3333%] pt-[50px] px-[20px] shadow-sm md:shadow-md">
            <div className=" px-[20px] pb-[55px] text-[#454545] text-[40px]">
              <FaLocationArrow className=" w-[40px] h-[40px]" />
            </div>
            <div className=" px-[20px] pb-[25px] text-[24px] text-[#383838] font-[800]">
              Location
            </div>
            <div className=" px-[20px]">
              <p className=" text-[#8c8c8c]">
                4 apt. Flawing Street. The Grand Avenue.{" "}
                <p> Liverpool, UK 33342</p>
              </p>
            </div>
            <div className=" mt-[20px] px-[20px] pb-[30px]">
              <p className=" text-[#84a7e8]">View On Google Map</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F3F3F3] pt-[95px] pb-[90px] ">
        <div className=" w-[470px] md:w-full max-w-[1150px] pb-[30px] px-[15px] mx-auto">
          <div className=" w-full">
            <div className=" max-w-[760px] mx-auto">
              <div className=" px-[20px] pb-[30px]">
                <div className=" flex flex-col gap-3  text-center">
                  <h1 className=" text-[32px] font-[800] text-[#3a3a3a]">
                    Leave us your info
                  </h1>
                  <p className=" text-[19px] text-[#727272]">
                    and we will get back to you
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[50px] max-w-[760px] mx-auto px-[20px]">
            <div className=" md:flex justify-between">
              <input
                className="w-full md:w-[49%] px-[22px] py-[22px] mb-[14px]"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="w-full md:w-[49%] px-[22px] py-[22px] mb-[14px]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className=" px-[22px] py-[15px] w-full mb-[14px]"
                type="text"
                placeholder="subject"
              />
            </div>
            <div className=" mb-[15px]">
              <textarea
                className=" w-full py-[18px] px-[22px] h-[120px] "
                cols="40"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className=" mb-[15px]">
              <button className=" w-full py-[15px] bg-[#468AE7] text-white text-[13px] font-[700] ">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[470px] md:w-full mx-auto ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61107.062426404234!2d96.2279222!3d16.8168582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c192d33b83bce5%3A0x7e1eb65b03467802!2sThuwanna%20park!5e0!3m2!1sen!2smm!4v1686325968827!5m2!1sen!2smm"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-[470px] md:w-full max-w-[1150px] mt-[80px] px-[15px] mx-auto mb-[50px]">
        <div className=" w-full">
          <div className=" max-w-[760px] mx-auto">
            <div className=" flex justify-center gap-10">
              <IoMdMail className=" text-[20px]" />
              <FaFacebookF className=" text-[20px]" />
              <FaGooglePlusG className=" text-[20px]" />
              <FaSkype className=" text-[20px]" />
              <FaTwitter className=" text-[20px]" />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#one"
        className={up ? " z-[200] fixed bottom-[30px] right-[30px]" : "hidden"}
      >
        <button className=" w-[40px] h-[40px] bg-[#DBDBDB] text-[#4B92E4] hover:transform hover:translate-y-[-5px] duration-300 flex justify-center items-center rounded-full">
          <IoIosArrowUp />
        </button>
      </a>
    </>
  );
};

export default Contact;
