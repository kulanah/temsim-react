import React from 'react';

import { LeftColFiller } from './LeftColFiller';
import { StageSquared } from './StageSquared';
import { BeamSettings } from './BeamSettings';

const SearchTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <StageSquared />
      <BeamSettings />
      <LeftColFiller />
    </div>
  );
};

export { SearchTab };
