import React from 'react';
import Headers from '../components/Headers';
import Infos from '../components/Infos';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Interest from '../components/Interest';

const IndexPage = () => (
  <React.Fragment>
    <Headers />
    <Infos />
    <Career />
    <Skills />
    <Jobs />
    <Projects />
    <Education />
    <Interest />
  </React.Fragment>
);

export default IndexPage;
