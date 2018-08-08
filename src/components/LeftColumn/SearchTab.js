import React from 'react';

import { LeftColFiller } from './Windows/LeftColFiller';
import { StageSquared } from './Windows/StageSquared';
import { BeamSettings } from './Windows/BeamSettings';

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
