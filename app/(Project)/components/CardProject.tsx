import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface CardProjectProps {
  dataProject: ProjectData;
}

const CardProject: React.FC<CardProjectProps> = ({
  dataProject
}) => {
  return (
    <Link
      href={`projects/${dataProject.name}`}
      className="w-full md:w-fit rounded-lg shadow transition duration-300 hover:shadow-lg relative cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-lg"
      >
        <Image
          src={dataProject.image}
          width={500}
          height={300}
          alt={dataProject.name}
          priority
          className="rounded-t-lg"
        />
      </motion.div>
      <div className="p-4 space-y-1">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-lg font-semibold"
        >
          {dataProject.name}
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-sm text-neutral-600 dark:text-neutral-400 opacity-50"
        >
          {dataProject.description}
        </motion.p>
      </div>
    </Link>
  );
};

export default CardProject;
