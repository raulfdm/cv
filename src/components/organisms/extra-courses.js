import React from 'react';
import styled from 'styled-components';

import { MainContext } from 'src/contexts/main';
import ExtraCourse from 'molecules/extra-course';

const ExtraCourses = styled.div`
  margin-top: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
`;

const ExtraCourseWrapper = () => {
  const { extra_courses } = React.useContext(MainContext);

  if (!extra_courses) {
    return null;
  }

  return (
    <ExtraCourses>
      <Title>Extra Courses</Title>
      {Object.entries(extra_courses).map(([courseId, courseData]) => (
        <ExtraCourse key={courseId} {...courseData} />
      ))}
    </ExtraCourses>
  );
};

export default ExtraCourseWrapper;
