import React from 'react';
import styled from 'styled-components';

import { MainContext } from 'src/contexts/main';
import CourseList from 'atoms/course-list';
import RangeDate from 'molecules/range-date';

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

const FormalEducation = () => {
  const { formal_education } = React.useContext(MainContext);

  if (!formal_education) {
    return null;
  }

  return (
    <CourseList>
      {Object.entries(formal_education).map(([educationId, educationData]) => {
        return (
          <FormalItem key={educationId}>
            <Period>
              <RangeDate init={educationData.start_date} end={educationData.end_date} />
            </Period>
            <Company>{`${educationData.name} - ${educationData.foundation}`}</Company>
          </FormalItem>
        );
      })}
    </CourseList>
  );
};

export default FormalEducation;
