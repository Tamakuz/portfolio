"use client";

import Image from "next/image";
import React from "react";
import foto from "../../public/foto.jpeg";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import { FaGift } from "react-icons/fa6";
import TooltipReuseble from "./tooltip-reuseble";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";

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
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};

const NavbarMobile = () => {
  return (
    <div className="md:hidden flex w-full h-[100px] fixed bottom-0 shadow-md">
      <div className="bg-blue-400 mx-3 my-3 w-full rounded-full flex justify-center items-center container">
        <div className="px-3">
          <Button variant="outline" size="icon" className="rounded-full">
            <AiFillHome className="text-2xl" />
          </Button>
        </div>
        <div className="grow flex justify-center items-center relative">
          <Image
            src={foto}
            alt="logo"
            width={70}
            height={70}
            className="rounded-full absolute -bottom-3"
          />
        </div>
        <ButtonMenuDrawer />
      </div>
    </div>
  );
};

const NavbarDesktop = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="py-2 md:block hidden border-b border-secondary">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={foto}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Jovan Panji Pratama</h2>
            <span className="inline-flex items-center gap-1 text-sm">
              <GoDotFill /> Based in jawa imur ID
            </span>
          </div>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menus</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {routeLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        description={component.description}
                        icon={component.icon}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-3">
          <TooltipReuseble text="Saweria">
            <Button variant="outline" size="icon" className="rounded-full">
              <Link href="https://saweria.co/JovanTama" target="_blank">
                <FaGift />
              </Link>
            </Button>
          </TooltipReuseble>
          <Button variant="outline" size="icon" className="rounded-full">
            <BsMoonStarsFill
              onClick={() => setTheme("dark")}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <LuSunMoon
              onClick={() => setTheme("light")}
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div>{icon}</div>
        <div>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {description}
          </p>
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

const ButtonMenuDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="px-3">
          <Button variant="outline" size="icon" className="rounded-full">
            <BsMenuButtonWideFill className="text-xl" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menus</DrawerTitle>
          <DrawerDescription>Choose for explore</DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm h-fit grid grid-cols-2 gap-5 my-5 container item">
          {routeLinks.map((component) => (
            <div
              key={component.title}
              className="flex justify-center items-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex flex-col w-full h-fit py-5 gap-3"
              >
                {component.icon}
                <span>{component.title}</span>
              </Button>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
