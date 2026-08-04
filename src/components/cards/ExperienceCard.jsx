import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useLanguage } from "../../utils/LanguageContext";
import { uiText } from "../../data/constants";

const CompanyLogo = ({ src, name, className = "", compact = false }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[#111827] text-white font-bold ${className}`}
        aria-label={name}
      >
        <span className={compact ? "text-[14px]" : "text-[16px]"}>{initials || "•"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={`bg-white object-contain ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const ExperienceCard = ({ experience }) => {
  const { language } = useLanguage();
  const ui = uiText[language];
  return (
    <VerticalTimelineElement
      icon={
        <CompanyLogo
          src={experience?.img}
          name={experience?.company}
          compact
          className="w-full h-full rounded-full p-[8px]"
        />
      }
      iconStyle={{
        background: "#ffffff",
        boxShadow: "0 0 0 4px #ffffff, 0 0 24px rgba(129, 140, 248, 0.35)",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(129, 140, 248, 0.15) 0px 4px 24px",
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
        <CompanyLogo
          src={experience?.img}
          name={experience?.company}
          className="h-[52px] w-[52px] shrink-0 rounded-[10px] mt-[4px] p-[6px] md:h-[42px] md:w-[42px]"
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
              <b>{ui.skills}</b>
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
