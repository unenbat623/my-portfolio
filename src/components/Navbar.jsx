import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Bio, navigation } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { useLanguage } from "../utils/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const bioData = language === "mn" ? Bio.mn : Bio;
  const navData = navigation[language] || navigation.mn;

  return (
    <div className="bg-bg h-[80px] flex items-center justify-center text-[1rem] sticky top-0 z-10 text-white">
      <div className="w-full max-w-[1200px] px-6 flex items-center justify-between text-[1rem]">
        <LinkR
          to="/"
          className="w-[80%] px-[6px] font-medium text-[18px] no-underline text-inherit cursor-pointer flex items-center"
        >
          My Portfolio
        </LinkR>

        <div
          className="h-full flex items-center text-text_primary md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <ul className="w-full hidden md:flex items-center justify-center gap-[32px] px-[6px] list-none">
          <a
            href="#About"
            className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
          >
            {navData.about}
          </a>
          <a
            href="#Skills"
            className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
          >
            {navData.skills}
          </a>
          <a
            href="#Experience"
            className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
          >
            {navData.experience}
          </a>
          <a
            href="#Projects"
            className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
          >
            {navData.projects}
          </a>
          <a
            href="#Education"
            className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
          >
            {navData.education}
          </a>
        </ul>

        <div className="w-[80%] h-full hidden md:flex justify-end items-center px-[6px]">
          <a
            href={bioData.github}
            target="_Blank"
            className="border border-primary text-primary flex justify-center items-center rounded-[20px] cursor-pointer px-[20px] py-[10px] text-[16px] font-medium transition-all duration-500 ease-in-out no-underline hover:bg-primary hover:text-text_primary"
          >
            {navData.github}
          </a>
          <button
            onClick={toggleLanguage}
            className="bg-transparent border border-primary text-primary flex items-center justify-center rounded-[50px] cursor-pointer px-[16px] py-[8px] text-[16px] font-medium ml-[10px] transition-all duration-300 ease-in-out outline-none hover:bg-primary hover:text-text_primary hover:scale-105"
          >
            {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            className={`w-full flex flex-col items-start gap-[16px] px-[40px] pt-[12px] pb-[24px] bg-[#19192499] absolute top-[80px] right-0 transition-all duration-600 ease-in-out rounded-b-[20px] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] ${isOpen
                ? "translate-y-0 opacity-100 z-[1000]"
                : "-translate-y-full opacity-0 -z-[1000]"
              }`}
          >
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#About"
              className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
            >
              {navData.about}
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Skills"
              className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
            >
              {navData.skills}
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Experience"
              className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
            >
              {navData.experience}
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Projects"
              className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
            >
              {navData.projects}
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Education"
              className="text-text_primary font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-primary"
            >
              {navData.education}
            </a>
            <a
              href={bioData.github}
              target="_Blank"
              className="bg-primary text-text_primary flex justify-center items-center rounded-[20px] cursor-pointer px-[20px] py-[10px] text-[16px] font-medium transition-all duration-500 ease-in-out no-underline hover:bg-primary hover:text-text_primary"
            >
              {navData.github}
            </a>
            <button
              onClick={toggleLanguage}
              className="bg-transparent border border-primary text-primary flex items-center justify-center rounded-[50px] cursor-pointer px-[16px] py-[8px] text-[16px] font-medium mt-[10px] transition-all duration-300 ease-in-out outline-none hover:bg-primary hover:text-text_primary hover:scale-105"
            >
              {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
