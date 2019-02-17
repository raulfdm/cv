import React from 'react';
import styled from 'styled-components';

import Layout from 'components/layout';

import Headers from 'molecules/headers';

import Information from 'molecules/information-section';
import CareerSummary from 'molecules/career-summary-section';
import SkillSet from 'molecules/skill-set-section';
import Interests from 'molecules/interests-section';

import CareerHistory from 'organisms/career-history-section';
import Projects from 'organisms/projects-section';
import Education from 'organisms/education-section';

import data from 'data.json';
import PrintStyles from 'styles/print';

const CV = styled.main`
  max-width: 79.8rem;
  width: 100%;

  padding: 0 1.6rem;
  margin: 0 auto;

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

  return (
    <CV>
      <Headers name={headers.name} description={headers.description} />
      <Layout>
        <PrintStyles />
        <Information data={generalInfo} cvOf={headers.name} />
        <CareerSummary data={careerSummary} />
        <SkillSet data={skillSet} />
        <CareerHistory data={experience} />
        <Projects data={projects} />
        <Education data={{ education, extraCourses }} />
        <Interests data={interests} />
      </Layout>
    </CV>
  );
};

export default IndexPage;
