import React, { useState, useEffect } from "react";
import { Bio, staticText } from "../../data/constants";
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
        <div className="absolute flex justify-start inset-0 w-full h-full max-w-[1360px] overflow-hidden px-[30px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-0">
          <HeroBgAnimation />
        </div>
        <motion.div {...headContentAnimation}>
          {isMobile ? (
            <img
              src={HeroImg}
              alt="Hero"
              className=" rounded-[90px] w-full h-full border-[2px] border-primary sm:max-w-[400px] sm:max-h-[400px]"
            />
          ) : (
            <Tilt>
              <img
                src={HeroImg}
                alt="Hero"
                className="mt-16 rounded-[90px] w-auto h-auto border-[1px] border-primary sm:max-w-[400px] sm:max-h-[400px] object-cover"
              />
            </Tilt>
          )}
        </motion.div>
        <motion.div {...headContainerAnimation}>
          <div className="relative flex items-center justify-between w-full max-w-[1100px] gap-12 lg:gap-8 md:flex-col-reverse">
            <div className="w-full p-10 order-1 md:order-2 md:flex-col md:items-center">
              <motion.div {...headTextAnimation}>
                <div className="font-bold text-[50px] text-text_primary leading-[68px] lg:text-center lg:text-[40px] lg:leading-[48px] lg:mb-[8px] sm:text-[32px] sm:leading-[40px]">
                  {heroText.hi} <br /> {bioData.name}
                </div>
                <div className="font-semibold text-[32px] gap-[12px] text-text_primary leading-[68px] lg:text-center lg:text-[22px] lg:leading-[48px] lg:mb-[16px]">
                  {heroText.iam}
                  <span className="cursor-pointer text-primary">
                    {bioData.roles}
                  </span>
                </div>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <div className="text-[20px] mb-[42px] text-text_primary/95 lg:text-center lg:text-[16px]">
                  {bioData.description}
                </div>
              </motion.div>

              <motion.div
                {...headContentAnimation}
                className="flex lg:justify-center mt-4"
              >
                <a
                  href={bioData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="appearance-none no-underline w-[95%] max-w-[300px] text-center p-[16px] text-white rounded-[50px] font-bold text-[20px] bg-gradient-to-r from-[#ff2450] via-[#ff2400] to-[#ff2450] bg-[length:200%_auto] shadow-[0_4px_14px_0_rgba(255,36,0,0.39)] hover:scale-105 hover:shadow-[0_6px_25px_rgba(255,36,0,0.5)] hover:bg-right transition-all duration-500 ease-in-out sm:py-[12px] sm:text-[18px] sm:max-w-[260px]"
                >
                  {heroText.checkResume}
                </a>
              </motion.div>
            </div>

            <div className="w-full order-2 flex justify-end lg:order-1 lg:flex-col lg:items-center lg:justify-center lg:mb-[80px] sm:mb-[30px]">

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
