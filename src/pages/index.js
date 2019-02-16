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

const CV = styled.main`
  max-width: 98rem;
  width: 100%;

  padding: 0 1.6rem;
  margin: 0 auto;
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
      <Layout>
        <Headers name={headers.name} description={headers.description} />
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
