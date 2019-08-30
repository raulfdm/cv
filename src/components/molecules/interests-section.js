import React from 'react';
import styled from 'styled-components';

import { MainContext } from 'src/contexts/main';
import { Section, SectionBody, SectionTitle } from 'atoms/section';

const InterestItem = styled.li`
  display: block;
  ::before {
    content: '• ';
  }
`;

export default () => {
  const { interests } = React.useContext(MainContext);
  if (!interests) {
    return null;
  }

  return (
    <Section>
      <SectionTitle>Interests</SectionTitle>
      <SectionBody>
        <ul>
          {interests.map(interest => (
            <InterestItem key={interest.value}>{interest.label}</InterestItem>
          ))}
        </ul>
      </SectionBody>
    </Section>
  );
};
