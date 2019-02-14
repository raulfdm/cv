import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

import { generateTimeRange } from '../utils/date.utils';

import {
  CompanyName as ProjectName,
  Job as ProjectContainer,
  JobDescription,
  JobInfos as ProjectInfoContainer,
  WorkedTime as ProjectTime,
} from './Jobs';

import projects from '../globals/data/projects';

const ProjectsSection = styled(Section)`
  page-break-inside: auto;
`;

const ProjectDescription = styled(JobDescription)``.withComponent(Linkify);

export default () => {
  return (
    <ProjectsSection>
      <SectionTitle title="Projects" />
      <SectionBody>
        {projects.map(project => {
          return (
            <ProjectContainer key={project.id}>
              <ProjectInfoContainer>
                <ProjectName>{project.name}</ProjectName>
                <ProjectTime>{generateTimeRange(project.timeInit, project.timeEnd)}</ProjectTime>
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
    </ProjectsSection>
  );
};
