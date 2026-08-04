import React from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { uiText } from "../../data/constants";

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const ui = uiText[language];
  const hasLiveDemo = Boolean(project.webapp);
  const hasGithub = Boolean(project.github);

  return (
    <article className="w-full max-w-[330px] min-h-[530px] bg-card rounded-[8px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden py-[22px] px-[18px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out hover:-translate-y-[8px] hover:shadow-[0_0_42px_4px_rgba(0,0,0,0.55)] hover:brightness-110">
      <img
        src={project.image || "/untitled_design.png"}
        alt={project.title}
        width="330"
        height="180"
        className="w-full h-[180px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] object-cover"
        loading="lazy"
      />
      {project.tags?.length > 0 && (
        <div className="w-full flex items-center flex-wrap gap-[8px] mt-[2px]">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] leading-none text-primary bg-primary/10 border border-primary/20 rounded-[999px] px-[9px] py-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="w-full flex flex-col gap-0 px-[2px]">
        <div className="text-[20px] font-semibold text-text_secondary overflow-hidden line-clamp-2 text-overflow-ellipsis">
          {project.title}
        </div>
        <div className="text-[12px] ml-[2px] font-normal text-text_secondary/80 md:text-[10px]">
          {project.date}
        </div>
        <div className="font-normal text-text_secondary/99 overflow-hidden mt-[8px] line-clamp-3 text-overflow-ellipsis">
          {project.description}
        </div>
      </div>
      <div className="flex items-center pl-[10px] min-h-[38px]">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt=""
            className="w-[38px] h-[38px] rounded-full -ml-[10px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] border-[3px] border-card object-cover"
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex gap-[10px] mt-auto">
        {hasGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-[10px] bg-transparent text-text_primary rounded-[8px] font-semibold text-[14px] border border-white/20 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            {ui.viewGithub}
          </a>
        )}
        {hasLiveDemo ? (
          <a
            href={project.webapp}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-[10px] bg-card text-text_primary rounded-[8px] font-semibold text-[14px] border border-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            {ui.viewWebApp}
          </a>
        ) : (
          <span className="w-full text-center py-[10px] bg-white/5 text-text_secondary rounded-[8px] font-semibold text-[14px] border border-white/10">
            {ui.unavailable}
          </span>
        )}
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
