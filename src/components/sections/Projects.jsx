import React, { useState } from "react";
import styled from "styled-components";
import { projects, projectsMn, staticText } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { useLanguage } from "../../utils/LanguageContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const { language } = useLanguage();
  const text = staticText[language].projects;
  const projectData = language === "mn" ? projectsMn : projects;

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>{text.title}</Title>
        <Desc style={{ marginBottom: "40px" }}>{text.desc}</Desc>

        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APPS
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APPS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            projectData.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                openModal={false}
                setOpenModal={false}
              />
            ))}
          {projectData
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={`project-filtered-${index}`}
                project={project}
                openModal={false}
                setOpenModal={false}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
