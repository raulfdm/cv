import React from 'react';
import styled from 'styled-components';

import CourseList from 'atoms/course-list';

const CompanyName = styled.h4``;

const CourseItem = styled.li`
  margin: 0.4rem 0;
  ::before {
    content: '• ';
  }
`;

const ExtraCourse = ({ extraCourse }) => {
  return (
    <React.Fragment>
      <CompanyName>{extraCourse.foundation}</CompanyName>
      <CourseList>
        {extraCourse.courses.map(course => {
          return (
            <CourseItem key={course.id}>{`${course.name} - ${course.hours} Hours`}</CourseItem>
          );
        })}
      </CourseList>
    </React.Fragment>
  );
};

export default ExtraCourse;
