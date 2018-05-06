import React, { Component } from 'react';
import './App.css';


import { Tabs } from './components/Tabs';
import { LeftColumnWindows } from './components/LeftColumnWindows';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
        <LeftColumnWindows />
      </div>
    );
  }
}

export {App};
