"use client";

import Image from "next/image";
import React from "react";
import foto from "../../public/foto.jpeg";
import { GoDotFill } from "react-icons/go";
import { Button } from "../../ui/button";
import { FaGift } from "react-icons/fa6";
import TooltipReuseble from "../tooltip-reuseble";
import Link from "next/link";
import { BsMenuButtonWideFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";
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
  return (
    <nav className="pointer-events-none fixed z-[999] h-full w-full top-0">
      <NavHome />
      <NavMenu />
    </nav>
  );
};


Navbar.displayName = "Navbar";

export default Navbar;
