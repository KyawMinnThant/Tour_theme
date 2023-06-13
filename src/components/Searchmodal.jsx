import React from "react";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import WOW from "wow.js";

import "animate.css";
const Searchmodal = ({ modal, setModal }) => {
  const wowjs = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wowjs.init();
  return (
    <div
      className={` transition-all ${
        modal && `opacity-[70%]`
      }  bg-black flex justify-center items-center w-full h-[100vh]  z-[5000] fixed `}
    >
      <div className="  flex items-center  text-white bg-black  p-3 text-3xl outline-0 border-b-2  border-white">
        <input
          type="text"
          className=" bg-black outline-none w-[310px]  font-bold"
          placeholder="Search"
        />
        <div className=" flex gap-2">
          <ImSearch className="text-white text-2xl" />
          <RxCross2
            onClick={() => setModal(false)}
            className="text-white text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchmodal;
