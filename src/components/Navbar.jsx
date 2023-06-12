import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button } from "@mantine/core";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Menu, rem } from "@mantine/core";
import WOW from "wow.js";
import "../css/nav.css";
import "animate.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
import {
  BsFillTelephoneFill,
  BsTwitter,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaEnvelope, FaFlickr, FaFacebookF } from "react-icons/fa";

import {
  AiOutlineGoogle,
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Pages from "./Pages";
// import { Carousel } from "@mantine/carousel";

const Navbar = ({ modal, setModal }) => {
  const [page, setpage] = useState(false);
  const wowjs = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wowjs.init();
  const [active, setactive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const bg_img = [
    {
      img: `https://hips.hearstapps.com/hmg-prod/images/village-beneath-mountain-on-snow-covered-landscape-royalty-free-image-1658138339.jpg?crop=0.99953xw:1xh;center,top&resize=980:*`,
      text: () => {
        return (
          <p className=" text-white font-bold text-[40px] md:text-[70px] lg:text-[80px]">
            Special
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" text-[#bad9ff] font-bold lg:text-[40px] text-[25px] md:text-[40px] space-x-5">
            7 Days in Switzerland
          </p>
        );
      },
    },
    {
      img: `https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`,
      text: () => {
        return (
          <p className="text-[#bad9ff] font-bold lg:text-[40px] md:text-[35px] text-[25px]">
            Find your perfect
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" lg:text-[70px] text-[50px] md:text-[60px] text-white font-bold">
            {" "}
            VACATION
          </p>
        );
      },
      text_3: "ITALY,VENICE,ROME,MILAN",
    },
    {
      img: `https://live.staticflickr.com/4256/34476186234_b2e5e9fc71_b.jpg`,
      text: () => {
        return (
          <p className="text-white lg:text-[40px] text-[25px] md:text-[35px]">
            OPEN YOUR EYES TO
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" text-white font-bold text-[35px] md:text-[50px] lg:text-[60px]">
            {" "}
            The Hidden World
          </p>
        );
      },
    },
  ];

  return (
    <div>
      <div className=" fixed bg-black p-1 lg:p-4 z-[1000]  md:p-4  w-full opacity-80 overflow-hidden ">
        <div className="  lg:flex xl:flex hidden md:flex justify-around ">
          <div className=" flex gap-6">
            <div className=" flex gap-2 items-center">
              <BsFillTelephoneFill className=" text-white" />
              <p className=" text-white">1.820.3345.33</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaEnvelope className=" text-white" />
              <p className=" text-white"> Contact@TravelTourWP.com</p>
            </div>
          </div>

          <div className="">
            <div className=" flex gap-6 items-center">
              <FaFacebookF className=" text-[#468ae7]" />
              <FaFlickr className=" text-[#468ae7]" />
              <AiOutlineGoogle className=" text-[#468ae7]" />
              <BsTwitter className=" text-[#468ae7]" />
              <div className=" flex gap-2">
                <AiOutlineLock className=" text-[#468ae7] text-2xl" />
                <p className=" text-white font-bold">Login</p>
              </div>
              <div className=" flex gap-2">
                <BsFillPersonFill className=" text-[#468ae7] text-2xl" />
                <p className=" text-white font-bold">Signup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="z-50 p-2 flex  lg:gap-[180px] xl:gap-[180px] gap-[80px] md:gap-[380px] mx-[20px] lg:mx-[180px] xl:mx-[190px] md:mx-[100px] justify-center md:justify-between lg:justify-between xl:justify-normal  items-center  lg:mt-10 xl:mt-10 mt-5 md-mt-5 mb-2">
          <div className=" ">
            <img
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/themes/traveltour/images/logo.png"
              alt=""
              className=" max-w-lg  block "
            />
          </div>

          <div className=" flex items-center  justify-between w-full ">
            <NavLink
              to={`/`}
              className="  text-white hidden xl:block lg:hidden  md:hidden "
            >
              {" "}
              Home
            </NavLink>

            <NavLink className="text-white hidden xl:block lg:hidden  md:hidden">
              {" "}
              Pages
            </NavLink>

            <NavLink className="text-white hidden xl:block lg:hidden  md:hidden">
              Tour List
            </NavLink>
            <NavLink className="text-white hidden xl:block lg:hidden  md:hidden">
              {" "}
              Destinations
            </NavLink>

            <NavLink className="text-white hidden xl:block  md:hidden">
              Date & Pricing
            </NavLink>
            <NavLink className="text-white hidden xl:block  md:hidden">
              {" "}
              Tour System
            </NavLink>
            <NavLink className="text-white hidden xl:block  md:hidden">
              {" "}
              Blog
            </NavLink>
            <div className="flex items-center">
              <AiOutlineSearch
                onClick={() => setModal(true)}
                className=" text-white text-xl font-bold block"
              />

              <div>
                <Drawer.Root
                  opened={opened}
                  onClose={close}
                  position="right"
                  size="75%"
                  className=" absolute z-[6000]"
                >
                  <Drawer.Overlay />
                  <Drawer.Content className=" bg-[#1f1f1f]">
                    {page ? (
                      <Pages page={page} setpage={setpage} />
                    ) : (
                      <div className="">
                        <Drawer.Header className=" bg-[#1f1f1f]">
                          <Drawer.CloseButton className=" m-5 transition hover:bg-[#1f1f1f]  hover:text-gray-200  text-gray-400 " />
                        </Drawer.Header>
                        <Drawer.Body className=" mb-10">
                          <div className=" flex flex-col gap-1 text-gray-400  ">
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Home</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              onClick={() => setpage(!page)}
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Pages </p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Tour List</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Destinations</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Date & Pricing</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Tour System</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                            <div
                              className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                            >
                              {" "}
                              <p>Blog</p>
                              <AiOutlineRight className=" text-gray-400" />
                            </div>
                          </div>
                        </Drawer.Body>
                      </div>
                    )}
                  </Drawer.Content>
                </Drawer.Root>
              </div>

              <Group position="center">
                <Button
                  onClick={open}
                  className=" text-white text-xl font-bold block md:block xl:hidden lg:block"
                >
                  <AiOutlineMenu />
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{
          reverseDirection: true,
          waitForTransition: true,
          effect: "fade",
          loop: "infinite",
          speed: 5000,
          delay: 5000,
          fadeEffect: { crossFade: true },
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" h-[60vh] lg:h-[95vh] md:h-[60vh] transition-all"
      >
        {bg_img?.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={item?.img}
                alt=""
                className=" wow animate__fadeIn bg-black w-full h-[60vh] lg:h-[95vh]  md:h-[60vh] object-cover relative"
              />
              <div className="absolute top-[210px] left-[20px] lg:top-[300px] lg:left-[200px] md:top-[300px] md:left-[200px]">
                <p className="wow animate__fadeInUp ">{item?.text()}</p>
                <p className="wow animate__fadeInRight ">{item?.text_2()}</p>
                {item?.text_3 && (
                  <p className="wow animate__fadeIn text-[#bad9ff] ml-3 hidden lg:block md:block">
                    {item?.text_3}
                  </p>
                )}
                <button className=" p-3 md:py-3 md:px-5 lg:py-3 lg:px-5 text-white bg-[#388aee] mt-5 ml-2">
                  {" "}
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
      {/* Services */}
    </div>
  );
};

export default Navbar;
