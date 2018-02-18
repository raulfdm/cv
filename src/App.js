import React, { Component } from 'react';
import Headers from './components/Headers';
import { SectionTitle } from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <SectionTitle title="oiee" />
      </div>
    );
  }
}

export default App;
