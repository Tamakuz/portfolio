import Marquee from "@/components/magicui/marquee";
import React from "react";
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
  return (
    <div className="space-y-2 container">
      <div className="flex items-center gap-1 text-xl font-medium">
        <MdOutlineMiscellaneousServices />
        <h2 className="capitalize">Services</h2>
      </div>
      <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
        <p className="dark:text-neutral-400">
          Here are the outstanding services I am ready to deliver to you
        </p>
      </div>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:150s]">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[400px] rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md border border-neutral-200 p-6 dark:border-neutral-800 dark:bg-neutral-800 "
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
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-neutral-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-neutral-950"></div>
      </div>
    </div>
  );
};

export default CardServices;
