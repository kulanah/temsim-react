import React from 'react';

import { Filter } from './Windows/Filter';
import { PEELS } from './Windows/PEELS';
import { LeftColFiller } from './Windows/LeftColFiller';
import { Stigmator } from './Windows/Stigmator';

const EFTEMTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <Filter />
      <PEELS />
      <Stigmator />
      <LeftColFiller />
    </div>
  );
};

export { EFTEMTab };