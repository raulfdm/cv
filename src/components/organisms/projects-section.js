import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import { Section, SectionBody, SectionTitle } from 'atoms/section';
import { Experience, ExperienceInfo, ExperienceName, ExperiencePeriod } from 'atoms/experience';
import ExperienceDescription from 'molecules/experience-description';
import RangeDate from 'molecules/range-date';

const ProjectDescription = styled(ExperienceDescription)``.withComponent(Linkify);

export default ({ data }) => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <SectionBody>
        {data.map(project => {
          return (
            <Experience key={project.id}>
              <ExperienceInfo>
                <ExperienceName>{project.name}</ExperienceName>
                <ExperiencePeriod>
                  <RangeDate end={project.endOn} init={project.startOn} />
                </ExperiencePeriod>
              </ExperienceInfo>
              {project.description.map((desc, index) => (
                <ProjectDescription key={index + desc.substr(0, 10)}>{desc}</ProjectDescription>
              ))}
            </Experience>
          );
        })}
      </SectionBody>
    </Section>
  );
};
