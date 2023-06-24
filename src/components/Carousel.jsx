import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
import "animate.css";
import { useSwiper } from "swiper/react";

const Carousel = () => {
  const swiper = useSwiper();

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
    <div className="  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
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
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" h-[70vh]  lg:h-[70vh] xl:h-[95vh] md:h-[75vh] transition-all"
      >
        {bg_img?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className=" w-[100%] h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${item?.img})` }}
            ></div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
