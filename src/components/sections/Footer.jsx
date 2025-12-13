import React from "react";
import { Bio, navigation, staticText } from "../../data/constants";
import { useLanguage } from "../../utils/LanguageContext";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const { language } = useLanguage();
  const bioData = language === "mn" ? Bio.mn : Bio;
  const navData = navigation[language] || navigation.mn;
  const text = staticText[language].footer;

  return (
    <div className="w-full py-[2rem] flex justify-center z-10 relative">
      <div className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[1rem] text-text_primary">
        <div className="font-semibold text-[20px] text-primary">
          {bioData.name}
        </div>
        <ul className="w-full max-w-[800px] mt-[0.5rem] flex flex-row gap-[2rem] justify-center md:flex-wrap md:gap-[1rem] md:justify-center md:text-center md:text-[12px]">
          <a
            href="#About"
            className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary md:text-[1rem]"
          >
            {navData.about}
          </a>
          <a
            href="#Skills"
            className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary md:text-[1rem]"
          >
            {navData.skills}
          </a>
          <a
            href="#Experience"
            className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary md:text-[1rem]"
          >
            {navData.experience}
          </a>
          <a
            href="#Projects"
            className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary md:text-[1rem]"
          >
            {navData.projects}
          </a>
          <a
            href="#Education"
            className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary md:text-[1rem]"
          >
            {navData.education}
          </a>
        </ul>
        <div className="flex mt-[1rem]">
          <a
            href={Bio.facebook}
            target="display"
            className="inline-block mx-[1rem] text-[1.5rem] text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            <FacebookRounded />
          </a>
          <a
            href={Bio.twitter}
            target="display"
            className="inline-block mx-[1rem] text-[1.5rem] text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            <Twitter />
          </a>
          <a
            href={Bio.linkedin}
            target="display"
            className="inline-block mx-[1rem] text-[1.5rem] text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            <LinkedIn />
          </a>
          <a
            href={Bio.insta}
            target="display"
            className="inline-block mx-[1rem] text-[1.5rem] text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            <Instagram />
          </a>
        </div>
        <p className="mt-[1.5rem] text-[0.9rem] text-text_secondary text-center">
          &copy; 2024 {bioData.name}. {text.rights}
        </p>
      </div>
    </div>
  );
};

export default Footer;
