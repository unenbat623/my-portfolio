import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, experiencesMn, staticText } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import { useLanguage } from "../../utils/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
  const text = staticText[language].experience;
  const experienceData = language === "mn" ? experiencesMn : experiences;

  return (
    <div
      id="Experience"
      className="flex flex-col justify-center relative z-10 items-center mt-[50px]"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px]">
        <div className="text-[52px] text-center font-semibold mt-[20px] text-text_primary md:mt-[12px] md:text-[32px]">
          {text.title}
        </div>
        <div className="text-[18px] text-center max-w-[600px] text-text_secondary md:text-[16px] mb-[40px]">
          {text.desc}
        </div>

        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
