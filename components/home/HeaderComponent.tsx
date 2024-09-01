'use client';
import ParallaxText from '@/components/ui/paralax-text';
import Ripple from '@/components/ui/riple';
import Image from 'next/image';
import React from 'react'

const HeaderComponent = () => {
  return (
    <div id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src="/foto.jpeg"
        alt="header"
        width={200}
        height={200}
        className="rounded-full grayscale hover:grayscale-0"
      />
      <div className="absolute bottom-0 left-0 w-full">
        <ParallaxText
          baseVelocity={1}
          className="text-[150px] text-neutral-950 dark:text-neutral-50 font-extrabold uppercase opacity-25"
        >
          Fullstack Web Developer
        </ParallaxText>
      </div>
      <Ripple />
    </div>
  );
}

export default HeaderComponent;