import React from 'react';
import styled from 'styled-components';

import { Section, SectionBody, SectionTitle } from 'atoms/section';
import { MainContext } from 'src/contexts/main';

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

const SkillSet = () => {
  const { hard_skills } = React.useContext(MainContext);

  return (
    <Section>
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionBody>
        {Object.entries(hard_skills).map(([hardSkillId, hardSkillData]) => {
          if (!hardSkillData.values) {
            return null;
          }

          return (
            <Group key={hardSkillId}>
              <Title>{hardSkillData.name}</Title>
              <List>
                {hardSkillData.values.map(name => (
                  <Skill key={name.value}>{name.label}</Skill>
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
