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
    // <div className=" flex flex-col md:flex-row lg:flex-row bg-blue-600 mt-[120px] h-[70vh] lg:h-[25vh] md:h-[15vh] ">
    //   <div className="">
    //     <p className="text-2xl font-bold flex  justify-center text-white  h-[25vh] bg-blue-800 w-full lg:w-[500px] md:w-[300px]">
    //       <span className=" mt-[75px] md:mt-[30px] lg:mt-[85px]">
    //         {" "}
    //         Why Book With Us
    //       </span>
    //     </p>
    //   </div>{" "}
    //   <div className=" flex flex-col md:flex-row mt-[50px] md:mt-[30px] lg:mt-[20px] lg:flex-row items-center lg:items-start justify-center w-[100%]  gap-4 ">
    //     {booking?.map((item, index) => (
    //       <div key={index} className=" flex items-center gap-3">
    //         <img
    //           src={item?.url}
    //           className=" w-[15%] h-[10vh] object-contain"
    //           alt=""
    //         />
    //         <div className="">
    //           <p className=" text-white font-bold">{item?.text}</p>
    //           <p className=" text-gray-600 font-bold">{item?.text_1}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
   <div className=" bg-[#488AE8]">
     <div className=" md:max-w-[1180px] max-w-[500px] mx-auto  mt-20 px-[15px]">
      <div className=" lg:h-[180] xl:h-[136px] md:h-[180px] md:flex justify-between">
        <div className=" w-full md:w-[24%] h-full py-[56px] pl-[20px] md:pl-0 bg-[#4263C1] md:bg-transparent">
         <p className=" text-[19px] font-[400] text-white "> Why Book With Us?</p>
        </div>
        <div className=" w-full md:w-[24%] pt-[40px]">
          <div className=" px-[20px] pb-[20px] flex items-start">
            <img
              className=" mr-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-10.png"
              width="37"
              height="39"
              title="icon-10"
            />
            <div>
              <div className=" pt-[5px] mb-[5px]">
                <p className=" text-[14px] font-[600] text-white leading-[1.55]"> 40,000+ Customers</p>
              </div>
              <div className=" mb-[20px]">
                <p className=" leading-[1.7] text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[24%] pt-[40px]">
          <div className=" px-[20px] pb-[20px] flex items-start">
            <img
              className=" mr-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-11.png"
              width="37"
              height="39"
              title="icon-10"
            />
            <div>
              <div className=" pt-[5px] mb-[5px]">
                <p className=" text-[14px] font-[600] text-white leading-[1.55]">AWARD WINNING</p>
              </div>
              <div className=" mb-[20px]">
                <p className=" leading-[1.7] text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[24%] pt-[40px]">
          <div className=" px-[20px] pb-[20px] flex items-start">
            <img
              className=" mr-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/icon-12.png"
              width="37"
              height="39"
              title="icon-10"
            />
            <div>
              <div className=" pt-[5px] mb-[5px]">
                <p className=" text-[14px] font-[600] text-white leading-[1.55]">SECURE PAYMENT</p>
              </div>
              <div className=" mb-[20px]">
                <p className=" leading-[1.7] text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Booking;
