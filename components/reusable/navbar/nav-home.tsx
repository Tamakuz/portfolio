import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2 } from "lucide-react";

const NavHome = () => {
  return (
    <motion.div
      initial={{ x: "-500px" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      className="pointer-events-auto absolute left-[2.5%] top-12 md:top-7 dark:text-white text-black"
    >
      <div className="overflow-hidden">
        <Link href="/" className="group inline-flex items-center gap-x-2">
          <Code2 className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]" />
          <p className="text-md font-semibold uppercase">Code with Tama</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavHome;
