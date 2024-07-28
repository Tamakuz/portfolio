import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const findMe = [
  {
    Icon: <FaGithub className="size-10" />,
    name: "GitHub",
    description: "Find me on GitHub",
    href: "#",
    cta: "Visit my GitHub",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/github.png"
          alt="GitHub"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black" />
      </div>
    ),
  },
  {
    Icon: <FaLinkedin className="size-10" />,
    name: "LinkedIn",
    description: "Connect with me on LinkedIn for professional networking.",
    href: "#",
    cta: "Visit my LinkedIn",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black" />
      </div>
    ),
  },
  {
    Icon: <FaInstagram className="size-10" />,
    name: "Instagram",
    description: "Follow me on Instagram for updates and more.",
    href: "#",
    cta: "Visit my Instagram",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/instagram.png"
          alt="Instagram"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black" />
      </div>
    ),
  },
  {
    Icon: <FaTiktok className="size-10" />,
    name: "TikTok",
    description: "Follow me on TikTok for fun and creative content.",
    href: "#",
    cta: "Visit my TikTok",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/tiktok.png"
          alt="TikTok"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black" />
      </div>
    ),
  },
];

const CardFindMe = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, transition: { duration: 0.5 } });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="space-y-2 container"
    >
      <div className="flex items-center gap-1 text-xl font-medium">
        <SiBuymeacoffee />
        <h2 className="capitalize">Find Me</h2>
      </div>
      <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
        <p className="dark:text-neutral-400">
          Find me on the following platforms: GitHub, Instagram, Facebook, and
          more
        </p>
      </div>
      <BentoGrid>
        {findMe.map((item, idx) => (
          <BentoCard key={idx} {...item} />
        ))}
      </BentoGrid>
    </motion.div>
  );
};

export default CardFindMe;
