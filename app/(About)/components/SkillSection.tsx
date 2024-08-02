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
import IconCloud from "@/components/magicui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode", 
];

const SkillSection = () => {
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
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </>
  );
};

export default SkillSection;
