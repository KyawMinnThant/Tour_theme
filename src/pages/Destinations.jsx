import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      link: "southAmerica",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-800x960.jpg",
      name: "South America",
      tours: 3,
    },
    {
      id: 2,
      link: "europe",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_255194035-800x960.jpg",
      name: "Europe",
      tours: 7,
    },
    {
      id: 3,
      link: "easternEurope",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/photodune-488847-venice-m-800x960.jpg",
      name: "Eastern Europe",
      tours: 2,
    },
    {
      id: 4,
      link: "asia",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-800x960.jpg",
      name: "Asia",
      tours: 5,
    },
    {
      id: 5,
      link: "america",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/Fotolia_16069076_Subscription_Monthly_XXL-800x960.jpg",
      name: "America",
      tours: 4,
    },
    {
      id: 6,
      link: "africa",
      src: "https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-800x960.jpg",
      name: "Africa",
      tours: 3,
    },
  ];

  return (
    <>
      <div className=" bg-about-main flex flex-col justify-center gap-4 items-center bg-cover bg-center h-[250px] sm:h-[210px] md:h-[500px] w-auto relative font-sans text-white text-center">
        <p className=" text-4xl md:text-7xl font-bold">Destinations</p>
        <p className=" text-xl sm:text-2xl">Explore Tours By Destinations</p>
      </div>

      <div>
        <div className="container flex justify-center flex-wrap  mt-10 mx-auto">
          {destinations?.map((place) => {
            return (
              <div
                key={place.id}
                className=" mb-[40px] px-[20px] w-[430px] md:w-[383px] transition-all"
              >
                <div
                  className=" bg-cover overflow-hidden h-[516px] md:h-[416px]"
                  style={{
                    backgroundImage: `url(${place.src})`,
                  }}
                >
                  {/* <img className="" src={place?.src} alt="" /> */}
                  <div className="h-[516px] md:h-[416px] pt-[470px] md:pt-[370px] hover:pt-[430px] hover:md:pt-[340px] card relative">
                    <div className="mx-[20px]">
                      <div className=" flex justify-between mb-[15px]">
                        <p className=" flex justify-start items-center gap-1 text-lg text-white font-bold">
                          <TfiLocationPin />
                          {place.name}
                        </p>
                        <p className=" text-blue-500">{place.tours} tours</p>
                      </div>
                      <div>
                        <Link to={`/tour-destination/${place.link}`}>
                          <a className="text-blue-500 font-bold text-xs cursor-pointer">
                            VIEW ALL TOURS
                          </a>
                        </Link>
                        <div className=" h-1 bg-blue-500 invisible hover:visible"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destinations;
