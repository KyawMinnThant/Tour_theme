import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
const TravelArticles = () => {
  const articles = [
    {
      name: "How to travel with paper map?",
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_195507533-700x660.jpg",
      date: "June 6,2016",
    },
    {
      name: "Change your place and get fresh air",
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33-700x660.jpg",
      date: "June 6,2016",
    },
    {
      name: "Even all the powerful pointing",
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_210601591-700x660.jpg",
      date: "June 6,2016",
    },
    {
      name: "The surfing men will blow your mind",
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/pexels-photo-67386-700x660.jpeg",
      date: "June 6,2016",
    },
  ];
  return (
    <>
      <div className=" mt-[100px] md:max-w-[1180px] mx-auto max-w-[500px] px-[15px] flex  flex-col gap-[50px] ">
        <div className=" flex gap-3 ">
          <div className=" flex flex-col lg:flex-row md:flex-row gap-4 items-center">
            <div className=" flex items-center">
              <FaRegLightbulb className=" text-3xl text-blue-500 mr-[10px]" />
              <p className=" text-gray-800 text-3xl">Travel Articles</p>
            </div>
            <p className=" text-blue-500 text-2xl hidden lg:block md:block">
              /
            </p>
            <Link className=" text-blue-500 text-xl">Read All Articles </Link>
          </div>
        </div>

        <div className="  flex lg:flex-row md:flex-row flex-col items-center mx-[50px] lg:items-start lg:mx-0 md:items-start md:mx-0 justify-center gap-[50px]">
          {articles?.map((item, index) => (
            <div
              key={index}
              className=" relative shadow-md hover:scale-[1.05] transition   cursor-pointer"
            >
              <div className="opacity-0 transition   hover:opacity-60 flex flex-col gap-2 items-center justify-center absolute top-0 bg-black text-white  w-[100%] lg:w-[230px] md:w-[230px] h-[32vh]">
                {/* <p className=" text-center">{item?.name}</p>
                <p>{item?.date}</p> */}
              </div>
              <img
                src={item?.url}
                className="   transition  hover:scale-[1.05] w-[100%] lg:w-[250px] md:w-[250px]"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TravelArticles;
