import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdOutlinePerson } from "react-icons/md";

const AboutSection = () => {
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
    <div id="about" className="space-y-2 container px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        className="flex items-center gap-2 text-2xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <MdOutlinePerson size={30} />
        <h2 className="capitalize">About</h2>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between gap-3 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="dark:text-neutral-400">
          A brief introduction to my story
        </p>
      </motion.div>
      <div className="flex flex-col space-y-6 font-sans text-md text-neutral-800 dark:text-neutral-300 opacity-60">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Hello! I'm excited to share my journey into technology, which started at a vocational high school and not in a typical university setting. My passion for coding sparked when I first experimented with an Arduino during a school exam, and it has grown ever since.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Post-graduation, I explored my interests further through online tutorials and gaming, eventually discovering web development. This new passion led me to pursue formal education again, despite acquiring most of my skills through self-study.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My commitment to continuous learning and improvement has been constant. I strive to keep up with technological advancements and believe my skills and dedication enable me to deliver high-quality solutions in any team setting.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
