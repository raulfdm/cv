import React from 'react';
import styled from 'styled-components';

import { Section, SectionBody, SectionTitle } from 'atoms/section';

const InterestItem = styled.li`
  display: block;
  ::before {
    content: '• ';
  }
`;

export default ({ data }) => {
  return (
    <Section>
      <SectionTitle>Interests</SectionTitle>
      <SectionBody>
        <ul>
          {data.map(interest => (
            <InterestItem key={interest}>{interest}</InterestItem>
          ))}
        </ul>
      </SectionBody>
    </Section>
  );
};
