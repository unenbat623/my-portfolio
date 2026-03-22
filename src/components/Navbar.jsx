import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Bio, navigation } from "../data/constants";
import { useLanguage } from "../utils/LanguageContext";

// Hamburger → X icon (pure CSS, no MUI dependency for a cleaner look)
const HamburgerIcon = ({ open }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
    <span
      className={`block h-[2px] bg-text_primary rounded-full transition-all duration-300 ease-in-out ${
        open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
      }`}
    />
    <span
      className={`block h-[2px] bg-text_primary rounded-full transition-all duration-300 ease-in-out ${
        open ? "opacity-0 w-0" : "w-5"
      }`}
    />
    <span
      className={`block h-[2px] bg-text_primary rounded-full transition-all duration-300 ease-in-out ${
        open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-4"
      }`}
    />
  </div>
);

// Individual nav link with animated underline effect
const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="nav-link text-text_secondary hover:text-text_primary font-medium text-[0.9rem] tracking-wide cursor-pointer transition-colors duration-200 ease-in-out no-underline"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const bioData = language === "mn" ? Bio.mn : Bio;
  const navData = navigation[language] || navigation.mn;

  // Scroll detection for stronger glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!document.body) return;
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { href: "#About", label: navData.about },
    { href: "#Skills", label: navData.skills },
    { href: "#Experience", label: navData.experience },
    { href: "#Projects", label: navData.projects },
    { href: "#Education", label: navData.education },
  ];

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[#090917]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-[#090917]/60 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <LinkR
            to="/"
            className="no-underline flex items-center gap-2 group"
          >
            {/* Accent dot */}
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 group-hover:scale-125 transition-transform duration-200" />
            <span
              className="font-semibold text-[1.05rem] tracking-tight text-text_primary group-hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
            >
              My Portfolio
            </span>
          </LinkR>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop right-side actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* GitHub button — gradient border */}
            <a
              href={bioData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub Profile"
              className="github-btn no-underline flex items-center gap-2 rounded-full px-5 py-2 text-[0.875rem] font-medium text-text_primary hover:text-white transition-all duration-250 ease-in-out hover:scale-[1.04]"
            >
              {/* GitHub icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 opacity-80"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.007-.323 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.652.244 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.625-5.476 5.92.43.372.824 1.102.824 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {navData.github}
            </a>

            {/* Language toggle pill */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch Language to ${language === "mn" ? "English" : "Mongolian"}`}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.85rem] font-medium text-text_secondary hover:text-text_primary bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-250 ease-in-out hover:scale-[1.04] outline-none"
            >
              <span>{language === "mn" ? "🇲🇳" : "🇺🇸"}</span>
              <span className="tracking-wide">{language === "mn" ? "MN" : "EN"}</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/[0.07] transition-colors duration-200 outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={isOpen} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in drawer from right */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#0e0e1a]/95 backdrop-blur-2xl border-l border-white/[0.07] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
            <span
              className="font-semibold text-text_primary text-[1rem]"
              style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
            >
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-text_secondary hover:text-text_primary hover:bg-white/[0.08] transition-all duration-200 outline-none"
              aria-label="Close menu"
            >
              <HamburgerIcon open={true} />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="no-underline flex items-center gap-3 px-4 py-3.5 rounded-xl text-text_secondary hover:text-text_primary hover:bg-white/[0.06] font-medium text-[1rem] tracking-wide transition-all duration-200 ease-in-out"
                style={{
                  transitionDelay: isOpen ? `${i * 40}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(12px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s ease ${i * 40}ms`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 opacity-60" />
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA buttons */}
          <div className="px-6 pb-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6">
            <a
              href={bioData.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="github-btn no-underline flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.925rem] font-semibold text-text_primary hover:text-white transition-all duration-250"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.007-.323 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.652.244 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.625-5.476 5.92.43.372.824 1.102.824 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {navData.github}
            </a>

            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.925rem] font-medium text-text_secondary hover:text-text_primary bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-250 outline-none"
            >
              <span>{language === "mn" ? "🇲🇳" : "🇺🇸"}</span>
              <span>{language === "mn" ? "MN" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to push page content below fixed navbar */}
      <div className="h-[68px]" />
    </>
  );
};

export default Navbar;
