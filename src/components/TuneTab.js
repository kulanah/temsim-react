import React from 'react';

import { LeftColFiller } from './LeftColFiller';
import { Stigmator } from './Stigmator';
import { Alignments } from './Alignments';

const TuneTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <Stigmator />
      <Alignments />
      <LeftColFiller />
    </div>
  );
};

export { TuneTab };
