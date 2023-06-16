import React from "react";
import { AiOutlineClockCircle, AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { Menu, Button, Text } from "@mantine/core";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";

import "swiper/css";
const Popular = () => {
  return (
    <div
      className=" bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/search-bg.jpg)`,
      }}
    >
      {/* <img
        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/search-bg.jpg"
        alt=""
        className=" relative w-full h-[1600px] object-cover md:h-[700px] lg:h-[900px]"
      /> */}
      <div className=" w-full  bg-[#292C33] opacity-60">
        <div className=" max-w-[1180px]  mx-auto px-[15px] md:py-[30px]">
          <div className=" w-[450px] px-[20px] pt-[50px] pb-[10px] md:w-full md:flex  mx-auto items-end  justify-between md:px-[18px] ">
            <div className=" md:w-[15%] mb-[20px] md:mb-0">
              <p className=" text-white mb-[10px] text-[13px] font-[800]">
                Keywords
              </p>
              <input
                type="text"
                className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B]"
              />
            </div>
            <div className=" md:w-[15%] mb-[20px] md:mb-0  ">
              <p className=" text-white mb-[10px] text-[13px] font-[800]">
                Keywords
              </p>

              <select
                defaultValue=""
                name=" select_activity"
                className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
              >
                <option className=" overflow-hidden w-[10%]" value="Any">
                  Any
                </option>
                <option className=" overflow-hidden w-[10%]" value="City Tours">
                  City Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Cultural and Thematic Tours"
                >
                  Cultural and Thematic Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Family Friendly Tours"
                >
                  Family Friendly Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Holiday & Seasonal Tours"
                >
                  Holiday & Seasonal Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Indulgence & Luxury Tours"
                >
                  Indulgence & Luxury Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Outdoor Activities"
                >
                  Outdoor Activities
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Relaxation Tours"
                >
                  Relaxation Tours
                </option>
                <option
                  className=" overflow-hidden w-[10%]"
                  value="Wild & Adventure Tours"
                >
                  Wild & Adventure Tours
                </option>
              </select>
            </div>

            <div className=" md:w-[15%] mb-[20px] md:mb-0 ">
              <p className=" text-white mb-[10px] text-[13px] font-[800]">
                Keywords
              </p>

              <select
                className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
                defaultValue={""}
                name=" select_Destinations"
                id=""
              >
                <option value="Any">Any</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="Europe">Europe</option>
                <option value="South America">South America</option>
              </select>
            </div>
            <div className=" md:w-[15%] mb-[20px] md:mb-0">
              <p className=" text-white mb-[10px] text-[13px] font-[800]">
                Keywords
              </p>

              <select
                defaultValue={""}
                name=" select_durations"
                id=""
                className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
              >
                <option value="Any">Any</option>
                <option value="1-day-Tour">1 day Tour</option>
                <option value="2-4-days-Tour">2-4 days Tour</option>
                <option value="5-7-days-Tour">5-7 days Tour</option>
                <option value="7+-days-Tour">7 + days Tour</option>
              </select>
            </div>
            <div className=" md:w-[15%] mb-[20px] md:mb-0">
              <p className=" text-white mb-[10px] text-[13px] font-[800]">
                Keywords
              </p>

              <input
                type="date"
                className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
              />
            </div>
            <div className=" md:w-[15%] mb-[20px] md:mb-0">
              <button className="  w-full py-[13px] px-[20px] mt-[32px] md:mt-0 text-white font-bold bg-[#388aee] ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col md:flex-row lg:flex-row gap-5 justify-center bg-black p-10 opacity-60 items-center absolute top-[0px] left-0 right-0 z-50">
      <div className=" flex flex-col gap-3 ">
          <p className=" text-white font-bold ">Keywords</p>
          <input
            type="text"
            placeholder="Keywords"
            className=" bg-[#585d6b] w-[200px] md:w-[100px] lg:w-full  outline-none text-[#b9c1d5] p-4 shadow-md
          "
          />
        </div>

        <div className=" flex flex-col gap-3 ">
          <p className=" text-white font-bold">Activity</p>
          <select
            defaultValue=""
            name=" select_activity"
            id=""
            className=" bg-[#585d6b] w-[200px] md:w-[100px] lg:w-full outline-none text-[#b9c1d5] p-4 shadow-md"
          >
            <option value="Any">Any</option>
            <option value="City Tours">City Tours</option>
            <option value="Cultural and Thematic Tours">
              Cultural and Thematic Tours
            </option>
            <option value="Family Friendly Tours">Family Friendly Tours</option>
            <option value="Holiday & Seasonal Tours">
              Holiday & Seasonal Tours
            </option>
            <option value="Indulgence & Luxury Tours">
              Indulgence & Luxury Tours
            </option>
            <option value="Outdoor Activities">Outdoor Activities</option>
            <option value="Relaxation Tours">Relaxation Tours</option>
            <option value="Wild & Adventure Tours">
              Wild & Adventure Tours
            </option>
          </select>
        </div>

        <div className=" flex flex-col gap-3 ">
          <p className=" text-white font-bold">Destinations</p>
          <select
            defaultValue={""}
            name=" select_Destinations"
            id=""
            className=" bg-[#585d6b] outline-none text-[#b9c1d5] w-[200px] md:w-[100px] lg:w-full p-4 shadow-md"
          >
            <option value="Any">Any</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
          </select>
        </div>

        <div className=" flex flex-col gap-3 ">
          <p className=" text-white font-bold">Durations</p>
          <select
            defaultValue={""}
            name=" select_durations"
            id=""
            className=" bg-[#585d6b] outline-none text-[#b9c1d5] w-[200px] md:w-[100px] lg:w-full p-4 shadow-md"
          >
            <option value="Any">Any</option>
            <option value="1-day-Tour">1 day Tour</option>
            <option value="2-4-days-Tour">2-4 days Tour</option>
            <option value="5-7-days-Tour">5-7 days Tour</option>
            <option value="7+-days-Tour">7 + days Tour</option>
          </select>
        </div>

        <div className=" flex flex-col gap-3 ">
          <p className=" text-white font-bold">Date</p>
          <input
            type="date"
            className=" bg-[#585d6b] outline-none w-[200px] md:w-[100px] lg:w-full text-[#b9c1d5] p-4 shadow-md
          "
          />
        </div>

        <button className=" py-4 px-6 mt-8 w-[200px] lg:w-[200px] md:w-[100px] text-white font-bold bg-[#388aee] ">
          {" "}
          Search
        </button>
      </div> */}
      <div className="  container mx-auto py-20">
        <div className=" px-5 pb-14">
          <div className=" flex flex-row md:flex-row md:items-center md:align-middle lg:flex-row gap-3 items-start lg:items-center">
            <p className=" text-2xl lg:text-2xl md:text2xl text-white">
              Popular Tour Packages
            </p>
            <p>/</p>
            <Link to={"/tour-list"}>
              <p className=" text-[#8ed1fc] lg:mt-0 text-xl lg:text-2xl md:text2xl">
                View All Tours
              </p>
            </Link>
          </div>
        </div>{" "}
        <div className=" px-5 max-h-[600px] w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={80}
            loop={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                centeredSlides: true,
                slidesPerView: 1,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
              // when window width is >= 1440px

              1440: {
                slidesPerView: 3,
              },
            }}
            navigation
            autoplay={{
              reverseDirection: false,
              waitForTransition: true,
              loop: "infinite",
              speed: 5000,
              delay: 3000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              pauseOnMouseEnter: true,
            }}
            fadeEffect={{
              crossFade: true,
            }}
            // pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className=" transition-all "
          >
            <div className=" flex w-full">
              <SwiperSlide>
                <div className=" shadow-md bg-white md:w-auto md:h-[600px] lg:w-[350px] lg:h-[410px] ">
                  <div className="">
                    <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-700x450.jpg" />
                  </div>
                  <div className=" px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className=" text-gray-800 text-lg font-bold ">
                        Africa-Amazing African Safari
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400">From</p>
                        <p className=" text-blue-500 text-xl font-bold">$100</p>
                      </div>
                    </div>
                    <div className=" flex items-center align-middle mt-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">5 Hours</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_151616084-700x450.jpg" />
                  <div className=" px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className=" text-gray-800 text-lg font-bold ">
                        Dubai-All-Stunning Places
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400">From</p>
                        <p className=" text-blue-500 text-xl font-bold">
                          $1200
                        </p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">8 Hours</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <FaStarHalfAlt color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(6 reviews)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_178807262-700x450.jpg" />
                  <div className=" px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className=" text-gray-800 text-lg font-bold ">
                        Switzerland – 7 Days in Zurich, Zermatt
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400 line-through">$4,300</p>
                        <p className=" text-blue-500 text-xl font-bold">
                          $3500
                        </p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">7 days</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(4 reviews)</p>
                    </div>
                  </div>
                  <div className="absolute top-4 w-[100px] left-[-10px] shadow-md flex justify-center bg-[#e85e34] py-2 px-3">
                    <p className=" text-white font-bold text-sm">20% off</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_245507692-700x450.jpg" />
                  <div className="px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className="text-gray-800 text-lg font-bold ">
                        Enquiry Form Only – Italy – 6 Days
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400 line-through">$3,700</p>
                        <p className=" text-blue-500 text-xl font-bold">
                          $2000
                        </p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">7 Days</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <FaStarHalfAlt color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(1 reviews)</p>
                    </div>
                  </div>
                  <div className="absolute top-4 w-[100px] left-[-10px] shadow-md flex justify-center bg-[#e85e34] py-2 px-3">
                    <p className=" text-white font-bold text-sm">20% off</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33-700x450.jpg" />
                  <div className="px-6 pt-8 pb-2">
                    <div className="flex justify-between">
                      <p className="text-gray-800 text-lg font-bold ">
                        America – 2 Days in Lake Tahoe
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400">From</p>
                        <p className=" text-blue-500 text-xl font-bold">$300</p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">2 days</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <FaStarHalfAlt color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(1 reviews)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-700x450.jpg" />
                  <div className="px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className=" text-gray-800 text-lg font-bold ">
                        Japan – 5 Days in Tokyo, Fujikawa
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400">From</p>
                        <p className=" text-blue-500 text-xl font-bold">
                          $1600
                        </p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">5 days</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <FaStarHalfAlt color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(3 reviews)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="shadow-md bg-white md:w-auto md:h-auto lg:w-[350px] lg:h-[410px]">
                  <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_136984760-700x450.jpg" />
                  <div className=" px-6 pt-8 pb-2">
                    <div className=" flex justify-between">
                      <p className=" text-gray-800 text-lg font-bold ">
                        PAIS – EIFFEL TOWER, NOTRE DAME CATH..
                      </p>
                      <div className=" flex flex-col ">
                        <p className=" text-gray-400">From</p>
                        <p className=" text-blue-500 text-xl font-bold">$800</p>
                      </div>
                    </div>
                    <div className=" flex align-middle items-center my-2">
                      <AiOutlineClockCircle className=" text-blue-700 text-lg me-2" />
                      <p className=" text-gray-500">5 days</p>
                    </div>
                    <div className=" flex items-center mb-8">
                      <div className=" flex flex-nowrap">
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <AiFillStar color="#ffc107" />
                        <FaStarHalfAlt color="#ffc107" />
                      </div>

                      <p className=" ms-[6px]">(3 reviews)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;
