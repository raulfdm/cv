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

const Platform = styled.div``;

const ExtraCourse = ({ platform_name, courses }) => {
  if (!courses || !platform_name) {
    return null;
  }

  return (
    <Platform>
      <CompanyName>{platform_name}</CompanyName>
      <CourseList>
        {courses.map((course, index) => {
          return <CourseItem key={index}>{`${course.name} - ${course.hours} Hours`}</CourseItem>;
        })}
      </CourseList>
    </Platform>
  );
};

export default ExtraCourse;
