import React from 'react';

import { Filter } from './Filter';
import { PEELS } from './PEELS';
import { LeftColFiller } from './LeftColFiller';
import { Stigmator } from './Stigmator';

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