import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import { generateTimeRange } from '../../utils/date.utils';
import { Section, SectionBody, SectionTitle } from '../Section';
import {
  CompanyName as ProjectName,
  Job as ProjectContainer,
  JobDescription,
  JobInfos as ProjectInfoContainer,
  WorkedTime as ProjectTime,
} from '../Jobs';

import projects from '../../globals/data/projects';

const ProjectsSection = styled(Section)`
  page-break-inside: auto;
`;

const ProjectDescription = styled(Linkify)``.extend(JobDescription);

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
