import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from "@/components/magicui/marquee";
import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const skills = [
  {
    icon: SiTypescript,
    color: "#3178C6",
    title: "TypeScript",
    description: "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    icon: SiJavascript,
    color: "#F7DF1E",
    title: "JavaScript",
    description: "High-level, often just-in-time compiled language that conforms to the ECMAScript specification.",
  },
  {
    icon: SiReact,
    color: "#61DAFB",
    title: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    icon: SiHtml5,
    color: "#E34F26",
    title: "HTML5",
    description: "Standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    icon: SiCss3,
    color: "#1572B6",
    title: "CSS3",
    description: "Style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    icon: SiNodedotjs,
    color: "#339933",
    title: "Node.js",
    description: "Back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  },
  {
    icon: SiExpress,
    color: "#000000",
    title: "Express",
    description: "Back end web application framework for Node.js, designed for building web applications and APIs.",
  },
  {
    icon: SiNextdotjs,
    color: "#000000",
    title: "Next.js",
    description: "React framework that enables functionality such as server-side rendering and generating static websites.",
  },
  {
    icon: SiFirebase,
    color: "#FFCA28",
    title: "Firebase",
    description: "Platform developed by Google for creating mobile and web applications.",
  },
  {
    icon: SiVercel,
    color: "#000000",
    title: "Vercel",
    description: "Cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.",
  },
  {
    icon: SiGit,
    color: "#F05032",
    title: "Git",
    description: "Distributed version control system to track changes in source code during software development.",
  },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <div className="space-y-2 container">
      <motion.div
        className="flex items-center gap-2 text-2xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MdOutlineMiscellaneousServices size={30} />
        <h2 className="capitalize">Skills</h2>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between gap-3 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="dark:text-neutral-400">
          Here are the outstanding skills I am ready to deliver to you
        </p>
      </motion.div>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:150s]">
          {skills.map((skill, index) => (
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
                <skill.icon color={skill.color} />
                <h3>{skill.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {skill.description}
              </p>
              <BorderBeam
                size={100}
                duration={15}
                delay={9}
                colorFrom="#E0E0E0"
                colorTo="#B0B0B0"
              />
            </motion.div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white via-transparent dark:from-neutral-950 dark:via-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white via-transparent dark:from-neutral-950 dark:via-transparent"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
