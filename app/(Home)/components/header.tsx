import BlurIn from '@/components/magicui/blur-in';
import Ripple from '@/components/ui/riple';
import React from 'react';

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BlurIn
        word="TAMA"
        className="z-10 whitespace-pre-wrap text-center text-3xl bg-gradient-to-t from-black to-gray-300/80 bg-clip-text text-transparent"
      />
      <Ripple />
    </div>
  );
}

export default Header