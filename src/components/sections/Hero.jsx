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

  // Roles can be an array — join with " & " for clean display
  const rolesDisplay = Array.isArray(bioData.roles)
    ? bioData.roles.join(" & ")
    : bioData.roles;

  return (
    <div id="About" className="relative overflow-hidden">
      {/* Background SVG — absolutely positioned, never affects layout */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <HeroBgAnimation />
      </div>

      {/* Hero content */}
      <div
        className="relative flex items-center justify-center py-20 px-4 sm:px-6 md:px-10 min-h-[calc(100vh-70px)]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
          zIndex: 1,
        }}
      >
        <motion.div
          {...headContainerAnimation}
          className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1100px] gap-10 lg:gap-12"
        >
          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div {...headTextAnimation} className="w-full">
              {/* Greeting + Name */}
              <h1 className="font-bold text-text_primary leading-tight mb-2 text-4xl sm:text-5xl md:text-[44px] lg:text-[56px] xl:text-[64px] break-words">
                {heroText.hi}
                <br />
                {bioData.name}
              </h1>

              {/* Role line */}
              <div className="font-semibold text-text_primary leading-snug mb-4 text-xl sm:text-2xl md:text-[22px] lg:text-[28px] break-words">
                {heroText.iam}{" "}
                <span className="text-primary cursor-pointer">
                  {rolesDisplay}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div {...headContentAnimation} className="w-full">
              <p className="text-text_primary/90 leading-relaxed mb-8 text-base sm:text-[17px] md:text-[18px] break-words max-w-[90%] mx-auto lg:mx-0">
                {bioData.description}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div {...headContentAnimation} className="w-full flex justify-center lg:justify-start">
              <a
                href={bioData.resume}
                target="_blank"
                rel="noreferrer"
                className="appearance-none no-underline w-full sm:w-auto max-w-[300px] text-center px-8 py-4 text-white rounded-[50px] font-bold text-lg sm:text-xl bg-gradient-to-r from-[#818cf8] via-[#60a5fa] to-[#818cf8] bg-[length:200%_auto] shadow-[0_4px_14px_0_rgba(129,140,248,0.39)] hover:scale-105 hover:shadow-[0_6px_25px_rgba(129,140,248,0.5)] hover:bg-right transition-all duration-500 ease-in-out"
              >
                {heroText.checkResume}
              </a>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            {...headContentAnimation}
            className="flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2"
          >
            {isMobile ? (
              <img
                src={HeroImg}
                alt="Hero"
                className="rounded-[60px] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] object-cover border-[2px] border-primary"
              />
            ) : (
              <Tilt>
                <img
                  src={HeroImg}
                  alt="Hero"
                  className="rounded-[90px] w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] object-cover border-[1px] border-primary"
                />
              </Tilt>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
