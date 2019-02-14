import React from 'react';
import styled from 'styled-components';

import ExtraCourses from './ExtraCourses';
import Section from './Section';
import SectionBody from './SectionBody';
import SectionTitle from './SectionTitle';
import RangeDate from './RangeDate';

const ItemContainer = styled.div`
  padding: 0.4rem 0;
`;

const Item = styled.p`
  margin: 0.2rem 0;
`;

const LanguageItem = styled(Item)``;

const GraduationItem = styled(Item)``;

const generateCourse = (course, place) => `${course} - ${place}`;

const EducationWrapper = ({ data }) => {
  const { education, extraCourses } = data;
  return (
    <Section>
      <SectionTitle title="Education and Languages" />
      <SectionBody>
        <ItemContainer>
          {education.it.map(({ id, timeInit, timeEnd, course, place }) => {
            return (
              <GraduationItem key={id}>
                <RangeDate init={timeInit} end={timeEnd} /> - {generateCourse(course, place)}
              </GraduationItem>
            );
          })}
        </ItemContainer>
        <ItemContainer>
          {education.language.map(language => (
            <LanguageItem key={language.id}>{language.label}</LanguageItem>
          ))}
        </ItemContainer>
        <ExtraCourses extraCourses={extraCourses} />
      </SectionBody>
    </Section>
  );
};

export default EducationWrapper;
