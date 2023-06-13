import React, { useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import WOW from "wow.js";

import { Parallax } from "react-parallax";


//wow js
const wowjs = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});

wowjs.init();

const teamMember = [
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-1-550x500.jpg",
    title: "JEANETTE KINGSTON",
    field: "Chief Executive Officer",
  },
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-3-550x500.jpg",
    title: "ALAN COOPER",
    field: "Vice President",
  },
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-5-550x500.jpg",
    title: "JOHN SMITHY",
    field: "Chief Financial Officer",
  },
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-6-550x500.jpg",
    title: "PETER SANDLER",
    field: "Senior Engineer",
  },
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-2-550x500.jpg",
    title: "RICARDO GOMEZ",
    field: "HR Manager",
  },
  {
    src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/05/personnel-4-550x500.jpg",
    title: "JAMES SMITH",
    field: "Chief Technology Officer",
  },
];

const About = () => {
  const refSocial = useRef();
  const refProduct = useRef();

  let [social, setSocial] = useState(0);
  let [product, setProduct] = useState(0);



  return (
    <>
      <div className=" bg-about-main bg-cover bg-center h-[200px] md:h-[499px] w-auto relative">
        <p className=" h-1 font-bold text-3xl md:text-6xl absolute top-16 left-10 md:top-64 md:left-32 text-white">
          About Us
        </p>
        <p className=" h-1 font-bold text-lg md:text-2xl absolute top-28 left-10 md:top-80 md:left-32 text-white">
          Justo Vulputate Vehicula
        </p>
      </div>

      <div className=" h-auto md:h-[450px] grid grid-cols-1 md:grid-cols-2 px-10 py-10 md:p-20">
        <div className=" md:w-[300px] lg:w-[400px]">
          <p className=" font-extrabold text-4xl text-gray-800">
            Amet Etiam Quam
          </p>
          <p className=" pt-5 text-slate-500">
            Vestibulum id ligula porta felis euismod semper. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet
            non magna. Maecenas sed diam eget risus varius blandit sit amet non
            magna.
          </p>
        </div>
        <div className=" mt-5 md:mt-0">
          <div>
            <div className=" flex items-center justify-between">
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                Branding
              </p>
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                90%
              </p>
            </div>
            <div className="relative pt-3">
              <div
                className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                style={{ background: "#f3f3f3" }}
              >
                <div
                  style={{ width: "90%", background: "rgb(22, 22, 22)" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                ></div>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex items-center justify-between">
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                Graphic Desgin
              </p>
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                100%
              </p>
            </div>
            <div className="relative pt-3">
              <div
                className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                style={{ background: "#f3f3f3" }}
              >
                <div
                  style={{ width: "100%", background: "rgb(22, 22, 22)" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                ></div>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex items-center justify-between">
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                Social Marketing
              </p>
              <p
                className=" uppercase text-gray-800 pt-3 text-lg font-medium"
                style={{ transition: "all 0.5s ease-out" }}
              >
                {social <= 85 ? social : "85"}%
              </p>
            </div>
            <div className="relative pt-3">
              <div
                className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                style={{ background: "#f3f3f3" }}
              >
                <div
                  ref={refSocial}
                  style={{
                    width: "0%",
                    background: "rgb(22, 22, 22)",
                    transition: "all 0.5s ease-out",
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                ></div>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex items-center justify-between">
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                Product Desgin
              </p>
              <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                {product <= 90 ? product : "90"}%
              </p>
            </div>
            <div className="relative pt-3">
              <div
                className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                style={{ background: "#f3f3f3" }}
              >
                <div
                  ref={refProduct}
                  style={{
                    width: "0%",
                    background: "rgb(22, 22, 22)",
                    transition: "all 0.5s ease-out",
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 relative">

        <div className="w-full h-[360px] md:h-[925px] lg:h-[690.238px] bg-fixed overflow-hidden">
          <img
            ref={refTran}
            style={{ transform: `translate(0px, ${tran}px)` }}
            className="h-full w-full bg-cover bg-center"
            src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_74901229.jpg"
            alt=""
          />
        </div>

        <Parallax
          bgImage="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_74901229.jpg"
          strength={200}
        >
          <div className="w-full h-[360px] md:h-[925px] lg:h-[690.238px]"></div>
        </Parallax>

        <div className=" px-10 md:px-20 pt-20 pb-10 md:pb-0 bg-about-pair">
          <div className="wow animate__fadeInRight">
            <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
              Pharetra Etiam Inceptos
            </p>
            <p className=" text-xl text-slate-500 py-8">
              Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas
              faucibus mollis interdum. Donec id elit non mi porta gravida at
              eget metus. Aenean lacinia.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="md:mb-6 lg:mb-0 flex items-center gap-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Vestibulum id ligula</p>
                </div>
                <div className=" flex items-center gap-5 py-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Egestas Fermentum</p>
                </div>
                <div className=" flex items-center gap-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Ultricies Bibendum</p>
                </div>
                <div className=" flex items-center gap-5 mt-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Fermentum Tellus</p>
                </div>
              </div>
              <div>
                <div className="mt-5 md:mt-0 flex items-center gap-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Mattis Fringilla Ultricies</p>
                </div>
                <div className=" flex items-center gap-5 py-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Adipiscing Vulputate</p>
                </div>
                <div className=" flex items-center gap-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Fringilla Quam Elit</p>
                </div>
                <div className=" flex items-center gap-5 mt-5">
                  <AiFillCheckCircle className=" hover:animate-bounce" />
                  <p className=" text-slate-500">Commodo Vestibulum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className=" px-10 md:px-28 py-10 bg-about-pair">
          <div className=" wow animate__fadeInLeft">
            <p className=" text-3xl font-bold">About Services</p>
            <div>
              <p className=" text-slate-500 text-xl pt-7">
                Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
              <br />
              <p className=" text-slate-500 text-xl">
                Maecenas faucibus mollis interdum. Donec id elit non mi porta
                gravida at eget metus. Aenean lacinia. Donec ullamcorper nulla
                non metus auctor fringilla. Donec ullamcorper nulla non metus
                auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam
              </p>
            </div>
            <button className=" bg-slate-950 text-white px-5 py-3 rounded mt-8">
              Get A Quote
            </button>
          </div>
        </div>
        <div className=" bg-about-bg-black text-white">
          <div className=" grid grid-cols-1 px-16 py-10">
            <div className=" flex items-center gap-8 wow animate__fadeInRight">
              <img
                className="w-[50px]"
                src={
                  "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/09/icon-1.png"
                }
                alt=""
              />
              <div>
                <p className=" text-2xl font-semibold">
                  Ornare Quam Justo Tellusv
                </p>
                <p>
                  Maecenas faucibus mollis interdum. Donec id elit non mi porta
                  gravida at eget metus. Aenean lacinia.{" "}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-8 my-10 wow animate__fadeInRight">
              <img
                className="w-[75px]"
                src={
                  "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/09/icon-2.png"
                }
                alt=""
              />
              <div>
                <p className=" text-2xl font-semibold">
                  Ornare Quam Justo Tellusv
                </p>
                <p>
                  Maecenas faucibus mollis interdum. Donec id elit non mi porta
                  gravida at eget metus. Aenean lacinia.{" "}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-8 wow animate__fadeInRight">
              <img
                className="w-[75px]"
                src={
                  "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/09/icon-3.png"
                }
                alt=""
              />
              <div>
                <p className=" text-2xl font-semibold">
                  Ornare Quam Justo Tellusv
                </p>
                <p>
                  Maecenas faucibus mollis interdum. Donec id elit non mi porta
                  gravida at eget metus. Aenean lacinia.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#e1e1e1" }}>
        <p className=" text-center text-slate-800 text-5xl font-bold py-10">
          Meet The Team
        </p>

        <div className=" px-20 py-10 flex flex-wrap gap-8">
          {teamMember?.map((member, index) => {
            return (
              <div
                key={index}
                className="w-[330px] md:w-[300px] lg:w-[342.33px] h-auto relative"
                style={{ backgroundColor: "#fff" }}
              >
                <div className=" h-[312.11px] overflow-hidden">
                  <img className=" w-full h-full" src={member?.src} alt="" />
                  <div className="overlay-about "></div>
                </div>
                <div className=" px-16 py-5">
                  <p className=" text-gray-800 text-xl font-bold py-5">
                    {member?.title}
                  </p>
                  <p className=" text-slate-400 text-lg mb-5">
                    {member?.field}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
