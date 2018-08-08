import React from 'react';

import { LeftColFiller } from './Windows/LeftColFiller';
import { Stigmator } from './Windows/Stigmator';
import { Alignments } from './Windows/Alignments';

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
