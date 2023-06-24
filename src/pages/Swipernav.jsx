import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Swipernav = () => {
  const swiper = useSwiper();
  console.log(swiper.pagination);
  const navigations = () => {
    return (
      <div className="  justify-between hidden md:flex lg:flex xl:flex  w-[100%]  absolute lg:top-[330px] md:top-[150px] left-10 md:left-0 ">
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
