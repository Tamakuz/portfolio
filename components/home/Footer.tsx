import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-6 bg-neutral-100 dark:bg-neutral-800">
      <div className="container ">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} [Jovan Tama]. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/tamakuz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jovantama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com/jovantama_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
