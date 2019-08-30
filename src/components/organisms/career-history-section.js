import React from 'react';
import styled from 'styled-components';

import { stringToArrayOfParagrahs } from 'utils/string.utils';
import { MainContext } from 'src/contexts/main';
import RangeDate from 'molecules/range-date';
import ExperienceDescription from 'molecules/experience-description';
import {
  Experience,
  ExperienceInfo,
  ExperienceName as CompanyName,
  ExperiencePeriod,
  ExperienceTitle,
} from 'atoms/experience';
import { SectionTitle, SectionBody, Section } from 'atoms/section';

const StyledSection = styled(Section)`
  page-break-before: always;
`;

const CareerHistory = () => {
  const { experiences } = React.useContext(MainContext);

  return (
    <StyledSection>
      <SectionTitle>Career History</SectionTitle>
      <SectionBody>
        {Object.entries(experiences).map(([experienceId, experienceData]) => (
          <Experience key={experienceId}>
            <ExperienceTitle>{experienceData.role}</ExperienceTitle>
            <ExperienceInfo>
              <CompanyName>{experienceData.company}</CompanyName>
              <ExperiencePeriod>
                <RangeDate init={experienceData.start_date} end={experienceData.end_date} />
              </ExperiencePeriod>
            </ExperienceInfo>
            <ExperienceDescription
              description={stringToArrayOfParagrahs(experienceData.job_description)}
            />
          </Experience>
        ))}
      </SectionBody>
    </StyledSection>
  );
};

export default CareerHistory;
