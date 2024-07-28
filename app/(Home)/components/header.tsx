"use client";
import BlurIn from "@/components/magicui/blur-in";
import Marquee from "@/components/magicui/marquee";
import Ripple from "@/components/ui/riple";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Header = () => {

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Image src="/foto.jpeg" alt="header" width={200} height={200} className="rounded-full grayscale hover:grayscale-0" />
      <div className="absolute bottom-0 left-0 w-full">
        <Marquee className="[--duration:150s]" reverse>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index}>
              <span className="text-[100px] leading-[1] font-bold opacity-25 italic">
                FULLSTACK DEVELOPER
              </span>
            </div>
          ))}
        </Marquee>
      </div>
      <Ripple />
    </div>
  );
};

export default Header;
