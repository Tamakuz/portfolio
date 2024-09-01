'use client'

import React, { useEffect, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [state, setState] = useState({
    errors: {
      email: false,
      name: false,
      message: false,
      subject: false,
    },
    emailSent: false,
  });

  const { errors, emailSent } = state;

  useEffect(() => {
    controls.start({ opacity: inView ? 1 : 0.5 });
  }, [inView, controls]);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");
    const subject = formData.get("subject");

    const newErrors = {
      email: !email,
      name: !name,
      message: !message,
      subject: !subject,
    };

    setState((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));

    if (!newErrors.email && !newErrors.name && !newErrors.message && !newErrors.subject) {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ email, name, message, subject }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(await response.json());
      
      if (response.ok) {
        setState((prevState) => ({
          ...prevState,
          emailSent: true,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          emailSent: false,
        }));
      }
    }
  };

  return (
    <motion.div
      id="contact"
      className="container mx-auto max-w-4xl p-5"
      ref={ref}
      initial={{ opacity: 0.5 }}
      animate={controls}
    >
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact me
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 mt-2">
        I'm always open to discussing new projects or opportunities. Reach out
        anytime!
      </p>
      <form
        className="space-y-6"
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          await handleSubmit(formData);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className={`w-full rounded-lg border p-3 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-neutral-700"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className={`w-full rounded-lg border p-3 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-neutral-700"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className={`w-full rounded-lg border p-3 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 ${
              errors.subject
                ? "border-red-500"
                : "border-gray-300 dark:border-neutral-700"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">Subject is required</p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            name="message"
            className={`w-full h-40 rounded-lg border p-3 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 dark:border-neutral-700"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">Message is required</p>
          )}
        </div>
        <button type='submit' className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 transition-colors">
          Send Message
        </button>
        {emailSent && (
          <p className="text-green-500 text-sm mt-1">Email sent successfully!</p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactSection