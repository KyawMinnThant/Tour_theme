import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
<<<<<<< HEAD
import "animate.css";
import "../css/nav.css";
import Swipernav from "../pages/Swipernav";
const bg_img = [
  {
    img: `https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/slider-1.jpg`,
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
    text_3: "Bern,Lucern,Zurich,Zermatt,Metahorn,Jungfrau",
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
        <p className=" lg:text-[70px] text-[40px] md:text-[60px] text-white font-bold">
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
        <p className=" text-white font-bold text-[25px] md:text-[50px] lg:text-[60px]">
          {" "}
          The Hidden World
        </p>
      );
    },
  },
];
=======
import "animate.css/animate.min.css";
// import WOW from "../../node_modules/wow.js/dist/wow";
// import WOW from "wow.js"


>>>>>>> ee31f3f1a478f05933ef1e650b4f405e938f90da

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState("");
  const bg_img = [
    {
      img: `https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/slider-1.jpg`,
      text: () => {
        return (
          <p className={` text-white font-bold text-[40px] md:text-[70px] lg:text-[80px] animate__animated animate__fadeInUp`}>
            Special
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" text-[#bad9ff] font-bold lg:text-[40px] text-[25px] md:text-[40px] space-x-5 animate__animated animate__lightSpeedInRight">
            7 Days in Switzerland
          </p>
        );
      },
    },
    {
      img: `https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`,
      text: () => {
        return (
          <p className="text-[#bad9ff] font-bold lg:text-[40px] md:text-[35px] text-[25px] animate__animated animate__fadeInUp">
            Find your perfect
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" lg:text-[70px] text-[40px] md:text-[60px] text-white font-bold animate__animated animate__lightSpeedInRight">
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
          <p className={`text-white lg:text-[40px] text-[25px] md:text-[35px] animate__animated animate__slideInUp `}>
            OPEN YOUR EYES TO
          </p>
        );
      },
      text_2: () => {
        return (
          <p className=" text-white font-bold text-[25px] md:text-[50px] lg:text-[60px] animate__animated animate__flipInX">
            {" "}
            The Hidden World
          </p>
        );
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bg_img.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const swiper = useSwiper();
  console.log(useSwiper());
  const currentImage = bg_img[currentImageIndex];
  return (
    <div className=" bg-gray-500 swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        loop
        // navigation
        effect="fade"
        autoplay={{
          reverseDirection: true,
          waitForTransition: true,
          effect: "fade",
          loop: "infinite",
          speed: 5000,

          delay: 5000,
          fadeEffect: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
<<<<<<< HEAD
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
=======
        onSlideChange={(swiper) => {
          setCurrentImageIndex(swiper.realIndex);
          setTextAnimation("animate__animated animate__fadeInUpBig");
        }}
        navigation
        breakpoints={{
          375: {
            // navigation: false,
            showSwitchArrows: false,
          },
          400: {
            // navigation: false,
            showSwitchArrows: false,
          },
          768: {
            showSwitchArrows: true,
          },
          1024: {
            showSwitchArrows: true,
          },
          1440: {
            showSwitchArrows: true,
          },
        }}
>>>>>>> ee31f3f1a478f05933ef1e650b4f405e938f90da
      >
        {bg_img.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center xl:h-[680px] w-[500px] mx-auto md:w-full h-[266px] lg:h-[523px] md:h-[400px] max-h-none "
              style={{
                backgroundImage: `url(${image.img})`,
              }}
            >
<<<<<<< HEAD
              <div className=" w-full h-full">
                <div className=" max-w-[1180px] flex  h-full  items-center mx-auto">
                  <div className=" px-[18px] flex flex-col xl:mx-0   mx-[50px]  ">
                    <h1 className="animate__animated animate__fadeInUp">
                      {" "}
                      {image.text()}
                    </h1>
                    <p className="animate__animated animate__fadeInLeft">
                      {image.text_2()}
                    </p>

                    <div className=" flex flex-col gap-2 ">
                      {" "}
                      <span>
                        {" "}
                        {image.text_3 && (
                          <p className="animate__animated animate__fadeIn text-2xl hidden lg:block md:hidden text-white">
                            {image.text_3}
                          </p>
                        )}
                      </span>
                      <button className="animate__animated animate__fadeIn p-2 w-[fit-content] font-semibold shadow-sm md:py-3 md:px-5 lg:py-3 lg:px-5 text-white bg-[#388aee] mt-5 ml-2">
                        {" "}
                        Learn More
                      </button>{" "}
                    </div>
=======
              <div className="w-full h-full">
                <div className="max-w-[1180px] flex h-full items-center mx-auto">
                  <div className="px-[18px] flex flex-col xl:mx-0 mx-[50px] overflow-hidden">
                    <h1 >{image.text()}</h1>
                    <p >{image.text_2()}</p>
                    <span>
                      {image.text_3 && (
                        <p className="hidden lg:block md:hidden text-white wow fadeIn">
                          {image.text_3}
                        </p>
                      )}
                    </span>
                    <button className=" w-fit rounded-[3px]  shadow-sm  text-white leading-[12px] font-[900]  bg-[#388aee] text-[13px] mt-5 px-[32px] py-[20px] ">
                      LEARN MORE
                    </button>
>>>>>>> ee31f3f1a478f05933ef1e650b4f405e938f90da
                  </div>
                </div>
              </div>{" "}
              <Swipernav />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
