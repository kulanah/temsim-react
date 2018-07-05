import React, { Component } from 'react';
import './App.css';


import { LeftColumn } from './components/LeftColumn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftColumn />
      </div>
    );
  }
}

export {App};
