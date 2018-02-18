import React from 'react';
import styled from 'styled-components';
import { Section, SectionBody, SectionTitle } from '../Section';
import skillSet from '../../globals/data/skills';

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

export default () => {
  return (
    <Section>
      <SectionTitle title="Tecnical Skills" />
      <SectionBody>
        {skillSet.map(skill => {
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
