import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

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
