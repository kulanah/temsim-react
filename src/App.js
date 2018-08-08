import React, { Component } from 'react';
import './App.css';


import { LeftColumn } from './components/LeftColumn/LeftColumn';
import { StartMenu } from './components/StartMenu';
import { ExternalButtons } from './components/ExternalButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftColumn />
        <StartMenu />
        <ExternalButtons />
      </div>
    );
  }
}

export {App};
