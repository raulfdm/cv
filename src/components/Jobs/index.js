import React from 'react';
import styled from 'styled-components';
import experiences from '../../globals/data/experiences';
import { generateTimeRange } from '../../utils/date.utils';
import { Section, SectionBody, SectionTitle } from '../Section';

export const Job = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const JobInfos = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  @media (min-width: 780px) {
    justify-content: flex-start;
  }
`;

export const CompanyName = styled.p`
  margin: 0.5rem 0;
`;

export const WorkedTime = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  margin-left: 2rem;
`;

const JobTitle = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

export const JobDescription = styled.p`
  page-break-inside: auto;
`;

export default () => {
  return (
    <Section>
      <SectionTitle title="Career History" />
      <SectionBody>
        {experiences.jobs.map(job => {
          return (
            <Job key={job.id}>
              <JobInfos>
                <CompanyName>{job.companyName}</CompanyName>
                <WorkedTime>{generateTimeRange(job.timeInit, job.timeEnd)}</WorkedTime>
              </JobInfos>
              <JobTitle>{job.jobTitle}</JobTitle>
              <JobDescription>{job.jobDescription}</JobDescription>
            </Job>
          );
        })}
      </SectionBody>
    </Section>
  );
};
