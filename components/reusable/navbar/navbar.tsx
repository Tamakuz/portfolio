"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaInfoCircle,
  FaBlog,
  FaProjectDiagram,
  FaRoad,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";
import NavHome from "./nav-home";
import NavMenu from "./nav-menu";

const routeLinks: {
  title: string;
  href: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: "About",
    href: "/about",
    description: "Learn more about me.",
    icon: <FaInfoCircle className="text-2xl" />,
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Read my latest posts.",
    icon: <FaBlog className="text-2xl" />,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "See my projects.",
    icon: <FaProjectDiagram className="text-2xl" />,
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    description: "My project plans.",
    icon: <FaRoad className="text-2xl" />,
  },
  {
    title: "Chat Room",
    href: "/chatroom",
    description: "Join the discussion.",
    icon: <FaComments className="text-2xl" />,
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch.",
    icon: <FaEnvelope className="text-2xl" />,
  },
];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        controls.start({ y: -100, opacity: 0 });
      } else {
        controls.start({ y: 0, opacity: 1 });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="pointer-events-none fixed z-[999] h-full w-full top-0"
    >
      <NavHome />
      <NavMenu />
    </motion.nav>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
