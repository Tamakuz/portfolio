import React from 'react'
import projectDatas from '@/data/projectDatas.json'
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import HeadTitleProjectDetail from './components/HeadTitleProjectDetail';
import Image from 'next/image';

const ProjectDetail = ({params}: {params: {projectName: string}}) => {
  const projectName = params.projectName.replace(/%20/g, ' ')
  const project: ProjectData | undefined = projectDatas.find(project => project.name === projectName)

  const techIconMap: any = {
    SiNextdotjs: <SiNextdotjs className="text-[30px] text-white" />,
    SiTailwindcss: <SiTailwindcss className="text-[30px] text-blue-500" />,
    SiTypescript: <SiTypescript className="text-[30px] text-blue-400" />,
    SiVercel: <SiVercel className="text-[30px] text-black" />,
    FaReact: <FaReact className="text-[30px] text-blue-400" />,
  };

  const getTechStackIcons = (techStack: any) => {
    return techStack
      .map((tech: any, index: any) => {
        const Icon = techIconMap[tech];
        return Icon ? React.cloneElement(Icon, { key: index }) : null;
      })
      .filter(Boolean) as JSX.Element[];
  };

  return (
    <main className="container px-5 lg:px-[20%] my-20 text-neutral-800 dark:text-neutral-300">
      {project && (
        <>
          <HeadTitleProjectDetail
            title={project.name}
            description={project.description}
          />
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={1000}
            className="w-full h-full rounded-xl"
          />
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center mt-5">
            <div className="flex flex-wrap items-center gap-3">
              {getTechStackIcons(project.techStack)}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] transition-all duration-300 dark:text-blue-500 hover:dark:text-blue-400">
                  Source Code
                </span>
              </a>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] transition-all duration-300 dark:text-blue-500 hover:dark:text-blue-400">
                  Live Preview
                </span>
              </a>
            </div>
          </div>
          <h2 className="font-sans text-xl font-medium dark:text-neutral-300 mt-5">
            How to Start this project
          </h2>
          <h3 className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300">
            1. Clone using git
          </h3>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-md my-2">
            <code className="text-sm text-neutral-700 dark:text-neutral-300">
              git clone {project.cloneUrl}
            </code>
          </div>
          <h3 className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300">
            2. Install dependencies
          </h3>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-md my-2">
            <code className="text-sm text-neutral-7000 dark:text-neutral-300">
              npm install / yarn install / pnpm install / bun install
            </code>
          </div>
          <h3 className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300">
            3. Start the project
          </h3>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-md my-2">
            <code className="text-sm text-neutral-7000 dark:text-neutral-300">
              npm run dev / yarn dev / pnpm dev / bun dev
            </code>
          </div>
          <div className="mt-4">
            Open{" "}
            <a
              className="text-blue-600 hover:text-blue-400 underline"
              target="_blank"
              href="http://localhost:3000"
            >
              http://localhost:3000
            </a>{" "}
            with your browser to see the result.
          </div>
        </>
      )}
    </main>
  );
}

export default ProjectDetail