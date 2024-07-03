import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProjectProps {
  dataProject: ProjectData;
}

const CardProject: React.FC<CardProjectProps> = ({
  dataProject
}) => {
  return (
    <Link
      href={`projects/${dataProject.name}`}
      className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 lg:hover:scale-[102%] lg:hover:border-neutral-300 dark:lg:hover:border-blue-400 "
    >
      <Image
        src={dataProject.image}
        width={500}
        height={300}
        alt="Honey Movie"
        priority
        className="rounded-t-xl"
      />
      <div className="p-5 space-y-2">
        <h2 className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-blue-400 lg:hover:text-blue-800">
          {dataProject.name}
        </h2>
        <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
          {dataProject.description}
        </p>
      </div>
    </Link>
  );
};

export default CardProject;
