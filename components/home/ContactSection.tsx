'use client'

import React, { useEffect, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion'

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1 });
          } else {
            controls.start({ opacity: 0.5 });
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
    <motion.div
      id="contact"
      className="container mx-auto max-w-4xl p-5"
      ref={ref}
      initial={{ opacity: 0.5 }}
      animate={controls}
    >
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Contact me</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 mt-2">
        I'm always open to discussing new projects or opportunities. Reach out anytime!
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full rounded-lg border border-gray-300 p-3 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full rounded-lg border border-gray-300 p-3 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          name="message"
          className="w-full h-40 rounded-lg border border-gray-300 p-3 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

export default ContactSection