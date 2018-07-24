import React from 'react';
import '../windows.css';

import { VacuumWindow } from './VacuumWindow';
import { FegControl } from './FegControl';
import { HighTension } from './HighTension';
import { LeftColFiller } from './LeftColFiller';

class LeftColumnWindows extends React.Component{
  constructor(){
    super();

    this.state = {
      openTab: 0
    };
  }

  render(){
    return(
      <div className='leftColWindowsDiv'>
        <VacuumWindow />
        <HighTension />
        <FegControl />
        <LeftColFiller />
      </div>
    );
  }
}

export {LeftColumnWindows};