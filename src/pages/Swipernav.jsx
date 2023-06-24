import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Swipernav = () => {
  const swiper = useSwiper();
  console.log(swiper.pagination);
  const navigations = () => {
    // absolute lg:top-[330px] md:top-[150px] left-10 md:left-0
    return (
      <div className="  justify-between hidden md:flex   w-full h-full absolute top-[50%]  ">
        <AiOutlineLeft
          className=" cursor-pointer text-[50px] text-white shadow-lg"
          onClick={() => swiper?.slidePrev()}
        />
        <AiOutlineRight
          className=" cursor-pointer text-[50px] text-white shadow-lg"
          onClick={() => swiper?.slideNext()}
        />
      </div>
    );
  };

  return <div>{navigations()}</div>;
};

export default Swipernav;