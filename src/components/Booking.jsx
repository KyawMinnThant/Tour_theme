import React from "react";

const Booking = () => {
  const booking = [
    {
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-10.png",
      text: "40,000+ CUSTOMERS",
      text_1: "Morbas portas default sar",
    },
    {
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-11.png",
      text: "AWARD WINNING",
      text_1: "Morbas portas default sar",
    },
    {
      url: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-12.png",
      text: "SECURE PAYMENT",
      text_1: "Morbas portas default sar",
    },
  ];
  return (
    <div className=" flex flex-col md:flex-row lg:flex-row bg-blue-600 mt-[120px] h-[70vh] lg:h-[25vh] md:h-[15vh] ">
      <div className="">
        <p className="text-2xl font-bold flex  justify-center text-white  h-[25vh] bg-blue-800 w-full lg:w-[500px] md:w-[300px]">
          <span className=" mt-[85px]"> Why Book With Us</span>
        </p>
      </div>{" "}
      <div className=" flex flex-col md:flex-row mt-[50px] md:mt-[30px] lg:mt-[50px] lg:flex-row items-center lg:items-start justify-center w-[100%]  gap-4 ">
        {booking?.map((item, index) => (
          <div key={index} className=" flex items-center gap-3">
            <img
              src={item?.url}
              className=" w-[15%] h-[10vh] object-contain"
              alt=""
            />
            <div className="">
              <p className=" text-white font-bold">{item?.text}</p>
              <p className=" text-gray-600 font-bold">{item?.text_1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
