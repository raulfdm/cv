import React from 'react';
import styled from 'styled-components';

import CourseList from 'atoms/course-list';

const Language = styled.li``;

const LanguageEducation = ({ education }) => {
  return (
    <CourseList>
      {education.map(lang => (
        <Language key={lang.id}>{lang.label}</Language>
      ))}
    </CourseList>
  );
};

export default LanguageEducation;
