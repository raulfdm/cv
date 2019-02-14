import React from 'react';
import styled from 'styled-components';
import ExtraCourses from './ExtraCourses';
import { generateTimeRange } from '../utils/date.utils';
import education from '../globals/data/education';
import { Section, SectionBody, SectionTitle } from './Section';

const ItemContainer = styled.div`
  padding: 0.4rem 0;
`;

const Item = styled.p`
  margin: 0.2rem 0;
`;

const LanguageItem = styled(Item)``;

const GraduationItem = styled(Item)``;

const generateCourse = (course, place) => `${course} - ${place}`;

const EducationWrapper = () => {
  return (
    <Section>
      <SectionTitle title="Education and Languages" />
      <SectionBody>
        <ItemContainer>
          {education.it.map(({ id, timeInit, timeEnd, course, place }) => {
            return (
              <GraduationItem key={id}>
                {generateTimeRange(timeInit, timeEnd)} - {generateCourse(course, place)}
              </GraduationItem>
            );
          })}
        </ItemContainer>
        <ItemContainer>
          {education.language.map(language => (
            <LanguageItem key={language.id}>{language.label}</LanguageItem>
          ))}
        </ItemContainer>
        <ExtraCourses />
      </SectionBody>
    </Section>
  );
};

export default EducationWrapper;
