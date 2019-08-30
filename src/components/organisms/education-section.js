import React from 'react';

import { SectionTitle, SectionBody, Section } from 'atoms/section';
import FormalEducation from 'molecules/formal-education';
import LanguageEducation from 'molecules/language-education';

import ExtraCourses from 'organisms/extra-courses';

const EducationWrapper = () => {
  return (
    <Section>
      <SectionTitle>Education and Languages</SectionTitle>
      <SectionBody>
        <FormalEducation />
        <LanguageEducation />
        <ExtraCourses />
      </SectionBody>
    </Section>
  );
};

export default EducationWrapper;
