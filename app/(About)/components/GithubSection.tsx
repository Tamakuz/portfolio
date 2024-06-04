import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

const GithubSection = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ">
          <FaGithub />
          <h2 className="capitalize">Github</h2>
        </div>
        <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            Find me on Github
          </p>
          <a
            target="_blank"
            className="font-code text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-400"
            href="https://github.com/tamakuz"
          >
            @tamakuz
          </a>
        </div>
        <GitHubCalendar username="Tamakuz" />
      </div>
    </>
  );
};

export default GithubSection;
