import React, { Fragment } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import education from '../../globals/data/education';
import { Section, SectionBody, SectionTitle } from '../Section/';

const ItemContainer = styled.div`
  padding: 0.4rem 0;
`;

const Item = styled.p`
  margin: 0.2rem 0;
`;

const Time = styled.time`
  font-weight: bold;
  font-size: 0.9rem;
`;
const LanguageItem = styled(Item)``;

const GraduationItem = styled(Item)``;

const generateTimes = (timeInit, timeEnd) => {
  const commonFormat = momentDate => {
    const month = momentDate.format('MMMM').substr(0, 3);
    const year = momentDate.format('YY');

    return `${month}'${year}`;
  };

  const actualTime = moment().format('YYYY-MM-DD');
  const isActual = actualTime === timeEnd.format('YYYY-MM-DD') ? 'Actual' : commonFormat(timeEnd);

  return (
    <Fragment>
      <Time dateTime={timeInit}>{commonFormat(timeInit)}</Time>
      {` - `}
      <Time dateTime={timeEnd}>{isActual}</Time>
    </Fragment>
  );
};

const generateCourse = (course, place) => `${course} - ${place}`;

const EducationWrapper = () => {
  return (
    <Section>
      <SectionTitle title="Education and Languages" />
      <SectionBody>
        <ItemContainer>
          {education.it.map(({ id, timeInit, timeEnd, course, place }) => {
            return (
              <GraduationItem>
                {generateTimes(timeInit, timeEnd)} - {generateCourse(course, place)}
              </GraduationItem>
            );
          })}
        </ItemContainer>
        <ItemContainer>
          {education.language.map(language => (
            <LanguageItem key={language.id}>{language.label}</LanguageItem>
          ))}
        </ItemContainer>
      </SectionBody>
    </Section>
  );
};

export default EducationWrapper;
