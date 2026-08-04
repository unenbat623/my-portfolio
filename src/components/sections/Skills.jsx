import React, { useState, useEffect } from "react";
import { skills, staticText, uiText } from "../../data/constants";
import { Tilt } from "react-tilt";
import { useLanguage } from "../../utils/LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  const text = staticText[language].skills;
  const ui = uiText[language];
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="Skills"
      className="flex flex-col justify-center relative z-[1] items-center py-[50px] md:py-[80px]"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px]">
        <h2 className="text-[42px] text-center font-semibold mt-[20px] text-text_primary md:mt-[12px] md:text-[32px]">
          {text.title}
        </h2>
        <div className="text-[18px] text-center max-w-[600px] text-text_secondary md:text-[16px] mb-[40px]">
          {text.desc}
        </div>

        <div className="w-full flex flex-wrap mt-[20px] gap-[50px] justify-center">
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`} options={{ max: 15, scale: 1.02, speed: 300 }} style={{ width: isMobile ? '100%' : 'auto' }}>
              <div className="w-full max-w-[500px] bg-[rgba(17,25,40,0.83)] border border-[rgba(255,255,255,0.125)] shadow-[0_4px_24px_rgba(129,140,248,0.15)] rounded-[16px] py-[18px] px-[36px] md:max-w-[400px] md:py-[10px] md:px-[36px] sm:max-w-[330px] sm:py-[10px] sm:px-[36px]">
                <div className="text-[28px] font-semibold text-text_secondary mb-[20px] text-center">
                  {ui[skill.title.toLowerCase()] || skill.title}
                </div>
                <div className="flex justify-center flex-wrap gap-[12px] mb-[20px]">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className="text-[16px] font-normal text-text_primary/80 border border-text_primary/80 rounded-[12px] py-[12px] px-[16px] flex items-center justify-center gap-[8px] md:text-[14px] md:py-[8px] md:px-[12px] sm:text-[14px] sm:py-[6px] sm:px-[12px]"
                    >
                      <img
                        alt=""
                        className="w-[24px] h-[24px]"
                        src={item.image}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
