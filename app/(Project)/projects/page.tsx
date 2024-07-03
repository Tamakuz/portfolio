import React from 'react'
import HeadTitleProject from '../components/HeadTitleProject';
import CardProject from '../components/CardProject';
import projectDatas from "@/data/projectDatas.json"


const ProjectPage = () => (
  <main className="container px-5 lg:px-[20%] mt-20 text-neutral-800 dark:text-neutral-300">
    <HeadTitleProject />
    <section className="grid gap-5 pt-2 sm:grid-cols-2">
      {projectDatas.map((project: ProjectData, index: number) => (
        <CardProject
          key={index}
          dataProject={project}
        />
      ))}
    </section>
  </main>
);

export default ProjectPage;