import React from "react";
import { AiOutlineClockCircle, AiFillStar } from "react-icons/ai";
import { FaFilm } from "react-icons/fa";

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
    <div className=" relative">
      <img
        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/search-bg.jpg"
        alt=""
        className=" relative w-full h-[1500px] object-cover md:h-[900px] lg:h-[900px]"
      />
      <div className=" flex flex-col md:flex-row lg:flex-row gap-5 justify-center bg-black p-10 opacity-60 items-center absolute top-[0px] left-0 right-0 z-50">
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
      </div>
      <div className="absolute lg:top-[250px] md:top-[220px] top-[790px] left-[40px] lg:left-[50px] md:left-[50px]">
        <div className=" flex flex-row md:flex-row md:items-center md:align-middle lg:flex-row gap-3 items-start lg:items-center">
          <p className=" text-2xl lg:text-2xl md:text2xl text-white">
            Popular Tour Packages
          </p>
          <p>/</p>
          <Link>
            <p className=" text-[#8ed1fc] lg:mt-0 text-xl lg:text-2xl md:text2xl">
              View All Tours
            </p>
          </Link>
        </div>
      </div>{" "}
      <div className="absolute  z-50 w-[100%] bottom-[50px] lg:bottom-[50px] md:bottom-[85px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 440,
              slidesPerView: 1,
              navigation: false,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },

            1000: {
              slidesPerView: 4,
            },
          }}
          navigation
          autoplay={{
            reverseDirection: true,
            waitForTransition: true,
            loop: "infinite",
            speed: 5000,
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=" h-[65vh] md:h-[40vh] lg:h-[60vh] transition-all "
        >
          <div className=" flex mx-0">
            <SwiperSlide className=" ">
              <div className="relative main w-[100%]  h-[70vh] md:h-[40vh] lg:h-[70vh]  shadow-md   bg-white ">
                <div
                  id="main"
                  className="absolute hidden md:hidden lg:block hover:opacity-[70%] transition-all opacity-5 bg-black w-full h-[31vh] lg:h-[30.5vh] md:h-[19vh] "
                >
                  <div
                    id=" showingview"
                    className=" transition-all bg-black hover:opacity-100  md:hidden lg:flex justify-center items-center w-full h-[30.5vh] opacity-5 hidden absolute top-50 "
                  >
                    <FaFilm className=" text-white text-3xl" />
                  </div>
                </div>

                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-700x450.jpg" />
                <div className=" p-5">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Africa-Amazing African Safari
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500">From</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3  item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh] mr-[70px] lg:mr-0 md:mr-0  shadow-md  bg-white">
                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_151616084-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Dubai-All-Stunning Places
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500">From</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh]  shadow-md  bg-white ">
                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_178807262-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Switzerland – 7 Days in Zurich, Zermatt
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500 line-through">$4,300</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
                <div className="absolute top-4 w-[120px] left-[-10px] shadow-md font-bold flex justify-center bg-[#e85e34] py-3 px-4">
                  <p className=" text-white">20% off</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh]   shadow-md  bg-white ">
                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_245507692-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Enquiry Form Only – Italy – 6 Days
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500 line-through">$3,700</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
                <div className="absolute top-4 w-[120px] left-[-10px] shadow-md font-bold flex justify-center bg-[#e85e34] py-3 px-4">
                  <p className=" text-white">25% off</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh]   shadow-md  bg-white ">
                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      America – 2 Days in Lake Tahoe
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500">From</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh]   shadow-md  bg-white ">
                <img src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Japan – 5 Days in Tokyo, Fujikawa
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500">From</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-[100%] h-[70vh] md:h-[40vh] lg:h-[70vh]   shadow-md  bg-white ">
                <img src=" https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_136984760-700x450.jpg" />
                <div className=" p-4">
                  <div className=" flex justify-between">
                    <p className=" text-gray-800 text-xl font-bold ">
                      Finland – Helsinki, Santa Claus Town
                    </p>
                    <div className=" flex flex-col ">
                      <p className=" text-gray-500">From</p>
                      <p className=" text-blue-700 text-2xl font-bold">$100</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 align-middle item-center mt-5">
                    <AiOutlineClockCircle className=" text-blue-700 text-xl" />
                    <p className=" text-gray-500">5 Hours</p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className=" flex gap-2">
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                      <AiFillStar className=" text-orange-500" />
                    </div>

                    <p>(6 reviews)</p>
                  </div>
                </div>
                <div className="absolute top-4 w-[120px] left-[-10px] shadow-md font-bold flex justify-center bg-[#e85e34] py-3 px-4">
                  <p className=" text-white">10% off</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
