"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import NavBtn from "./nav-btn";
import { Separator } from "@/components/ui/separator";
import NavItem from "./nav-item";
import NavTheme from "./nav-theme";

const NavMenu = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleHamburger = (status: boolean) => {
    setActive(status);
  };

  return (
    <>
      <NavBtn active={active} toggleHamburger={toggleHamburger} />
      {active && (
        <div
          className="nav-menu-bg absolute left-0 top-0 h-screen w-full bg-gradient-to-r from-black/[.13] via-black/[.16] to-black/[.35] opacity-1 pointer-events-auto"
          onClick={() => setActive(false)}
        ></div>
      )}
      <motion.div
        initial={{ x: "100%", borderRadius: "50%" }}
        animate={{ x: active ? 0 : "100%", borderRadius: active ? "0%" : "50%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "nav-menu pointer-events-auto absolute right-0 top-0 flex h-full w-full max-w-lg flex-col justify-between bg-zinc-800 pb-12 pt-[clamp(3.5rem,10vh,5rem)] text-6xl text-white dark:bg-zinc-200 overflow-hidden"
        )}
      >
        <div className="p-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: active ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-2xl mb-4 dark:text-neutral-800 font-semibold">
              Menu
            </h2>
          </motion.div>
          <Separator />
          <NavItem active={active} />
        </div>
        <NavTheme />
      </motion.div>
    </>
  );
};

NavMenu.displayName = "NavMenu";

export default NavMenu;