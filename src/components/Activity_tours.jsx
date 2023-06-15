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
    // <div className=" mt-[150px] flex justify-around lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-[0] gap-[80px]">
    //   <div className="">
    //     <div className=" flex justify-center lg:justify-start md:justify-start items-center gap-4">
    //       <BiSliderAlt className=" text-2xl text-blue-600" />
    //       <p className=" text-3xl text-gray-800">Browse Tour By Activity</p>
    //     </div>
    //     <div className=" flex flex-col lg:flex-row md:flex-row gap-0 items-center lg:items-start lg:gap-[100px] md:gap-[50px] mt-[20px]">
    //       <div className=" flex flex-col gap-4  text-blue-600">
    //         <p>Outdoor Activities</p>
    //         <p>Cultural & Thematic Tours</p>
    //         <p>Family Friendly Tours</p>
    //         <p>Holidays & Seasonal Tours</p>
    //       </div>

    //       <div className="flex flex-col gap-4  text-blue-600">
    //         <p>City Tours</p>
    //         <p>Indulgence & Luxury Tours</p>
    //         <p>Relaxation Tours</p>
    //         <p>Wild & Adventure Tours</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" flex flex-col  gap-3">
    //     <div className=" flex gap-4 justify-center lg:justify-start md:justify-start items-center">
    //       <BiEnvelope className=" text-2xl text-blue-600" />
    //       <p className=" text-3xl text-gray-800">Newletters</p>
    //     </div>
    //     <p className=" text-gray-500 shadow-sm text-center md:text-start lg:text-start">
    //       Subscribe for updates and promotions
    //     </p>

    //     <div className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-start md:justify-start items-center  gap-3">
    //       <input
    //         type="email"
    //         className=" bg-gray-300 text-gray-600 p-4 w-[260px] md:w-[150px] lg:w-[260px] rounded-3xl border"
    //         placeholder=" Your Email Address"
    //       />
    //       <button className=" bg-blue-600 text-white font-bold p-4 w-[260px] md:w-[150px] lg:w-[260px] rounded-3xl border">
    //         Subscribe
    //       </button>
    //     </div>

    //     <div className=" flex justify-center lg:justify-start md:justify-start gap-3 mt-5 ml-3">
    //       <FaEnvelope className=" text-gray-400 text-xl" />
    //       <FaFacebookF className=" text-gray-400 text-xl" />
    //       <AiOutlineGoogle className=" text-gray-400 text-xl" />
    //       <FaLinkedinIn className=" text-gray-400 text-xl" />
    //       <FaPinterestP className=" text-gray-400 text-xl" />
    //       <FaSkype className=" text-gray-400 text-xl" />
    //       <BsTwitter className=" text-gray-400 text-xl" />

    //       <FaFlickr className=" text-gray-400 text-xl" />
    //     </div>
    //   </div>
    // </div>
    <div className=" max-w-[1180px] w-[500px] md:w-full mx-auto">
      <div className=" pt-[70px] pb-[30px] ">
        <div className=" px-[15px] mx-auto">
          <div className=" md:flex">
            <div className=" md:w-[60%]">
              <div className=" px-[20px] pb-[32px]">
                <div className=" flex items-center">
                  <BiSliderAlt className=" mr-[15px] text-[#467fe7] text-[22px]" />
                  <h3 className=" text-[24px] font-[400] text-[#383838] ">
                    Browse Tours By Activity
                  </h3>
                </div>
              </div>
              <div className=" px-[20px] pb-[30px] ">
                <div className=" md:flex">
                  <div className=" md:w-[50%]">
                    <ul>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Outdoor Activites
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Cultural & Thematic Tours
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Family Friendly Tours
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Holiday & Seasonal Tours
                      </li>
                    </ul>
                  </div>
                  <div className=" md:w-[50%]">
                    <ul>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Outdoor Activites
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Cultural & Thematic Tours
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Family Friendly Tours
                      </li>
                      <li className=" mb-[13px] text-[#84a7e8] text-[15px] font-[500] leading-[1.7]">
                        Holiday & Seasonal Tours
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-[40%]">
              <div className=" px-[20px] pb-[23px]">
                <div className=" flex items-center">
                  <BiEnvelope className=" mr-[15px] text-[#467fe7] text-[22px]" />
                  <h3 className=" text-[24px] font-[400] text-[#383838] ">
                    Newsletter
                  </h3>
                </div>
              </div>
              <div className=" px-[20px] mb-[20px]">
                <p className=" leading-[1.7]  text-[#8c8c8c]">
                  Subscribe for updates & promotions
                </p>
              </div>
              <div className=" px-[20px] pb-[25px]">
                <div className=" md:flex items-end">

                
                  <input
                    type="text"
                    className=" bg-[#F3F3F3] border py-[10px] pl-[22px] h-fit pr-[47px] w-full mr-[12px] rounded-full "
                    placeholder=" Your Email Address"
                  />
                  <button className=" bg-[#468AE7] py-[15px] px-[33px] rounded-full mt-[17px]  text-[12px] font-[600] text-white">
                    SUBSCRIBE
                  </button>
                  </div>
              </div>
              <div className=" px-[20px] pb-[30px]">
               <div className=" flex  gap-[10px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity_tours;
