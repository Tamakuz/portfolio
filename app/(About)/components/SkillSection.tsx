"use client";
import React from "react";
import { FaCode, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import Slider, { Settings} from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const skills = [
  <FaHtml5 className="text-[150px] text-orange-500" />,
  <FaCss3Alt className="text-[150px] text-blue-500" />,
  <IoLogoJavascript className="text-[150px] text-yellow-500" />,
  <FaReact className="text-[150px] text-blue-400" />,
  <RiTailwindCssFill className="text-[150px] text-teal-400" />,
  <SiNextdotjs className="text-[150px] text-white" />,
  <SiShadcnui className="text-[150px] text-purple-500" />,
  <FaNodeJs className="text-[150px] text-green-500" />,
  <SiExpress className="text-[150px] text-gray-500" />,
  <DiMongodb className="text-[150px] text-green-600" />,
];

const SkillSection = () => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
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
            {skills.map((skill, index) => (
              <div key={index} className="overflow-hidden">
                {skill}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
