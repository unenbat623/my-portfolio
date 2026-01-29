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
    <div className="w-full py-12 flex justify-center z-10 relative bg-bg">
      <div className="w-full max-w-[1200px] flex flex-col gap-8 items-center px-6 text-text_primary">
        <div className="font-bold text-2xl text-primary tracking-tight">
          {bioData.name}
        </div>

        <ul className="w-full flex flex-col items-center gap-6 mt-2 md:flex-row md:justify-center md:gap-10 list-none p-0">
          <a
            href="#About"
            className="text-text_primary no-underline text-lg font-medium transition-colors hover:text-primary"
          >
            {navData.about}
          </a>
          <a
            href="#Skills"
            className="text-text_primary no-underline text-lg font-medium transition-colors hover:text-primary"
          >
            {navData.skills}
          </a>
          <a
            href="#Experience"
            className="text-text_primary no-underline text-lg font-medium transition-colors hover:text-primary"
          >
            {navData.experience}
          </a>
          <a
            href="#Projects"
            className="text-text_primary no-underline text-lg font-medium transition-colors hover:text-primary"
          >
            {navData.projects}
          </a>
          <a
            href="#Education"
            className="text-text_primary no-underline text-lg font-medium transition-colors hover:text-primary"
          >
            {navData.education}
          </a>
        </ul>

        <div className="flex gap-8 mt-4">
          <a
            href={Bio.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-text_primary text-3xl transition-colors hover:text-primary"
          >
            <FacebookRounded fontSize="inherit" />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-text_primary text-3xl transition-colors hover:text-primary"
          >
            <Twitter fontSize="inherit" />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text_primary text-3xl transition-colors hover:text-primary"
          >
            <LinkedIn fontSize="inherit" />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noreferrer"
            className="text-text_primary text-3xl transition-colors hover:text-primary"
          >
            <Instagram fontSize="inherit" />
          </a>
        </div>

        <p className="mt-8 text-sm text-text_secondary text-center leading-relaxed max-w-[500px]">
          &copy; {new Date().getFullYear()} {bioData.name}. {text.rights}
        </p>
      </div>
    </div>
  );
};

export default Footer;
