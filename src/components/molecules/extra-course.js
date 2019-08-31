import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

ExtraCourse.propTypes = {
  platform_name: PropTypes.string,
  courses: PropTypes.array,
};

export default ExtraCourse;
