"use client";

import React from "react";
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
