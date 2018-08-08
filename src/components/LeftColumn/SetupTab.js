import React from 'react';

import { VacuumWindow } from './Windows/VacuumWindow';
import { FegControl } from './Windows/FegControl';
import { HighTension } from './Windows/HighTension';
import { LeftColFiller } from './Windows/LeftColFiller';


const SetupTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <VacuumWindow />
      <HighTension />
      <FegControl />
      <LeftColFiller />
    </div>
  );
};

export { SetupTab };
