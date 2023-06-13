import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const Tourdropdown = () => {
  return (
    <div>
      {" "}
      <div className="text-gray-300 cursor-pointer  transition-none  shadow-sm fixed top-[180px] left-[690px]  w-[15%] p-[30px] bg-[#1f1f1f] opacity-100 z-[50000] flex   flex-col gap-4">
        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Features</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Portfolio</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Gallery</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          <Link>Team</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Products</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Price Table</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className=" flex justify-between items-center hover:text-gray-100">
          {" "}
          <Link>Maintenace</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>

        <div className="flex justify-between items-center hover:text-gray-100">
          <Link>Coming Soon</Link>
          <AiOutlineRight className=" text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Tourdropdown;
