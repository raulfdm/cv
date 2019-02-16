import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import { Section, SectionBody, SectionTitle } from 'atoms/section';
import Time from 'atoms/time';

// import {
//   CompanyName as ProjectName,
//   Job as ProjectContainer,
//   JobDescription,
//   JobInfos as ProjectInfoContainer,
//   WorkedTime as ProjectTime,
// } from './Jobs';

const SectionStyled = styled(Section)``;

// const ProjectDescription = styled(JobDescription)``.withComponent(Linkify);

export default ({ data }) => {
  return (
    <SectionStyled>
      <SectionTitle>Projects</SectionTitle>
      <SectionBody>
        {data.map(project => {
          return (
            <ProjectContainer key={project.id}>
              <ProjectInfoContainer>
                <ProjectName>{project.name}</ProjectName>
                <ProjectTime>
                  <Time time={formatExperienceDate(project.timeInit)} />
                  {' - '}
                  <Time time={formatExperienceDate(project.timeEnd)} />
                </ProjectTime>
              </ProjectInfoContainer>
              {project.description.map((desc, index) => {
                return (
                  <ProjectDescription key={index + desc.substr(0, 10)}>{desc}</ProjectDescription>
                );
              })}
            </ProjectContainer>
          );
        })}
      </SectionBody>
    </SectionStyled>
  );
};
