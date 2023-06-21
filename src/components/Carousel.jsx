import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
const Carousel = () => {
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
    <div className="  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        // autoplay={{
        //   reverseDirection: true,
        //   waitForTransition: true,
        //   effect: "fade",
        //   loop: "infinite",
        //   speed: 5000,
        //   delay: 5000,
        //   fadeEffect: { crossFade: true },
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className=" h-[70vh]  lg:h-[70vh] xl:h-[95vh] md:h-[75vh] transition-all"
      >
        {bg_img?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" ">
              <img
                src={item?.img}
                alt=""
                className=" animate__animated animate__fadeIn bg-black w-full h-[70vh] lg:h-[70vh]  xl:h-[95vh] md:h-[75vh] object-cover  "
              />

              <div className="   top-[200px] left-[100px]  max-w-[1180px] mx-auto">
                <div className="  w-full ">
                  {" "}
                  <p className="animate__animated animate__fadeInUp ">
                    {item?.text()}
                  </p>
                  <p className="animate__animated animate__fadeInRight ">
                    {item?.text_2()}
                  </p>
                  {item?.text_3 && (
                    <p className="animate__animated animate__fadeIn text-[#bad9ff] ml-3 hidden lg:block md:hidden">
                      {item?.text_3}
                    </p>
                  )}
                  <button className=" p-3 md:py-3 md:px-5 lg:py-3 lg:px-5 text-white bg-[#388aee] mt-5 ml-2">
                    {" "}
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
