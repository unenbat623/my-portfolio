import React, { useState } from "react";
import { projects, projectsMn, staticText, uiText } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { useLanguage } from "../../utils/LanguageContext";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const { language } = useLanguage();
  const text = staticText[language].projects;
  const ui = uiText[language];
  const projectData = language === "mn" ? projectsMn : projects;
  const visibleProjects =
    toggle === "all"
      ? projectData
      : projectData.filter((item) =>
          Array.isArray(item.category)
            ? item.category.includes(toggle)
            : item.category?.split(",").map((category) => category.trim()).includes(toggle)
        );

  return (
    <div
      id="Projects"
      className="flex flex-col justify-center relative z-10 items-center bg-[linear-gradient(343.07deg,rgba(129,140,248,0.06)_5.71%,rgba(129,140,248,0)_64.83%)] py-[60px] md:py-[80px]"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px]">
        <div className="text-[52px] text-center font-semibold mt-[20px] text-text_primary md:mt-[12px] md:text-[32px]">
          {text.title}
        </div>
        <div className="text-[18px] text-center max-w-[600px] font-semibold text-text_secondary md:text-[16px] mb-[40px]">
          {text.desc}
        </div>

        <div className="flex border-[1.5px] border-primary text-primary text-[16px] rounded-[12px] font-medium my-[22px] md:text-[12px]">
          <div
            className={`py-[8px] px-[18px] rounded-[6px] cursor-pointer hover:bg-primary/10 transition-all duration-200 ease-in-out md:py-[6px] md:px-[8px] md:rounded-[4px] ${toggle === "all" ? "bg-primary/20" : ""
              }`}
            onClick={() => setToggle("all")}
          >
            {ui.all}
          </div>
          <div className="w-[1.5px] bg-primary"></div>
          <div
            className={`py-[8px] px-[18px] rounded-[6px] cursor-pointer hover:bg-primary/10 transition-all duration-200 ease-in-out md:py-[6px] md:px-[8px] md:rounded-[4px] ${toggle === "web app" ? "bg-primary/20" : ""
              }`}
            onClick={() => setToggle("web app")}
          >
            {ui.webApps}
          </div>
          <div className="w-[1.5px] bg-primary"></div>
          <div
            className={`py-[8px] px-[18px] rounded-[6px] cursor-pointer hover:bg-primary/10 transition-all duration-200 ease-in-out md:py-[6px] md:px-[8px] md:rounded-[4px] ${toggle === "machine learning" ? "bg-primary/20" : ""
              }`}
            onClick={() => setToggle("machine learning")}
          >
            {ui.machineLearning}
          </div>
        </div>

        <div className="flex justify-center items-center gap-[28px] flex-wrap">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${language}-${toggle}-${project.id ?? index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
