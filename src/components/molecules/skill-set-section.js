import React from 'react';
import styled from 'styled-components';

import { Section, SectionBody, SectionTitle } from 'atoms/section';

const Group = styled.div`
  flex-direction: column;
  padding: 0.2rem 0;
  display: flex;
  align-items: baseline;
`;

const Title = styled.h3`
  font-weight: bold;
  ::after {
    content: ':';
  }
`;

const List = styled.ul``;

const Skill = styled.li`
  &:not(:last-child) {
    ::after {
      content: ', ';
    }
  }
`;

const SkillSet = ({ data }) => {
  return (
    <Section>
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionBody>
        {data.map(skill => {
          return (
            <Group key={skill.id}>
              <Title>{skill.title}</Title>
              <List>
                {skill.skills.map(value => (
                  <Skill key={value}>{value}</Skill>
                ))}
              </List>
            </Group>
          );
        })}
      </SectionBody>
    </Section>
  );
};

export default SkillSet;
