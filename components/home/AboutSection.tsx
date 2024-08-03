import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePerson,
} from "react-icons/md";

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
    <div id="about" className="space-y-2 container" ref={ref}>
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
      <div className="flex flex-col space-y-6 font-sans text-xl text-neutral-800 dark:text-neutral-300 opacity-60">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Hello! Let me to introduce myself. My journey in the world of
          technology began not at a university, but at a vocational high school
          where I studied industrial electrical engineering. My passion for
          coding ignited during a crucial practical exam when I first used an
          Arduino. That experience marked my introduction to coding, and I have
          been captivated ever since.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          After graduating, I did not immediately continue to higher education.
          Instead, I spent my days playing games and watching tutorial videos on
          YouTube. In my spare time, I began to delve deeper into programming by
          learning Python. However, everything changed when I found a tutorial
          on how to make a website. I was fascinated by how code could be turned
          into attractive visual designs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The desire to master this field drove me to return to academia. I
          decided to go to college, although I was aware that much of the
          knowledge I acquired was actually from outside the campus. During
          about 8 months of being 'unemployed', I decided to take that risk. It
          was a decision that changed my career path.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          From there, I never stopped learning and always strived to improve
          myself. I continuously honed my skills, both those acquired from
          inside and outside the classroom, and always tried to stay updated
          with the latest developments in the technology industry. I believe
          that with the skills and dedication I possess, I can provide effective
          and high-quality solutions, whether working independently or in a
          team.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
