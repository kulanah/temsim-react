import React, { Component } from 'react';
import './App.css';


import { LeftColumn } from './components/LeftColumn';
import { StartMenu } from './components/StartMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftColumn />
        <StartMenu />
      </div>
    );
  }
}

export {App};
