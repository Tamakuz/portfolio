import React from 'react'
import { SiOnlyoffice } from "react-icons/si";
import { motion } from 'framer-motion';

const CareerSection = () => {
  return (
    <motion.div className="space-y-4 p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100"
      >
        <SiOnlyoffice className="text-3xl" />
        <h2>Career</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 dark:text-neutral-400"
      >
        <p>Explore my professional career journey.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-4 py-2 bg-neutral-200 text-neutral-900 rounded-md shadow hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-800 transition duration-300"
          data-umami-event="Download Resume"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"></path>
          </svg>
          Download Resume
        </motion.button>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-2xl font-semibold text-neutral-900 dark:text-neutral-100'
      >
        Coming Soon
      </motion.h1>
    </motion.div>
  );
}

export default CareerSection