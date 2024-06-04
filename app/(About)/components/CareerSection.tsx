import React from 'react'
import { SiOnlyoffice } from "react-icons/si";

const CareerSection = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ">
        <SiOnlyoffice />
        <h2 className="capitalize">Career</h2>
      </div>
      <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
        <p className="dark:text-neutral-400">My professional career journey</p>
        <button
          className="flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 hover:dark:text-neutral-300"
          data-umami-event="Download Resume"
        >
          <div
            data-testid="download-icon-container"
            className="overflow-hidden border-b-2 border-neutral-600 dark:border-neutral-500"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              data-testid="download-icon"
              className="animate-rain-arrow"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"></path>
            </svg>
          </div>
          <span>Download Resume</span>
        </button>
      </div>
      <h1 className='text-xl'>Coming Soon</h1>
    </div>
  );
}

export default CareerSection