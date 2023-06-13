import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import WOW from "wow.js";

const Pages = ({ page, setpage }) => {
  const wowjs = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wowjs.init();
  return (
    <div className="  w-[100%]">
      <div className="  p-[10px] w-[100%] flex flex-col gap-1 text-gray-400  mt-50">
        {" "}
        <div
          className=" mx-5 font-bold text-2xl mb-5"
          onClick={() => setpage(false)}
        >
          <AiOutlineLeft className=" text-gray-400" />
        </div>
       
        <div
          //   onClick={() => setpage(!page)}
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Features </p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
       <Link to={"/about"}>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
         
          <p>About</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        </Link>
        <Link to={"/service"}>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Our Services</p>
          <AiOutlineRight className=" text-gray-400" />
        </div></Link>
        <Link to={"/contact"}>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Contact</p>
          <AiOutlineRight className=" text-gray-400" />
        </div></Link>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Portfolio</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Gallery</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Team</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Products</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Price Table</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Maintenance</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
        <div
          className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-5 font-bold border border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
        >
          {" "}
          <p>Coming soon</p>
          <AiOutlineRight className=" text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Pages;
