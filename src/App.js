import React, { Component } from 'react';
import Headers from './components/Headers';
import Infos from './components/Infos';
import Career from './components/Career';
import Jobs from './components/Jobs';
import Education from './components/Education';
import Skills from './components/Skills';
import Interest from './components/Interest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Infos />
        <Career />
        <Skills />
        <Jobs />
        <Education />
        <Interest />
      </div>
    );
  }
}

export default App;
