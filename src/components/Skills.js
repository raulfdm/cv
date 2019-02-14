import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';

const Title = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
  ::after {
    content: ':';
  }
`;

const Skills = styled.p`
  margin: 0;
`;

const Group = styled.div`
  padding: 0.2rem 0;
  display: flex;
  align-items: baseline;
`;

export default ({ data }) => {
  return (
    <Section>
      <SectionTitle title="Technical Skills" />
      <SectionBody>
        {data.map(skill => {
          return (
            <Group key={skill.id}>
              <Title>{skill.title}</Title>
              <Skills>{skill.skills.join(', ')}</Skills>
            </Group>
          );
        })}
      </SectionBody>
    </Section>
  );
};
