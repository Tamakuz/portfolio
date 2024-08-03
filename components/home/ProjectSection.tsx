'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { MdOutlinePerson, MdOutlineList } from 'react-icons/md'
import CardProject from '@/app/(Project)/components/CardProject'
import Image from 'next/image'
import Link from 'next/link'

const projectDatas = [
  {
    name: "Honey Movie",    
    route: "/honey-movie",
    description: "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
  {
    name: "Honey Movie",    
    route: "/honey-movie",
    description: "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
  {
    name: "Honey Movie",    
    route: "/honey-movie",
    description: "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
  {
    name: "Honey Movie",    
    route: "/honey-movie",
    description: "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
  {
    name: "Honey Movie",    
    route: "/honey-movie",
    description: "Honey Movie is a website that provides information about movies.",
    image: "/honey-movie.png",
    sourceCode: "https://github.com/Tamakuz/honeymovie",
    liveDemo: "https://honeymovie.vercel.app/",
    cloneUrl: "https://github.com/Tamakuz/honeymovie.git",
    techStack: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
  },
];
const ProjectSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div id="projects" className="space-y-2 container" ref={ref}>
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
      <section className="grid grid-cols-3 gap-3">
        {projectDatas.map((project, index: number) => (
          <Link
            href={`projects/${project.name}`}
            className="w-full md:w-fit rounded-lg shadow transition duration-300 hover:shadow-lg relative cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.name}
                priority
                className="rounded-t-lg"
              />
            </motion.div>
            <div className="p-4 space-y-1">
              <h2
                className="text-lg font-semibold"
              >
                {project.name}
              </h2>
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default ProjectSection