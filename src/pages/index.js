import React from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import Infos from '../components/Infos';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Interest from '../components/Interest';

const CV = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 960px) {
    width: 70%;
  }
`;

const IndexPage = () => (
  <CV>
    <Headers />
    <Infos />
    <Career />
    <Skills />
    <Jobs />
    <Projects />
    <Education />
    <Interest />
  </CV>
);

export default IndexPage;
