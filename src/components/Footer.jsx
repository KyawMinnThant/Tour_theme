import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaVimeoV,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white"
      style={{ backgroundColor: "#202020" }}
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <img
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/themes/traveltour/images/logo.png"
              alt=""
            />
            <p className=" py-7 pe-6 text-slate-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className=" flex flex-row md:flex-col lg:flex-row md:items-start lg:items-center lg:justify-start gap-5">
              <img
                className="w-[150px]"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/award-1.png"
                alt=""
              />
              <img
                className="w-[70px]"
                src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/award-2.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className=" h-4 font-medium">TOP DESTINATIONS</p>

            <div className=" grid w-[230px] grid-cols-3 gap-3 mt-10">
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/africa"}>
                  <div
                    className="h-full bg-contain bg-no-repeat bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-600x600.jpg)`,
                    }}
                  >
                    <p className=" z-10 text-xs">Africa</p>

                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/america"}>
                  <div
                    className="h-full bg-no-repeat bg-contain bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/Fotolia_16069076_Subscription_Monthly_XXL-600x600.jpg)`,
                    }}
                  >
                    <p className=" z-10 text-xs">America</p>
                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/asia"}>
                  <div
                    className="h-full bg-no-repeat bg-contain bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-600x600.jpg)`,
                    }}
                  >
                    <p className=" z-10 text-xs">Asia</p>
                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/easternEurope"}>
                  <div
                    className="h-full bg-no-repeat bg-contain bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/photodune-488847-venice-m-600x600.jpg)`,
                    }}
                  >
                    <p className=" w-full ps-3 z-10 text-xs">Eastern Europe</p>
                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/europe"}>
                  <div
                    className="h-full bg-no-repeat bg-contain bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_255194035-600x600.jpg)`,
                    }}
                  >
                    <p className=" z-10 text-xs">Europe</p>
                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="w-[71.09px] h-[71.09px] relative">
                <Link to={"/tour-destination/southAmerica"}>
                  <div
                    className="h-full bg-no-repeat bg-contain bg-center object-cover hover:scale-105 hover:transition-all flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-600x600.jpg)`,
                    }}
                  >
                    <p className=" w-full ps-3 z-10 text-xs">South America</p>
                    <div className=" footer-overlay"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" ps-3">
            <p className=" h-4 font-medium">CONTACT INFO</p>
            <p className=" h-6 font-normal mt-10 text-slate-400">
              Address : 12 Main Street Pt. London
            </p>
            <p className=" h-6 font-normal mt-4 text-slate-400">
              Phone : +44 3656 4567
            </p>
            <p className=" h-6 font-normal mt-4 text-slate-400">
              contact@traveltourtheme.com
            </p>
            <div className=" flex items-center gap-5 mt-5">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaVimeoV />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex w-full flex-col items-center justify-center py-10 md:flex-row md:justify-center"
        style={{ backgroundColor: "#181818" }}
      >
        <div
          variant="small"
          className="mb-4 text-center text-slate-400 text-xs md:text-base w-[300px] md:w-full font-normal text-blue-gray-900 md:mb-0"
        >
          COPYRIGHT {currentYear}{" "}
          <a href="https://material-tailwind.com/">GOODLAYERS,</a> All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
