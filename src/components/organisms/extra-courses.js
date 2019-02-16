import React from 'react';
import styled from 'styled-components';

import ExtraCourse from 'molecules/extra-course';

const ExtraCourses = styled.div`
  margin-top: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
`;

const Platform = styled.div``;

export default ({ extraCourses }) => {
  return (
    <ExtraCourses>
      <Title>Extra Courses</Title>
      {extraCourses.map(extra => (
        <Platform key={extra.id}>
          <ExtraCourse extraCourse={extra} />
        </Platform>
      ))}
    </ExtraCourses>
  );
};
