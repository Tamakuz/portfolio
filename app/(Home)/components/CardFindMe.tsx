import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaCircleArrowRight } from 'react-icons/fa6';

const CardFindMe = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6 border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950">
        <div className="text-slate-800 dark:text-slate-400">
          <h3 className="text-xl font-semibold ">Explore the code</h3>
          <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
            Explore the source code for all my projects on GitHub.
          </p>
          <button className="mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm bg-slate-800 hover:bg-slate-700 dark:bg-slate-400 dark:hover:bg-slate-300">
            <span>Go to GitHub</span>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6 border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950">
        <div className="text-slate-800 dark:text-slate-400">
          <h3 className="text-xl font-semibold ">Connect with me</h3>

          <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
            Connect with me on LinkedIn to see my professional profile and
            network.
          </p>

          <button className="mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm bg-blue-700 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400">
            <span>Go to LinkedIn</span>

            <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6 border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950">
        <div className="text-slate-800 dark:text-slate-400">
          <h3 className="text-xl font-semibold ">Follow me on Instagram</h3>

          <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
            Follow me on Instagram to see my latest photos and stories.
          </p>

          <button className="mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600">
            <span>Go to Instagram</span>

            <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6 border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950">
        <div className="text-slate-800 dark:text-slate-400">
          <h3 className="text-xl font-semibold ">Follow me on TikTok</h3>

          <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
            Follow me on TikTok to see my latest videos and trends.
          </p>

          <button className="mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm bg-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
            <span>Go to TikTok</span>

            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFindMe