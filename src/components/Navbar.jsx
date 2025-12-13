import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio, navigation } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const LanguageButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: scale(1.05);
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("mn"); // Default to Mongolian as per previous preference

  const theme = useTheme();
  // Ensure we fallback to 'mn' or 'en' correctly if the key is missing (though our state handles it)
  // Access data based on language state
  const bioData = language === "mn" ? Bio.mn : Bio;
  const navData = navigation[language] || navigation.mn;

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mn" ? "en" : "mn"));
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">My Portfolio</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">{navData.about}</NavLink>
          <NavLink href="#Skills">{navData.skills}</NavLink>
          <NavLink href="#Experience">{navData.experience}</NavLink>
          <NavLink href="#Projects">{navData.projects}</NavLink>
          <NavLink href="#Education">{navData.education}</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              {navData.about}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              {navData.skills}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              {navData.experience}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              {navData.projects}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              {navData.education}
            </NavLink>
            <GithubButton
              href={bioData.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              {navData.github}
            </GithubButton>
            {/* Added Language Toggle for Mobile Menu as well for better UX */}
            <LanguageButton onClick={toggleLanguage} style={{ margin: 0, marginTop: '10px' }}>
              {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
            </LanguageButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={bioData.github} target="_Blank">
            {navData.github}
          </GithubButton>
          <LanguageButton onClick={toggleLanguage}>
            {language === "mn" ? "🇲🇳 MN" : "🇺🇸 EN"}
          </LanguageButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
