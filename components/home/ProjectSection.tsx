"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineInsertLink, MdOutlineList } from "react-icons/md";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const projectDatas = [
  {
    name: "Honey Movie",
    route: "/honey-movie",
    description:
      "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
  {
    name: "Product Video Example",
    route: "#",
    description: "Create product videos that convert.",
    image: "/project2.png",
    sourceCode: "https://github.com/Tamakuz/productvideoexemple",
    liveDemo: "https://productvideoexemple.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/productvideoexemple.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
];

const ProjectSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <div id="projects" className="space-y-2 container px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        className="flex items-center gap-2 text-2xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <MdOutlineList size={30} />
        <h2 className="capitalize">Projects</h2>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between gap-3 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="dark:text-neutral-400">
          Explore some of the projects I've developed
        </p>
      </motion.div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectDatas.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={controls}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full rounded-lg shadow-lg transition duration-500 hover:shadow-xl hover:scale-105 relative cursor-pointer overflow-hidden"
          >
            <Image
              src={project.image}
              width={500}
              height={300}
              alt={project.name}
              priority
              className="rounded-t-lg"
              placeholder="blur"
              blurDataURL="/path/to/your/loading-image.jpg"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="p-4 space-y-1"
            >
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href={project.sourceCode}
                >
                  <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 ">
                    <FaGithub size={22} />
                    <span className="text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400 opacity-70">
                      Source Code
                    </span>
                  </div>
                </a>
                <span className="text-neutral-400 dark:text-neutral-600">
                  |
                </span>
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href={project.liveDemo}
                >
                  <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 ">
                    <MdOutlineInsertLink size={22} />
                    <span className="text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400 opacity-70">
                      Live Demo
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ProjectSection;
