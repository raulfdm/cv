import React from 'react';
import styled from 'styled-components';
import extraCourses from '../../globals/data/extra-courses';

const ExtraCourse = styled.section``;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const FoundationName = styled.h4`
  display: inline;
  margin: 0;
`;

const CoursesByFoundation = styled.div``;

const CoursesList = styled.div`
  margin-top: 0;
  padding-left: 0.5rem;
`;

const CourseItem = styled.p`
  margin: 0.4rem 0;
  ::before {
    content: '• ';
  }
`;

export default () => {
  return (
    <ExtraCourse>
      <Title>Extra Courses</Title>
      {extraCourses.map(extra => {
        return (
          <CoursesByFoundation key={extra.id}>
            <FoundationName>{extra.foundation}</FoundationName>
            <CoursesList>
              {extra.courses.map(course => {
                return (
                  <CourseItem key={course.id}>
                    {course.name}
                    {' - '}
                    {course.hours} Hours
                  </CourseItem>
                );
              })}
            </CoursesList>
          </CoursesByFoundation>
        );
      })}
    </ExtraCourse>
  );
};
