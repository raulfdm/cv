import React from 'react';
import styled from 'styled-components';
import { Section, SectionBody, SectionTitle } from './Section';
import interests from '../globals/data/interest';

const InterestItem = styled.p`
  ::before {
    content: '• ';
  }
`;

export default () => {
  return (
    <Section>
      <SectionTitle title="Interest" />
      <SectionBody>
        {interests.map((interest, index) => (
          <InterestItem key={interest + index}>{interest}</InterestItem>
        ))}
      </SectionBody>
    </Section>
  );
};
