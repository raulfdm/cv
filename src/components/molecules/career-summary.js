import React from 'react';
import styled from 'styled-components';

import { Section, SectionBody, SectionTitle } from 'atoms/section';

const CareerParagraph = styled.p`
  margin: 0.5rem 0;
`;

export default ({ data }) => {
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
