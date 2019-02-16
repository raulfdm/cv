import React from 'react';

import { SectionTitle, SectionBody, Section } from 'atoms/section';
import {
  Experience,
  ExperienceInfo,
  ExperienceName as CompanyName,
  ExperiencePeriod,
  ExperienceTitle,
} from 'atoms/experience';
import RangeDate from 'molecules/range-date';
import ExperienceDescription from 'molecules/experience-description';

const CareerHistory = ({ data }) => {
  return (
    <Section>
      <SectionTitle>Career History</SectionTitle>
      <SectionBody>
        {data.jobs.map(job => (
          <Experience key={job.id}>
            <ExperienceTitle>{job.jobTitle}</ExperienceTitle>
            <ExperienceInfo>
              <CompanyName>{job.companyName}</CompanyName>
              <ExperiencePeriod>
                <RangeDate init={job.startOn} end={job.endOn} />
              </ExperiencePeriod>
            </ExperienceInfo>
            <ExperienceDescription description={job.jobDescription} />
          </Experience>
        ))}
      </SectionBody>
    </Section>
  );
};

export default CareerHistory;
