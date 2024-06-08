"use client";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const SkillSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ">
          <FaCode />
          <h2 className="capitalize">Skills</h2>
        </div>
        <div className="text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            My skills and experience
          </p>
        </div>
        <div className="carausel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden border-b-2"
              >
                <img
                  src={image}
                  alt="image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
