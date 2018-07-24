import React from 'react';

import { VacuumWindow } from './VacuumWindow';
import { FegControl } from './FegControl';
import { HighTension } from './HighTension';
import { LeftColFiller } from './LeftColFiller';


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
