import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

const CareerParagraph = styled.p`
  margin: 0.5rem 0;
`;

export default ({ data }) => {
  return (
    <Section>
      <SectionTitle title="Career Summary" />
      <SectionBody>
        {data.map((paragraph, index) => (
          <CareerParagraph key={index}>{paragraph}</CareerParagraph>
        ))}
      </SectionBody>
    </Section>
  );
};
