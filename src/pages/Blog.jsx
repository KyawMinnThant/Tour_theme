import React, { useState } from "react";
import WOW from "wow.js";
import bgImage from "../assets/section-bg-4.jpg";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFileText } from "react-icons/ai";
import { HiOutlineFolder } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { Pagination } from "@mantine/core";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import "animate.css";

const wowjs = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wowjs.init();

const Blog = () => {
  const [up, setUp] = useState(false);

  const h75 =
    0.1 * (document.body.getBoundingClientRect().height - window.innerHeight);
  window.addEventListener("scroll", () => {
    if (window.scrollY > h75) {
      setUp(true);
    } else {
      setUp(false);
    }
  });
  const image = [
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_220323652-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1443890923422-7819ed4101c0-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/11/italian-landscape-mountains-nature-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_245507692-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_254090041-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/11/photo-1441155472722-d17942a2b76a-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/11/photo-1441716844725-09cedc13a4e7-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_136984760-150x150.jpg",
    },
    {
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/11/photo-1437651025703-2858c944e3eb-150x150.jpg",
    },
  ];
  return (
    <>
      <div
        className=" h-[448px] bg-cover  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="one"
          className="flex h-full  items-center w-[450px] md:w-full px-[15px] max-w-[1180px] mx-auto"
        >
          <div className="  flex  flex-col leading-extra-loose  animate__backInLeft animate__animated">
            <h1 className=" mx-[15px]  text-white     text-[42px] font-bold tracking-wide ">
              Blog Full Right Sidebar With Frame
            </h1>
            <p className=" mx-[15px] mt-[13px]  text-[#fff]     text-[16px]  tracking-wide ">
              Caption aligned here
            </p>
          </div>
        </div>
      </div>

      <div className=" md:w-full w-[470px]  md:flex  max-w-[1180px] mx-auto mb-[50px]">
        <div className=" w-full md:w-[65%]  ml-[15px] pt-[60px] px-[18px]">
          <div className="  mb-[40px] shadow-md">
            <div className=" bg-black  overflow-hidden ">
              <img
                className="  hover:transform hover:scale-110  hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/pexels-photo.jpg"
                width="1920"
                height="1280"
              ></img>
              {/* <div className="  absolute top-0 left-0 w-full bg-black h-full opacity-25">view</div> */}
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3">
                  <div className=" flex items-center gap-3">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Blog, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">5</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    Pack wisely before traveling
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be...
                </p>
                <div className=" w-full">
                  <Link to={"/blogDetail"}>
                    <button className="    mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-[40px] shadow-md">
            <div className=" bg-black overflow-hidden ">
              <img
                className=" hover:transform hover:scale-110 hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_195507533.jpg"
                width="1920"
                height="1280"
              ></img>
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3">
                  <div className=" flex items-center gap-3">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Blog, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">2</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    How to travel with paper map
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be...
                </p>
                <button className=" mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" mb-[40px] shadow-md">
            <div className=" bg-black overflow-hidden ">
              <img
                className=" hover:transform hover:scale-110 hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_151616084.jpg"
                alt
                width="1920"
                height="1280"
              ></img>
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3">
                  <div className=" flex items-center gap-3">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Masonry, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">1</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    Introducing this amazing city
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be...
                </p>
                <button className=" mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" mb-[40px] shadow-md">
            <div className=" bg-black overflow-hidden ">
              <img
                className=" hover:transform hover:scale-110 hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/photo-1459255418679-d6424da9ee33.jpg"
                alt
                width="1920"
                height="1280"
              ></img>
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3">
                  <div className=" flex items-center gap-3">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Blog, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">1</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    Change your place and get the fresh air
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be...
                </p>
                <button className=" mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" mb-[40px] shadow-md">
            <div className=" bg-black overflow-hidden ">
              <img
                className=" hover:transform hover:scale-110 hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_166193831.jpg"
                alt
                width="1920"
                height="1280"
              ></img>
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3">
                  <div className=" flex items-center gap-3">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Masonry, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">8</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    Pityful a rethoric question ran
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be...
                </p>
                <button className=" mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" mb-[40px]  shadow-md">
            <div className=" bg-black overflow-hidden ">
              <img
                className=" hover:transform hover:scale-110 hover:opacity-60   duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_210601591.jpg"
                alt
                width="1920"
                height="1280"
              ></img>
            </div>
            <div className=" px-[50px] pt-[50px] pb-[30px]">
              <div className=" w-full mb-[22px]">
                <div className=" flex flex-wrap gap-3 ">
                  <div className=" flex items-center gap-3 ">
                    <CiClock2 />
                    <p className=" text-[13px] text-[#468ae7]">June 6, 2016</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <AiOutlineFileText />
                    <p className=" text-[13px] text-[#468ae7]">John Smith</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <HiOutlineFolder />
                    <p className=" text-[13px] text-[#468ae7]">
                      Blog, Uncategorized
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <BiMessageRounded />
                    <p className=" text-[13px] text-[#468ae7]">1</p>
                  </div>
                </div>
                <div>
                  <h1 className=" font-sans text-[38px] font-[800] leading-extra-loose  tracking-wide ">
                    Even the all-powerful Pointing
                  </h1>
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper. Nullam quis risus eget urna mollis ornare vel
                  eu leo. Donec id elit non mi porta gravida at eget metus.
                  Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                  cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa justo sit amet risus.
                </p>
                <button className=" mt-[33px] text-[14px] bg-[#468ae7] py-[12px] px-[27px] text-white font-[600]">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div>
            <Pagination total={4} size="lg" radius="xs" />
          </div>
        </div>

        <div className="  w-full  md:w-[35%] mr-[15px] pt-[60px] px-[18px]">
          <div className=" mb-[50px]">
            <div className=" mb-[28px]">
              <h2 className=" text-[#383838] text-[16px] font-[700] mr-[28px] inline-block">
                TEXT WIDGET
              </h2>
            </div>
            <div>
              <p className=" text-[14px] text-[#8c8c8c]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                ratione ducimus molestias dolor debitis laudantium voluptas modi
                Voluptatibus, rem? Eaque consectetur alias blanditiis?
              </p>
            </div>
          </div>
          <div className=" mb-[50px]">
            <div className=" mb-[28px]">
              <h2 className=" text-[#383838] text-[16px] font-[700] mr-[28px] inline-block">
                RECENT WORKS
              </h2>
            </div>
            <div className=" flex flex-wrap gap-3">
              {image?.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item?.src} width="103" height="103" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" mb-[50px]">
            <div className=" mb-[28px]">
              <h2 className=" text-[#383838] text-[16px] font-[700] mr-[28px] inline-block">
                RECENT COMMENTS
              </h2>
            </div>
            <div>
              <ul className=" leading-[1.7] text-[14px] text-[#8c8c8c]">
                <li className=" my-[13px]">
                  <span>John Smit</span> on
                  <a className=" text-black"> Pack wisely before traveling</a>
                </li>
                <hr />
                <li className=" my-[13px]">
                  <span>John Smit</span> on
                  <a className=" text-black"> Pack wisely before traveling</a>
                </li>
                <hr />
                <li className=" my-[13px]">
                  <span>John Smit</span> on
                  <a className=" text-black"> Gallery Post Format</a>
                </li>
                <hr />
                <li className=" my-[13px]">
                  <span>John Smit</span> on
                  <a className=" text-black"> Standard Post Type</a>
                </li>
                <hr />
                <li className=" my-[13px]">
                  <span>John Smit</span> on
                  <a className=" text-black"> Pack wisely before traveling</a>
                </li>
                <hr />
              </ul>
            </div>
          </div>
          <div>
            <div className=" mb-[28px]">
              <h2 className=" text-[#383838] text-[16px] font-[700] mr-[28px] inline-block">
                TAG CLOUD
              </h2>
            </div>
            <div>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Article
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Building
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Constructions
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Industry
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Metal
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Mining
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Nature
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                News
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Oil
              </button>
              <button className=" border py-[10px] px-[18px] text-[#484848] text-[12px] font-[500] mr-[10px] mb-[10px]">
                Polymer
              </button>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#one"
        className={up ? " z-[200] fixed bottom-[30px] right-[30px]" : "hidden"}
      >
        <button className=" w-[40px] h-[40px] bg-[#DBDBDB] text-[#4B92E4] hover:transform hover:translate-y-[-5px] duration-300 flex justify-center items-center rounded-full">
          <IoIosArrowUp />
        </button>
      </a>
    </>
  );
};

export default Blog;
