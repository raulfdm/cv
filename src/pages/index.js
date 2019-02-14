import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Headers from '../components/Headers';
import Infos from '../components/Infos';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Interest from '../components/Interest';

import data from '../data.json';

const CV = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 960px) {
    width: 70%;
  }
`;

const IndexPage = () => {
  const {
    careerSummary,
    education,
    experiences,
    extraCourses,
    generalInfo,
    interests,
    projects,
    skills,
  } = data;

  return (
    <CV>
      <Layout>
        <Headers />
        <Infos data={generalInfo} />
        <Career data={careerSummary} />
        <Skills data={skills} />
        <Jobs data={experiences} />
        <Projects data={projects} />
        <Education data={{ education, extraCourses }} />
        <Interest data={interests} />
      </Layout>
    </CV>
  );
};

export default IndexPage;
