import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

import careerSummary from '../globals/data/careerSummary';

const CareerParagraph = styled.p`
  margin: 0.5rem 0;
`;

export default () => {
  return (
    <Section>
      <SectionTitle title="Career Summary" />
      <SectionBody>
        {careerSummary.map((paragraph, index) => (
          <CareerParagraph key={index}>{paragraph}</CareerParagraph>
        ))}
      </SectionBody>
    </Section>
  );
};
