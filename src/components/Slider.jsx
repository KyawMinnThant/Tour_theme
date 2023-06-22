import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const swiperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        // Configuration options
        autoplay: {
          delay: 3000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Enable autoplay even on user interaction
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Other configuration options...
      });

      // Pause autoplay when component unmounts
      return () => {
        swiper.autoplay.stop();
      };
    }
  }, []);

  const handlePlayPause = () => {
    setAutoplay(!autoplay);
    if (swiperRef.current) {
      if (autoplay) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      {/* Navigation controls */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Custom autoplay control */}
      <button onClick={handlePlayPause}>{autoplay ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Slider;
