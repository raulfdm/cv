import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';
import Time from './Time';
import {
  CompanyName as ProjectName,
  Job as ProjectContainer,
  JobDescription,
  JobInfos as ProjectInfoContainer,
  WorkedTime as ProjectTime,
} from './Jobs';

import { formatExperienceDate } from '../utils/date.utils';

const ProjectsSection = styled(Section)`
  page-break-inside: auto;
`;

const ProjectDescription = styled(JobDescription)``.withComponent(Linkify);

export default ({ data }) => {
  return (
    <ProjectsSection>
      <SectionTitle title="Projects" />
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
    </ProjectsSection>
  );
};
