import React from 'react';

import { FEGRegisters } from './Windows/FEGRegisters';
import { LeftColFiller } from './Windows/LeftColFiller';
import { Alignments } from './Windows/Alignments';

const FEGRegisterTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <FEGRegisters />
      <Alignments />
      <LeftColFiller />
    </div>
  );
};

export { FEGRegisterTab };