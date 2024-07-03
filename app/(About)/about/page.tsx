import { Separator } from "@/components/ui/separator";
import React from "react";
import CareerSection from "../components/CareerSection";
import GithubSection from "../components/GithubSection";
import SkillSection from "../components/SkillSection";

const AboutPage = () => {
  return (
    <>
      <div className="container px-5 lg:px-[20%] my-20 text-neutral-800 dark:text-neutral-300">
        <h1 className="font-sora text-2xl font-medium">About</h1>
        <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          A brief story about myself
        </p>
        <div className="flex flex-col space-y-6 font-sans text-neutral-800 dark:text-neutral-300">
          <p>
            I am Jovan Panji Pratama, a Full Stack Developer specializing in
            JavaScript. With a strong background in building efficient,
            responsive web applications, I excel in modern technologies like
            Next.js 14. I manage the entire development process, ensuring
            top-notch performance and user experience.
          </p>
          <p>
            I consistently create innovative, scalable solutions for complex
            business needs. My expertise in both client-side and server-side
            programming ensures cohesive, functional products. I stay updated
            with industry trends and incorporate cutting-edge techniques.
          </p>
          <p>
            My career highlights include delivering high-performance,
            SEO-friendly projects that achieve top search engine rankings. This
            focus on performance and SEO maximizes value for users and
            stakeholders.
          </p>
          <p>
            Driven by a passion for continuous learning, I seek out new
            challenges to expand my knowledge and skills. This proactive
            approach keeps me at the forefront of web development.
          </p>
          <p>
            Looking ahead, I am eager to contribute to exciting web development
            projects, confident in my ability to deliver high-quality, scalable,
            and efficient solutions, whether independently or as part of a team.
          </p>
        </div>
        <Separator className="my-5" />
        <CareerSection />
        <Separator className="my-5" />
        <GithubSection />
        <Separator className="my-5" />
        <SkillSection />
      </div>
    </>
  );
};

export default AboutPage;
