import React from "react";
import { MdWeb, MdCode, MdDeveloperMode, MdStorage } from "react-icons/md";

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
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md border border-neutral-200 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-800 "
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
    </div>
  );
};

export default CardServices;
