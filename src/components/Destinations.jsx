import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import "../css/des.css";
const Destinations = () => {
  const destinations = [
    {
      name: "South Europe",
      tour: "3 tours",
      img: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-800x960.jpg",
    },
    {
      name: "Europe",
      tour: "7 tours",
      img: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_255194035-800x960.jpg",
    },
    {
      name: "Asia",
      tour: "5 tours",
      img: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-800x960.jpg",
    },
    {
      name: "America",
      tour: "4 tours",
      img: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/Fotolia_16069076_Subscription_Monthly_XXL-800x960.jpg",
    },
    {
      name: "Africa",
      tour: "3 tours",
      img: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-800x960.jpg",
    },
  ];
  const [show, setshow] = useState(false);
  return (
    <div className=" mt-[50px]">
      <div className=" ">
        <div className="flex flex-col   lg:flex-row md:flex-row  gap-3 items-center ml-0 md:ml-10 lg:ml-10">
          <div className="flex  gap-2">
            {" "}
            <ImLocation2 className=" text-3xl text-blue-600" />
            <p className=" text-black text-3xl">Popular Destinations</p>
          </div>
          <p className=" text-blue-600 text-2xl hidden md:block lg:block">/</p>
          <Link>
            <p className=" text-blue-600 font-bold">View All Destinations</p>
          </Link>
        </div>

        <p className=" w-[100%] text-center lg:text-start md:text-start  lg:w-[60%]  md:w-[60%] ml-0 md:ml-12 lg:ml-12 text-gray-600 mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
          repellat pariatur! Voluptatum corrupti ratione, architecto praesentium
          eum dolore doloribus explicabo, quis deserunt, quasi cupiditate iure
          quibusdam doloremque impedit dolores. Ab.
        </p>
      </div>

      <div className=" flex justify-center flex-wrap ">
        {destinations?.map((item, index) => (
          <div id="maindes" key={index} className="maindes  transition-all">
            <div className="relative mt-[50px] bg-black border border-t-0 border-b-0 border-s-0 border-e-0 hover:border-b-[3px] hover:border-blue-800">
              {/* <div
                id="opa"
                className="absolute    transition  opacity-[40%] lg:h-[45vh] md:w-[163px] md:h-[20vh]  bg-black bottom-0 hover:bottom-0 hover:top-0 w-full  lg:w-[303px] h-[60vh] "
              ></div>{" "} */}
              <img
                src={item?.img}
                alt=""
                className="w-full  justify-center hover:opacity-70 duration-300  lg:w-[303px] md:w-[163px] h-[60vh] lg:h-[45vh] md:h-[20vh]  "
              />
              <div className=" flex flex-col gap-3 items-center  w-full  absolute bottom-[30px]  ">
                {" "}
                <div className="flex  items-center justify-around w-full">
                  <div className=" flex flex-col ">
                    <div className=" flex flex-col lg:flex-row md:flex-col gap-[20px] md:gap-[20px] lg:gap-[60px] justify-around items-center w-full">
                      <div className=" flex  gap-3 items-center ">
                        <SlLocationPin className=" text-white text-2xl" />
                        <p className="  shadow-black text-xl  text-white font-bold z-50">
                          {item?.name}
                        </p>
                      </div>
                      <p className=" text-blue-600 font-bold">{item?.tour}</p>{" "}
                    </div>
                    <div className="">
                      <p
                        id="showdis"
                        className="transition-all font-bold hidden  text-blue-800"
                      >
                        View All Tours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
