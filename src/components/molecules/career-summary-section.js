import React from 'react';
import styled from 'styled-components';
import { MainContext } from 'src/contexts/main';

import { Section, SectionBody, SectionTitle } from 'atoms/section';
import { stringToArrayOfParagrahs } from 'utils/string.utils';

const CareerParagraph = styled.p`
  margin-bottom: 0.8rem;
`;

const CareerSummary = () => {
  const { career_sumary } = React.useContext(MainContext);

  return (
    <Section>
      <SectionTitle>Career Summary</SectionTitle>
      <SectionBody>
        {stringToArrayOfParagrahs(career_sumary).map((paragraph, index) => (
          <CareerParagraph key={index}>{paragraph}</CareerParagraph>
        ))}
      </SectionBody>
    </Section>
  );
};

export default CareerSummary;
