import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Layout from 'components/layout';

import Headers from 'molecules/headers';

import Information from 'molecules/information-section';
import CareerSummary from 'molecules/career-summary-section';
import SkillSet from 'molecules/skill-set-section';
import Interests from 'molecules/interests-section';
import CareerHistory from 'organisms/career-history-section';
import Projects from 'organisms/projects-section';
import Education from 'organisms/education-section';

import PageLoader from 'molecules/page-loader';

import data from '../src/data.json';
import PrintStyles from 'styles/print';

const END_ANIMATION_MILLISECONDS = 2000;

const slideInBckCenter = keyframes`
  0% {
    transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const CV = styled.main`
  max-width: 79.8rem;
  width: 100%;

  padding: 0 1.6rem;
  margin: 0 auto;

  animation: ${slideInBckCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media print {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
`;

const IndexPage = () => {
  const {
    careerSummary,
    education,
    experience,
    extraCourses,
    generalInfo,
    interests,
    projects,
    skillSet,
    headers,
  } = data;

  const [isLoading, handleIsLoading] = useState(true);

  setTimeout(() => {
    handleIsLoading(false);
  }, END_ANIMATION_MILLISECONDS);

  return (
    <Layout>
      <Headers name={headers.name} description={headers.description} />
      {isLoading ? (
        <PageLoader />
      ) : (
        <CV>
          <PrintStyles />
          <Information data={generalInfo} cvOf={headers.name} />
          <CareerSummary data={careerSummary} />
          <SkillSet data={skillSet} />
          <CareerHistory data={experience} />
          <Projects data={projects} />
          <Education data={{ education, extraCourses }} />
          <Interests data={interests} />
        </CV>
      )}
    </Layout>
  );
};

export default IndexPage;
