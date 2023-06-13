/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiSupport } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaDollarSign, FaHeadphones, FaPhone, FaStar } from "react-icons/fa";
import { Pagination } from "@mantine/core";
import StarRating from "../components/StarRating";
import CustomDateInput from "../components/CustomDateInput";
import { DateInput } from "@mantine/dates";

const itemPerPage = 6;

const TourList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const places = [
    {
      id: 1,
      link: "africa",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-800x960.jpg",
      name: "Africa – Amazing African Safari",
      price: "100",
      duration: "5 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 0,
      review: 0,
    },
    {
      id: 2,
      link: "south Africa",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-164276-800x960.jpeg",
      name: "South Africa – Cape Town",
      price: "2,200",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 3,
      link: "johannesburg",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_149105702-800x960.jpg",
      name: "5-Day Johannesburg – Victoria Falls",
      price: "2,700",
      duration: "5 Days 4 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3.5,
      review: 1,
    },
    {
      id: 4,
      link: "america",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33-800x960.jpg",
      name: "America – 2 Days in Lake Tahoe",
      price: "300",
      duration: "2 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 5,
      link: "alcatraz",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/photodune-4791527-golden-gate-bridge-m-800x960.jpg",
      name: "Alcatraz Tour plus Muir Woods",
      price: "120",
      duration: "10 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 2,
    },
    {
      id: 6,
      link: "americaGrandCanyon",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_94851763-800x960.jpg",
      name: "America – Grand canyon, Golden Gate",
      price: "2,800",
      duration: "9 Days 8 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
    {
      id: 7,
      link: "specialNewYork",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/city-landmark-lights-night-800x960.jpg",
      name: "Special Day Trip in New York",
      price: "80",
      duration: "10 Hourss",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 0,
      review: 0,
    },
    {
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
    {
      id: 13,
      link: "switzerland",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_178807262-800x960.jpg",
      name: "Switzerland – 7 Days in Zurich, Zermatt",
      price: "3,500",
      duration: "7 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 4,
    },
    {
      id: 14,
      link: "enquiry",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_245507692-800x960.jpg",
      name: "Enquiry Form Only – Italy – 6 Days",
      price: "2,000",
      duration: "5 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 15,
      link: "finland",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-800x960.jpeg",
      name: "Finland – Helsinki, Santa Claus Town",
      price: "3,500",
      duration: "8 Days 7 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 16,
      link: "paris",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_136984760-800x960.jpg",
      name: "Paris – Eiffel Tower, Notre Dame Cathedral..",
      price: "800",
      duration: "10 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 17,
      link: "austria",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_154497503-800x960.jpg",
      name: "Austria – 6 Days in Vienna, Hallstatt",
      price: "2,100",
      duration: "2 Days 1 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 18,
      link: "england",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_139999093-800x960.jpg",
      name: "England – London, York, Scotland",
      price: "5000",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 2,
    },
    {
      id: 19,
      link: "norway",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-172221-800x960.jpeg",
      name: "Norway – Heaven on Earth Aurora",
      price: "270",
      duration: "16 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 20,
      link: "argentina",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_61340065-800x960.jpg",
      name: "Argentina – Great Diving Trip",
      price: "1,200",
      duration: "2 Days 1 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3,
      review: 1,
    },
    {
      id: 21,
      link: "brazil",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/rio-de-janeiro-olympics-2016-niteroi-brazil-161212-800x921.jpeg",
      name: "Brazil – Rio de Janeiro",
      price: "1,900",
      duration: "3 Days 2 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
    {
      id: 22,
      link: "chile",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/pexels-photo-800x960.jpeg",
      name: "Chile – Santiago, Wine Country",
      price: "1,900",
      duration: "6 Days 5 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
  ];

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  // Get the subset of data for the current page
  const paginatedData = places.slice(startIndex, endIndex);

  // Handle pagination button clicks
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className=" hidden lg:block bg-auto bg-center pt-[225px] pb-[20px]"
        style={{
          backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/search-bg-2.jpg)`,
        }}
      >
        <div className="hidden  md:flex md:flex-row lg:flex-row gap-5 justify-center bg-black p-10 opacity-100 bg-transparent items-center  top-[0px] left-0 right-0 z-50">
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
              className=" bg-[#585d6b] custom-select w-[200px] md:w-[100px] lg:w-full outline-none text-[#b9c1d5] p-4 shadow-md"
            >
              <option value="Any">Any</option>
              <option value="City Tours">City Tours</option>
              <option value="Cultural and Thematic Tours">
                Cultural and Thematic Tours
              </option>
              <option value="Family Friendly Tours">
                Family Friendly Tours
              </option>
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
              className=" bg-[#585d6b] custom-select outline-none text-[#b9c1d5] w-[200px] md:w-[100px] lg:w-full p-4 shadow-md"
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
              className=" bg-[#585d6b] custom-select outline-none text-[#b9c1d5] w-[200px] md:w-[100px] lg:w-full p-4 shadow-md"
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
            {/* <input
              type="date"
              className=" bg-[#585d6b] outline-none w-[200px] md:w-[100px] lg:w-full text-[#b9c1d5] p-4 shadow-md
          "
            /> */}
            <CustomDateInput className="w-[200px] md:w-[100px]" />
          </div>

          <button className=" py-4 px-6 mt-8 w-[200px] lg:w-[200px] md:w-[100px] text-white font-bold bg-[#388aee] ">
            {" "}
            Search
          </button>
        </div>
        {/* <div className=" container mx-auto px-4">
          <div className=" px-5 pb-9 flex gap-5 align-middle items-center">
            <VscSearch className=" text-gray-500 font-bold text-2xl" />
            <p className="font-bold text-3xl text-white">Search Tours</p>
          </div>

          <div className=" px-5 pb-8 flex justify-between ">
            <div className=" mb-5 pe-5">
              <h3 className=" text-white font-bold text-lg mb-1">Keywords</h3>
              <input
                type="text"
                name="keywords"
                className=" py-3 ps-5 pe-10 w-[160px] h-[65px] keywords"
              />
            </div>

            <div className=" mb-5 pe-5">
              <h3 className=" text-white font-bold text-lg mb-1">Activity</h3>
              <select
                name="keywords"
                className=" py-3 ps-5 pe-10 w-[160px] h-[65px] custom-select"
              >
                <option value="">Any</option>
                <option value="">Cultural & Thematic Tours</option>
                <option value="">Family Friendly Tours</option>
                <option value="">Holiday & Seasonal Tours</option>
                <option value="">Indulgence & Luxury Tours</option>
                <option value="">Outdoor Activites</option>
                <option value="">Relaxation Tours</option>
                <option value="">Wild & Adventure Tours</option>
              </select>
            </div>

            <div className=" mb-5 pe-5">
              <h3 className=" text-white font-bold text-lg mb-1">
                Destination
              </h3>
              <select
                name="keywords"
                className=" py-3 ps-5 pe-10 w-[160px] h-[65px] custom-select"
              >
                <option value="">Any</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Eastern Europe</option>
                <option value="">Europe</option>
                <option value="">South America</option>
              </select>
            </div>

            <div className=" mb-5 pe-5">
              <h3 className=" text-white font-bold text-lg mb-1">Duration</h3>
              <select
                name="keywords"
                className=" py-3 ps-5 pe-10 w-[160px] h-[65px] custom-select"
              >
                <option value="">Any</option>
                <option value="">1 Day Tour</option>
                <option value="">2-4 Days Tour</option>
                <option value="">5-7 Days Tour</option>
                <option value="">7+ Days Tour</option>
              </select>
            </div>

            <div className=" mb-5 pe-5">
              <h3 className=" text-white font-bold text-lg mb-1">Date</h3>

              <div className="">
                <CustomDateInput />
              </div>
            </div>
            <div className=" mb-5 pe-5 pt-8">
              <button className=" py-3 ps-5 pe-10 w-[160px] h-[65px] keywords bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className=" md:grid md:grid-cols-12 md:grid-flow-row md:gap-10 pt-[70px] pb-[30px] mx-10 md:mx-0 flex flex-col justify-center items-center align-middle md:items-start">
        <div className=" md:col-start-2 md:col-span-7 ">
          {paginatedData?.map((place) => {
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
                    <div className=" col-start-6 col-span-2 flex flex-col ps-6 py-5">
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

          <Pagination
            total={Math.ceil(places.length / itemPerPage)}
            size="xl"
            radius="xl"
            value={currentPage}
            onChange={goToPage}
            className=" mb-10 md:mb-0"
          />
        </div>
        <div className=" md:col-start-9 md:col-span-3">
          <div className=" min-h-[270px] mb-12">
            <div className=" pt-9 ps-2 mb-3 font-bold text-md">
              <h4>Latest Tours</h4>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 text-sm">Africa – Amazing African Safari</p>
                <p>
                  <span className=" text-custom text-sm me-2">From</span>{" "}
                  <span className=" font-bold">$100</span>
                </p>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_151616084-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 text-sm">Dubai – All Stunning Places</p>
                <p>
                  <span className=" text-custom text-sm me-2">From</span>{" "}
                  <span className=" font-bold">$1,200</span>
                </p>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_178807262-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 text-sm">
                  Switzerland – 7 Days in Zurich, Zermatt
                </p>
                <div className=" flex justify-between items-center align-middle">
                  <div className=" bg-[#e85e34] px-3 py-1 text-white text-xs">
                    20% Off
                  </div>
                  <p>
                    <span className=" text-custom text-sm me-2">From</span>
                    <del className=" text-gray-400 font-thin">$4,300</del>{" "}
                    <span className=" font-bold"> $3,500</span>
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_245507692-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 text-sm">
                  Enquiry Form Only – Around Italy – 6 Days
                </p>
                <div className=" flex justify-between items-center align-middle">
                  <div className=" bg-[#e85e34] px-3 py-1 text-white text-xs">
                    25% Off
                  </div>
                  <p>
                    <span className=" text-custom text-sm me-2">From</span>
                    <del className=" text-gray-400 font-thin">$3,700</del>{" "}
                    <span className=" font-bold"> $2,000</span>
                  </p>
                </div>
              </div>
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

          <div className=" min-h-[270px] mb-3">
            <div className=" pt-9 mb-7 font-bold text-md">
              <h4>TOUR CATEGORY</h4>
            </div>
            <ul>
              <li className=" my-3 pb-3 border-b text-[#484848]">
                Outdoor Activities
              </li>
              <li className=" my-3 pb-3 border-b">City Tours</li>
              <li className=" my-3 pb-3 border-b">Cultural & Thematic Tours</li>
              <li className=" my-3 pb-3 border-b">Indulgence & Luxury Tours</li>
              <li className=" my-3 pb-3 border-b">Family Friendly Tours</li>
              <li className=" my-3 pb-3 border-b">Holiday & Seasonal Tours</li>
            </ul>
          </div>

          <div className=" min-h-[270px] mb-12">
            <div className=" pt-9 mb-3 font-bold text-md">
              <h4>RECENT ARTICLES</h4>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_195507533-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 font-semibold">
                  How to travel with paper map
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 font-semibold">
                  Change your place and get the fresh air
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_210601591-150x150.jpg"
                alt=""
                className=" h-16 w-16"
              />
              <div className="">
                <p className=" mb-1 font-semibold">
                  Even the all-powerful Pointing
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourList;
