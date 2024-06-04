import React from "react";
import { FaCode } from "react-icons/fa";

const SkillSection = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ">
          <FaCode />
          <h2 className="capitalize">Skills</h2>
        </div>
        <div className="text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            My skills and experience
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
