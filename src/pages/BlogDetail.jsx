import React, { useState } from "react";
import bgImage from "../assets/section-bg-4.jpg";
import WOW from "wow.js";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFileText } from "react-icons/ai";
import { HiOutlineFolder } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import "animate.css";

const wowjs = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wowjs.init();

const BlogDetail = () => {
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
  return (
    <>
      {/* top bg image */}
      <div
        className=" h-[448px] bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="one"
          className="flex h-full  items-center max-w-[500px] md:w-full px-[15px] md:max-w-[1180px] mx-auto"
        >
          <div className="  flex   text-white">
            <div className=" flex flex-col pr-[20px] border-r-[1px]  overflow-hidden">
              <h1 className=" text-[27px] font-[700] tracking-[1px] animate__fadeInRight wow">06</h1>
              <p className=" text-[14px] tracking-[1px] text-[#b1b1b1] animate__fadeInRight wow">JUN</p>
            </div>
            <div className=" flex flex-col gap-1 overflow-hidden pl-[30px]">
              <div className=" flex flex-wrap gap-3 animate__fadeInLeft wow">
                <div className=" flex items-center gap-3">
                  <CiClock2 />
                  <p className=" text-[13px] ">June 6, 2016</p>
                </div>
                <div className=" flex items-center gap-3">
                  <AiOutlineFileText />
                  <p className=" text-[13px] ">John Smith</p>
                </div>
                <div className=" flex items-center gap-3">
                  <HiOutlineFolder />
                  <p className=" text-[13px] ">Masonry, Uncategorized</p>
                </div>
                <div className=" flex items-center gap-3">
                  <BiMessageRounded />
                  <p className=" text-[13px] ">1</p>
                </div>
              </div>
              <h1 className="   text-white animate__fadeInLeft wow     text-[42px] font-bold tracking-wide ">
                Pack wisely before traveling
              </h1>
            </div>
           
          </div>
        </div>
      </div>

      <div className=" md:w-full max-w-[500px]  md:flex  md:max-w-[1180px] mx-auto">
        <div className=" w-full md:w-[65%]  ml-[15px] pt-[60px] px-[15px]">
          <div className="  mb-[40px] ">
            <div className=" bg-black   ">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/pexels-photo.jpg"
                width="1920"
                height="1280"
              ></img>
              {/* <div className="  absolute top-0 left-0 w-full bg-black h-full opacity-25">view</div> */}
            </div>
            <div className="  pt-[50px] pb-[30px]">
              {/* icon */}
              {/* <div className=" flex flex-wrap gap-3">
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
                </div> */}
              <div>
                <p className=" text-[14px] text-[#8c8c8c]">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot,
                  <p className=" inline font-[700] text-[#8c8c8c]">
                    which was created for the bliss of souls like mine.
                  </p>
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be incapable of drawing a single stroke at the present
                  moment; and yet I feel that I never was a greater artist than
                  now.
                </p>
              </div>
              <div>
                <h1 className=" text-[22px] my-[22px] font-[700] leading-extra-loose   ">
                  When, while the lovely valley teems with
                </h1>
              </div>
              <div>
                <p className="  text-[14px] text-[#8c8c8c]">
                  vapour around me, and the meridian sun strikes the upper
                  surface of the impenetrable foliage of my trees, and but a few
                  stray gleams steal into the inner sanctuary, I throw myself
                  down among the tall grass by the trickling stream; and, as I
                  lie close to the earth, a thousand unknown plants are noticed
                  by me: when I hear the buzz of the little world among the
                  stalks, and grow familiar with the countless indescribable
                  forms of the insects and flies, then I feel the presence of
                  the Almighty, who formed us in his own image, and the breath
                  of that universal love which bears and sustains us, as it
                  floats around us in an eternity of blist.
                </p>
              </div>

              <div>
                <p className=" my-[22px] p-[30px]  bg-[#f5f5f5] overflow-hidden border-l-[2px] italic text-[#777] text-[17px]">
                 <div className=" animate__fadeInLeft wow ">
                 I sink under the weight of the splendour of these visions!A
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which
                 </div>
                </p>
              </div>
              <div>
                <p className="  text-[14px] text-[#8c8c8c]">
                  I sink under the weight of the splendour of these visions!A
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquis
                </p>
              </div>
              <div>
                <h1 className=" text-[18px] my-[22px] font-[700] leading-extra-loose   ">
                  I throw myself down among the tall grass
                </h1>
              </div>
              <div>
                <p className="  text-[14px] text-[#8c8c8c]">
                  I should be incapable of drawing a single stroke at the
                  present moment; and yet I feel that I never was a greater
                  artist than now. When, while the lovely valley teems with
                  vapour around me, and the meridian sun strikes the upper
                  surface of the impenetrable foliage of my trees, and but a few
                  stray gleams steal into the inner sanctuary, I throw myself
                  down among the tall grass by the trickling stream; and, as I
                  lie close to the earth, a thousand unknown plants are noticed
                  by me: when I hear the buzz of the little world among the
                  stalks, and grow familiar with the countless indescribable
                  forms of the insects and
                </p>
              </div>
              <div className=" mt-[30px]">
                <img
                  src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-1500x1000.jpg"
                  width="1920"
                  height="1280"
                ></img>
                {/* <div className="  absolute top-0 left-0 w-full bg-black h-full opacity-25">view</div> */}
              </div>
              <div className=" mt-[45px]">
                <h1 className=" text-[18px] text-[#383838] font-[700] leading-extra-loose   ">
                  Text, that where it came from it
                </h1>
              </div>
              <div className=" my-[20px]">
                <p className="  text-[14px] text-[#8c8c8c] leading-[1.7]">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar. The Big Oxmox advised her not to do so, because
                  there were thousands of bad Commas, wild Question Marks and
                  devious Semikoli, but the Littl
                </p>
              </div>
              <div>
                <ul className=" list-disc ml-[35px] mb-[20px] text-[#8c8c8c] leading-[2] text-[14px]">
                  <li>Far far away, behind the word mountain</li>
                  <li>When she reached the first hills</li>
                  <li>A small river named Duden flows</li>
                  <li>A small river named Duden flows by their plat.</li>
                  <li>Far far away, behind the word mountain</li>
                </ul>
              </div>
              <div>
                <p className="  text-[14px] text-[#8c8c8c] leading-[1.7]">
                  Copy Writers ambushed her, made her drunk with Longe and
                  Parole and dragged her into their agency, where they abused
                  her for their projects again and again. And if she hasn’t been
                  rewritten, then they are still using her.Far far away, behind
                  the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live
                  in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean. A small river named Duden flows by their
                  plate.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center mb-[90px]">
            <div className=" flex items-center">
              <div className=" flex gap-3 border-e-2 pr-[30px] items-center">
                <span className=" text-[23px] font-[700] ">0</span>
                <span className=" text-[15px] tracking-[1px]">SHARE</span>
              </div>
              <div className=" flex gap-4 pl-[30px]">
                <FaFacebookF />
                <FaGooglePlusG />
                <FaPinterestP />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className=" relative border-y-[1px] pb-[50px]">
            <div className=" w-[80px] h-[80px] mx-auto mb-[37px] ">
              <img
                className=" w-[80px]  rounded-full absolute top-[-40px]"
                // className=" rounded-full absolute top-[-40px] w-auto mx-auto "
                src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=90&d=mm&r=g"
                height={90}
                width={90}
              />
            </div>
            <div className=" flex flex-col text-center">
              <span className=" text-[#b1b1b1] italic text-[14px] mb-[9px] tracking-[0.5px]">
                About the author
              </span>
              <h1 className=" text-[26px] font-[700] mb-[22px]">John Smith</h1>
              <p className="  text-[14px] text-[#8c8c8c]">
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
              </p>
            </div>
          </div>
          <h1 className=" text-center my-[50px] text-[#464646] text-[16px] tracking-[2px] font-[700]">
            5 RESPONSES
          </h1>
          <div className=" w-full animate__fadeInLeft wow flex justify-between border-b-[1px] pb-[40px] mb-[40px]">
            <div className=" flex gap-10">
              <img
                className=" rounded-full w-[80px] h-[80px]"
                src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=90&d=mm&r=g"
                height={90}
                width={90}
              />
              <div className=" flex flex-col gap-3">
                <h1 className=" text-[#464646] text-[19px] font-[700] ">
                  John Smith
                </h1>
                <span className=" text-[#b1b1b1] italic text-[14px]">
                  November 26, 2016 at 3:03 pm
                </span>
                <p className=" text-[#8c8c8c] text-[14px]">
                  Tortor Parturient Amet Lorem
                </p>
              </div>
            </div>
            <span className=" text-[15px] font-[700] tracking-[1.5] text-[#e1e1e1]">
              REPLY
            </span>
          </div>
          <div className=" w-full animate__fadeInLeft wow flex justify-between border-b-[1px] pb-[40px] mb-[40px]">
            <div className=" flex gap-10">
              <img
                className=" rounded-full w-[80px] h-[80px]"
                src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=90&d=mm&r=g"
                height={90}
                width={90}
              />
              <div className=" flex flex-col gap-3">
                <h1 className=" text-[#464646] text-[19px] font-[700] ">
                  John Smith
                </h1>
                <span className=" text-[#b1b1b1] italic text-[14px]">
                  November 26, 2016 at 3:04 pm
                </span>
                <p className=" text-[#8c8c8c] text-[14px]">
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Donec id elit non mi porta gravida at eget metus. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
            <span className=" text-[15px] font-[700] tracking-[1.5] text-[#e1e1e1]">
              REPLY
            </span>
          </div>
          <div className=" w-[90%] animate__fadeInLeft wow ml-auto flex justify-between border-b-[1px] pb-[40px] mb-[40px]">
            <div className=" flex gap-10">
              <img
                className=" rounded-full w-[80px] h-[80px]"
                src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=90&d=mm&r=g"
                height={90}
                width={90}
              />
              <div className=" flex flex-col gap-3">
                <h1 className=" text-[#464646] text-[19px] font-[700] ">
                  John Smith
                </h1>
                <span className=" text-[#b1b1b1] italic text-[14px]">
                  February 7, 2017 at 6:22 pm
                </span>
                <p className=" text-[#8c8c8c] text-[14px]">
                  Nullam quis risus eget urna mollis ornare vel eu leo.
                </p>
              </div>
            </div>
            <span className=" text-[15px] font-[700] tracking-[1.5] text-[#e1e1e1]">
              REPLY
            </span>
          </div>
          <div className=" w-[80%] animate__fadeInLeft wow ml-auto flex justify-between border-b-[1px] pb-[40px] mb-[40px]">
            <div className=" flex gap-10">
              <img
                className=" rounded-full w-[80px] h-[80px]"
                src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=90&d=mm&r=g"
                height={90}
                width={90}
              />
              <div className=" flex flex-col gap-3">
                <h1 className=" text-[#464646] text-[19px] font-[700] ">
                  John Smith
                </h1>
                <span className=" text-[#b1b1b1] italic text-[14px]">
                  February 7, 2017 at 6:22 pm
                </span>
                <p className=" text-[#8c8c8c] text-[14px]">
                  Nullam quis risus eget urna mollis ornare vel eu leo.
                </p>
              </div>
            </div>
            <span className=" text-[15px] font-[700] tracking-[1.5] text-[#e1e1e1]">
              REPLY
            </span>
          </div>

          {/* from */}
          <div className=" w-full mb-[30px] bg-[#F9F9F9] md:px-[55px] md:pt-[60px] md:pb-[40px] px-[30px] py-[45px]">
            <h1 className=" text-center mb-[40px] text-[#464646] text-[16px] tracking-[2px] font-[700]">
              LEAVE A REPlY
            </h1>
            <div className="  md:w-full max-w-[1150px] ">
              <div className=" max-w-[760px] mx-auto ">
                <div className=" mb-[14px]">
                  <textarea
                    className=" w-full  py-[18px] px-[22px] h-[223px] border "
                    cols="45"
                    rows="8"
                    placeholder="Comment*"
                  ></textarea>
                </div>
                <div className=" md:flex justify-between">
                  <input
                    className="w-full md:w-[49%] px-[22px] py-[16px] mb-[14px] border"
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    className="w-full md:w-[49%] px-[22px] py-[16px] mb-[14px] border"
                    type="text"
                    placeholder="Email*"
                  />
                </div>
                <div>
                  <input
                    className=" px-[22px] py-[16px] w-full border mb-[14px]"
                    type="text"
                    placeholder="subject"
                  />
                </div>
                <div className=" flex gap-1 mb-[40px]">
                  <input type="checkbox" />
                  <label className=" text-[#8c8c8c] text-[14px]" htmlFor="">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <div className=" w-full flex justify-center">
                  <button className=" bg-[#468ae7] text-[13px] tracking-[.8] font-[700] px-[33px] py-[15px] text-white">
                    POST COMMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="  w-full  md:w-[35%] mr-[15px] pt-[60px] px-[15px]">
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
            {/* <div className=" flex flex-wrap gap-3">
              {image?.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item?.src} width="103" height="103" />
                  </div>
                );
              })}
            </div> */}
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

export default BlogDetail;
