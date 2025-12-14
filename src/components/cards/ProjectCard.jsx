import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[330px] h-[490px] bg-card cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden py-[26px] px-[20px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110">
      <img
        src={project.image}
        alt=""
        className="w-full h-[180px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] object-cover"
        loading="lazy"
      />
      <div className="w-full flex items-center flex-wrap gap-[8px] mt-[4px]">
        {/* Tags could go here if needed */}
      </div>
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
      <div className="flex items-center pl-[10px]">
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
      <div className="flex gap-[12px] mt-[10px]">
        <a
          href={project.webapp}
          target="_blank"
          rel="noreferrer"
          className="w-full text-center py-[10px] bg-card text-text_primary rounded-[8px] font-semibold text-[16px] border border-primary transition-all duration-500 hover:bg-primary hover:text-white"
        >
          View Web App
        </a>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
