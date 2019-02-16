import React from 'react';
import styled from 'styled-components';

import CourseList from 'atoms/course-list';

const StyledCourseList = styled(CourseList)`
  padding: 1rem 0;
`;

const Language = styled.li``;

const LanguageEducation = ({ education }) => {
  return (
    <StyledCourseList>
      {education.map(lang => (
        <Language key={lang.id}>{lang.label}</Language>
      ))}
    </StyledCourseList>
  );
};

export default LanguageEducation;
