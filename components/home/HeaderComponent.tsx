"use client";
import ParallaxText from "@/components/ui/paralax-text";
import Ripple from "@/components/ui/riple";
import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import Particles from "../magicui/particles";
import { useTheme } from "next-themes";
import createGlobe from "cobe";
import SparklesText from "../magicui/sparkles-text";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const HeaderComponent = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#1F2937"); // Default to text-neutral-800

  useEffect(() => {
    setColor(theme === "dark" ? "#6B7280" : "#1F2937"); // text-neutral-500 for dark theme, text-neutral-800 for light theme
  }, [theme]);

  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="container flex items-center justify-center w-full h-full">
        <div className="tracking-wide hidden lg:block">
          <Globe className="absolute -left-60 opacity-25" />
          <SparklesText
            colors={{ first: "#D1B3FF", second: "#FFC1D6" }}
            text="JOVAN PANJI PRATAMA"
            className="text-6xl font-bold text-neutral-950 dark:text-neutral-400"
          />
          <HoverBorderGradient
            containerClassName="rounded-full opacity-60 mt-2"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Sekedar Tukang Ketik 🐱‍🏍 😁</span>
          </HoverBorderGradient>
        </div>
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src="/foto.jpeg"
            alt="header"
            width={230}
            height={230}
            className="rounded-full grayscale hover:grayscale-0 animate-ripple absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Ripple />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <ParallaxText
          baseVelocity={1}
          className="text-[150px] text-neutral-950 dark:text-neutral-50 font-extrabold uppercase opacity-25"
        >
          Fullstack Web Developer
        </ParallaxText>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderGlobe = useCallback(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      opacity: 0.5,
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0, 0, 0],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [-6.2088, 106.8456], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  useEffect(() => {
    const cleanup = renderGlobe();
    return cleanup;
  }, [renderGlobe]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 800, height: 800, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export default HeaderComponent;
