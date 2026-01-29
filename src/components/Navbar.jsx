import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Bio, navigation } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { useLanguage } from "../utils/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const bioData = language === "mn" ? Bio.mn : Bio;
  const navData = navigation[language] || navigation.mn;

  useEffect(() => {
    if (!document.body) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="bg-bg h-[80px] flex items-center justify-center text-[1rem] sticky top-0 z-10 text-white">
      <div className="w-full max-w-[1200px] px-6 flex items-center justify-between text-[1rem]">
        <LinkR
          to="/"
          className="w-auto px-[6px] font-medium text-[20px] no-underline text-inherit cursor-pointer flex items-center hover:text-primary transition-colors"
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

        <div className="w-full h-full hidden md:flex justify-end items-center px-[6px] gap-4">
          <a
            href={bioData.github}
            target="_blank"
            rel="noreferrer"
            className="border border-primary text-primary flex justify-center items-center rounded-[20px] cursor-pointer px-[20px] py-[10px] text-[16px] font-medium transition-all duration-500 ease-in-out no-underline hover:bg-primary hover:text-text_primary"
          >
            {navData.github}
          </a>
          <button
            onClick={toggleLanguage}
            className="bg-transparent border border-primary text-primary flex items-center justify-center rounded-[50px] cursor-pointer px-[16px] py-[8px] text-[16px] font-medium transition-all duration-300 ease-in-out outline-none hover:bg-primary hover:text-text_primary hover:scale-105"
          >
            {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[100] bg-[#191924]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-text_primary hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <MenuRounded fontSize="large" style={{ transform: "rotate(45deg)" }} />
          </button>

          <ul className="flex flex-col items-center gap-8 text-center">
            {Object.entries(navData).map(([key, label]) => {
              if (key === 'github') return null;
              return (
                <a
                  key={key}
                  onClick={() => setIsOpen(false)}
                  href={`#${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  className="text-3xl font-bold text-text_primary hover:text-primary transition-colors no-underline"
                >
                  {label}
                </a>
              );
            })}

            <div className="flex flex-col gap-4 mt-4 items-center">
              <a
                href={bioData.github}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-primary text-primary px-10 py-3 rounded-full font-bold text-xl hover:bg-primary hover:text-white transition-all no-underline"
              >
                {navData.github}
              </a>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="text-primary border-2 border-primary px-6 py-2 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all bg-transparent"
              >
                {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
