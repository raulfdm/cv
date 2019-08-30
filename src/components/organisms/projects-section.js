import React from 'react';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';

import { MainContext } from 'src/contexts/main';
import { stringToArrayOfParagrahs } from 'src/utils/string.utils';
import ExperienceDescription from 'molecules/experience-description';
import RangeDate from 'molecules/range-date';
import { Experience, ExperienceInfo, ExperienceName, ExperiencePeriod } from 'atoms/experience';
import { Section, SectionBody, SectionTitle } from 'atoms/section';

const ProjectDescription = styled(ExperienceDescription)``.withComponent(Linkify);

export default () => {
  const { projects } = React.useContext(MainContext);

  if (!projects) {
    return null;
  }

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <SectionBody>
        {Object.entries(projects).map(([projectId, projectData]) => {
          return (
            <Experience key={projectId}>
              <ExperienceInfo>
                <ExperienceName>{projectData.project_name}</ExperienceName>
                <ExperiencePeriod>
                  <RangeDate end={projectData.end_date} init={projectData.start_date} />
                </ExperiencePeriod>
              </ExperienceInfo>
              {stringToArrayOfParagrahs(projectData.description).map(paragraph => (
                <ProjectDescription key={paragraph}>{paragraph}</ProjectDescription>
              ))}
            </Experience>
          );
        })}
      </SectionBody>
    </Section>
  );
};
