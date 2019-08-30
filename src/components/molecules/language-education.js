import React from 'react';
import styled from 'styled-components';

import { MainContext } from 'src/contexts/main';
import CourseList from 'atoms/course-list';

const StyledCourseList = styled(CourseList)`
  padding: 1rem 0;
`;

const Language = styled.li``;

const LanguageEducation = () => {
  const { languages } = React.useContext(MainContext);

  if (!languages) {
    return null;
  }

  return (
    <StyledCourseList>
      {languages.map(lang => (
        <Language key={lang.value}>{lang.label}</Language>
      ))}
    </StyledCourseList>
  );
};

export default LanguageEducation;
