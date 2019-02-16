import React from 'react';
import styled from 'styled-components';

import { SectionTitle, SectionBody, Section } from 'atoms/section';
import RangeDate from 'molecules/range-date';
import ExperienceDescription from 'molecules/experience-description';

export const Experience = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Information = styled.div`
  margin-bottom: 0.8rem;
  @media (min-width: ${props => props.theme.sizes.tablet}) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const CompanyName = styled.h4`
  flex: 1;
  font-weight: 400;
`;

export const WorkedTime = styled.p`
  font-size: 1.4rem;
  opacity: 0.6;
`;

const ExperienceComponent = ({ data }) => {
  return (
    <Section>
      <SectionTitle>Career History</SectionTitle>
      <SectionBody>
        {data.jobs.map(job => (
          <Experience key={job.id}>
            <JobTitle>{job.jobTitle}</JobTitle>
            <Information>
              <CompanyName>{job.companyName}</CompanyName>
              <WorkedTime>
                <RangeDate init={job.timeInit} end={job.timeEnd} />
              </WorkedTime>
            </Information>
            <ExperienceDescription description={job.jobDescription} />
          </Experience>
        ))}
      </SectionBody>
    </Section>
  );
};

export default ExperienceComponent;
