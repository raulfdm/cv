import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

const InterestItem = styled.p`
  ::before {
    content: '• ';
  }
`;

export default ({ data }) => {
  return (
    <Section>
      <SectionTitle title="Interest" />
      <SectionBody>
        {data.map((interest, index) => (
          <InterestItem key={interest + index}>{interest}</InterestItem>
        ))}
      </SectionBody>
    </Section>
  );
};
