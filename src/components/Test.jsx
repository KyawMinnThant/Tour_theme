import React, { useState, useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../node_modules/swiper/swiper.min.css';
// import '../../node_modules/swiper/components/navigation/navigation.min.css';
// import '../../node_modules/swiper/components/pagination/pagination.min.css';
// import "../../node_modules/swiper/"
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";

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

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bg_img.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentImage = bg_img[currentImageIndex];
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
        breakpoints={{
            // Hide navigation in small and medium screens
           sm: {
            navigation : false
           },
            md: {
              navigation: false,
            },
          }}
      >
        {bg_img.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center xl:h-[680px] w-[500px] mx-auto md:w-full h-[266px] lg:h-[523px] md:h-[400px] max-h-none "
              style={{
                backgroundImage: `url(${image.img})`,
               

              }}
            >
              <div className=" w-full h-full">
                <div className=" max-w-[1180px] flex  h-full  items-center mx-auto">
                  <div className=" px-[18px] flex flex-col xl:mx-0   mx-[50px]  ">
                    <h1> {image.text()}</h1>
                    <p>{image.text_2()}</p>
                    <span> {image.text_3 && <p>{image.text_3}</p>}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
