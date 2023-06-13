import React from "react";

const Discount = () => {
  return (
    <div className=" relative mt-[160px]">
      <img
        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/stunning-bg.jpg"
        className=" w-full h-[60vh] lg:h-[65vh] md:h-[60vh] object-cover"
        alt=""
      />

      <div className=" absolute top-[60px] flex flex-col   gap-[20px]  md:left-[250px] left-[10px] right-0 lg:left-[200px] xl:left-[700px]  md:right-[0]">
        <span className=" text-2xl lg:text-5xl md:text-5xl font-bold text-white">
          Discount <span className=" text-[#ffb43e]">10-30% Off</span>
        </span>

        <p className=" text-white w-full lg:w-[500px] md:w-[500px]">
          Curabitur blandit tempus porttitor. Curabitur blandit tempus
          porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit.
        </p>

        <button className=" text-gray-600 font-bold bg-white shadow-sm p-2 md:p-2 lg:p-4 rounded-[50px] w-[200px]">
          See Promotion Tours
        </button>
      </div>
    </div>
  );
};

export default Discount;
