import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from "@/components/magicui/marquee";
import React from "react";
import { motion } from "framer-motion";
import {
  MdWeb,
  MdCode,
  MdDeveloperMode,
  MdStorage,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

const services = [
  {
    icon: <MdWeb />,
    title: "Front End Development",
    tag: "#frontend",
    description:
      "Create visually appealing and responsive user interfaces using modern front-end technologies.",
  },
  {
    icon: <MdCode />,
    title: "Back End Development",
    tag: "#backend",
    description:
      "Build robust and scalable server-side applications with secure and efficient backend technologies.",
  },
  {
    icon: <MdDeveloperMode />,
    title: "Fullstack Development",
    tag: "#fullstack",
    description:
      "Develop complete web applications from front-end to back-end, ensuring seamless integration.",
  },
  {
    icon: <MdStorage />,
    title: "Database Design",
    tag: "#database",
    description:
      "Design and manage efficient, scalable databases to support your application's data needs.",
  },
];

const CardServices = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-2 container">
      <motion.div 
        className="flex items-center gap-2 text-2xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MdOutlineMiscellaneousServices size={30} className="opacity-50" />
        <h2 className="capitalize opacity-50">Services</h2>
      </motion.div>
      <motion.div 
        className="flex flex-col justify-between gap-3 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="dark:text-neutral-400 opacity-50">
          Here are the outstanding services I am ready to deliver to you
        </p>
      </motion.div>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:150s]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={variants}
              className="relative w-[400px] rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md border border-neutral-200 p-6 dark:border-neutral-800 dark:bg-neutral-800 "
            >
              <div className="flex items-center space-x-2">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <span className="text-xs text-neutral-500 dark:text-blue-400">
                {service.tag}
              </span>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
              <BorderBeam size={100} duration={15} delay={9} colorFrom="#E0E0E0" colorTo="#B0B0B0" />
            </motion.div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-neutral-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-neutral-950"></div>
      </div>
    </div>
  );
};

export default CardServices;
