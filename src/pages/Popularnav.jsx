import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Popularnav = () => {
  const swiper = useSwiper();
  const navigations = () => {
    return (
      <div className="  justify-between w-[100%] absolute top-[160px] hidden md:flex lg:flex xl:flex   left-0 z-50">
        <AiOutlineLeft
          className=" cursor-pointer text-[50px] text-white shadow-lg bg-blue-500 p-2"
          onClick={() => swiper?.slidePrev()}
        />
        <AiOutlineRight
          className=" cursor-pointer text-[50px] text-white shadow-lg bg-blue-500 p-2 "
          onClick={() => swiper?.slideNext()}
        />
      </div>
    );
  };

  return <div>{navigations()}</div>;
};

export default Popularnav;
