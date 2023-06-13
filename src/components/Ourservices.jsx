import React from "react";

const Ourservices = () => {
  return (
    <div>
      <div className=" px-[50px] py-[80px] w-full bg-[#467fe8] flex flex-col md:flex-col lg:flex-row justify-center items-center gap-[50px] md:gap-[] border border-gray-400">
        {/* Destination */}
        <div className="flex   gap-5">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-1.png"
            alt=""
          />
          <div className=" flex flex-col ">
            <p className=" text-white font-bold">500 + DESTINATIONS</p>
            <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
          </div>
        </div>

        {/* Price */}

        <div className=" flex gap-5">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-2.png"
            alt=""
          />
          <div className=" flex flex-col ">
            <p className=" text-white font-bold">BEST PRICE QUARANTEE</p>
            <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
          </div>
        </div>

        {/* Customer */}

        <div className=" flex gap-5">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-3.png"
            alt=""
          />
          <div className=" flex flex-col ">
            <p className=" text-white font-bold">GREAT CUSTOMER</p>
            <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
          </div>
        </div>

        {/* Booking */}

        <div className=" flex gap-5">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-4.png"
            alt=""
          />
          <div className=" flex flex-col ">
            <p className=" text-white font-bold w-[180px]">
              SUPER FAST BOOKING
            </p>
            <p className=" text-[#b9cdf3]">Morbi leo risus, porta ac</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
