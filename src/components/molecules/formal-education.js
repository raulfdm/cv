import React from 'react';
import styled from 'styled-components';
import RangeDate from 'molecules/range-date';
import CourseList from 'atoms/course-list';

const FormalItem = styled.li``;

const Period = styled.p`
  display: inline;
  font-weight: bold;
  ::after {
    content: ' - ';
  }
`;

const Company = styled.p`
  display: inline;
`;

const FormalEducation = ({ education }) => {
  return (
    <CourseList>
      {education.map(edu => {
        const { startOn, endOn, name, place, id } = edu;
        return (
          <FormalItem key={id}>
            <Period>
              <RangeDate init={startOn} end={endOn} />
            </Period>
            <Company>{`${name} - ${place}`}</Company>
          </FormalItem>
        );
      })}
    </CourseList>
  );
};

export default FormalEducation;
