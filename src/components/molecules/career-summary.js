import React from 'react';
import styled from 'styled-components';

import { Section, SectionBody, SectionTitle } from 'atoms/section';

const CareerParagraph = styled.p`
  margin-bottom: 0.8rem;
`;

const CareerSummary = ({ data }) => {
  return (
    <Section>
      <SectionTitle>Career Summary</SectionTitle>
      <SectionBody>
        {data.map((paragraph, index) => (
          <CareerParagraph key={index}>{paragraph}</CareerParagraph>
        ))}
      </SectionBody>
    </Section>
  );
};

export default CareerSummary;
