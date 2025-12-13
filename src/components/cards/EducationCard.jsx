import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
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
      date={education?.date}
    >
      <div className="w-full flex max-w-full gap-[12px]">
        <img
          src={education?.img}
          alt=""
          className="h-[50px] rounded-[10px] mt-[4px] md:h-[40px]"
        />
        <div className="w-full flex flex-col">
          <div className="text-[18px] font-semibold text-text_primary/99 md:text-[14px]">
            {education?.school}
          </div>
          <div className="text-[14px] font-medium text-text_secondary/99 md:text-[12px]">
            {education?.degree}
          </div>
          <div className="text-[12px] font-normal text-text_secondary/80 md:text-[10px]">
            {education?.date}
          </div>
        </div>
      </div>
      <div className="text-[14px] font-medium text-text_secondary/99 md:text-[12px]">
        <b>Grade : </b>
        {education?.grade}
      </div>
      <div className="w-full text-[15px] font-normal text-text_primary/99 mb-[10px] md:text-[12px]">
        {education?.desc && (
          <span className="block max-w-full overflow-hidden line-clamp-4">
            {education.desc}
          </span>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
