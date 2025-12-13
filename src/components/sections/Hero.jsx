import React, { useState, useEffect } from "react";
import { Bio, staticText } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { useLanguage } from "../../utils/LanguageContext";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const Hero = () => {
  const { language } = useLanguage();
  const bioData = language === "mn" ? Bio.mn : Bio;
  const heroText = staticText[language].hero;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="About">
      <div
        className="flex justify-center relative py-[80px] px-[30px] z-10 lg:py-[66px] lg:px-[16px] sm:py-[32px]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
        }}
      >
        <div className="absolute flex justify-end inset-0 w-full h-full max-w-[1360px] overflow-hidden px-[30px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:justify-center lg:px-0">
          <StarCanvas />
          <HeroBgAnimation />
        </div>

        <motion.div {...headContainerAnimation}>
          <div className="relative flex justify-between items-center w-full max-w-[1100px] lg:flex-col">
            <div className="w-full order-1 lg:order-2 lg:mb-[30px] lg:flex lg:flex-col lg:items-center lg:gap-[6px]">
              <motion.div {...headTextAnimation}>
                <div className="font-bold text-[50px] text-text_primary leading-[68px] lg:text-center lg:text-[40px] lg:leading-[48px] lg:mb-[8px]">
                  {heroText.hi} <br /> {bioData.name}
                </div>
                <div className="font-semibold text-[32px] flex gap-[12px] text-text_primary leading-[68px] lg:text-center lg:text-[22px] lg:leading-[48px] lg:mb-[16px]">
                  {heroText.iam}
                  <span className="cursor-pointer text-primary">
                    <Typewriter
                      options={{
                        strings: bioData.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <div className="text-[20px] leading-[32px] mb-[42px] text-text_primary/95 lg:text-center lg:text-[16px]">
                  {bioData.description}
                </div>
              </motion.div>

              <motion.div
                {...headContentAnimation}
                className="flex lg:justify-center"
              >
                <button
                  href={bioData.resume}
                  target="display"
                  className="appearance-none no-underline w-[95%] max-w-[300px] text-center p-[16px] text-white rounded-[50px] font-semibold text-[20px] bg-gradient-to-bl from-[#ff2450] to-[#ff2400] shadow-[0_4px_14px_0_rgba(255,36,0,0.39)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,36,0,0.23)] hover:brightness-100 transition-all duration-400 ease-in-out sm:py-[12px] sm:text-[18px]"
                >
                  {heroText.checkResume}
                </button>
              </motion.div>
            </div>

            <div className="w-full order-2 flex justify-end lg:order-1 lg:flex-col lg:items-center lg:justify-center lg:mb-[80px] sm:mb-[30px]">
              <motion.div {...headContentAnimation}>
                {isMobile ? (
                  <img
                    src={HeroImg}
                    alt="Hero"
                    className="rounded-full w-full h-full max-w-[400px] max-h-[400px] border-[2px] border-primary sm:max-w-[280px] sm:max-h-[280px] object-cover"
                  />
                ) : (
                  <Tilt>
                    <img
                      src={HeroImg}
                      alt="Hero"
                      className="rounded-full w-full h-full max-w-[400px] max-h-[400px] border-[2px] border-primary sm:max-w-[280px] sm:max-h-[280px] object-cover"
                    />
                  </Tilt>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
