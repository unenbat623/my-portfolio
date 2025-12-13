import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
          loading="lazy"
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <div className="w-full flex max-w-full gap-[12px]">
        <img
          src={experience?.img}
          alt=""
          className="h-[50px] rounded-[10px] mt-[4px] md:h-[40px]"
          loading="lazy"
        />
        <div className="w-full flex flex-col">
          <div className="text-[18px] font-semibold text-text_primary/99 md:text-[14px]">
            {experience?.role}
          </div>
          <div className="text-[14px] font-medium text-text_secondary/99 md:text-[12px]">
            {experience?.company}
          </div>
          <div className="text-[12px] font-normal text-text_secondary/80 md:text-[10px]">
            {experience?.date}
          </div>
        </div>
      </div>
      <div className="w-full text-[15px] font-normal text-text_primary/99 mb-[10px] md:text-[12px]">
        {experience?.desc && (
          <span className="block max-w-full overflow-hidden line-clamp-4">
            {experience.desc}
          </span>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="w-full flex gap-[12px] mt-[-10px]">
              <b>Skills</b>
              <div className="flex flex-wrap gap-[8px]">
                {experience?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="text-[15px] font-normal text-text_primary/99 md:text-[12px]"
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default React.memo(ExperienceCard);
