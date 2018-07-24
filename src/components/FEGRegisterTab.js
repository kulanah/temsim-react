import React from 'react';

import { FEGRegisters } from './FEGRegisters';
import { LeftColFiller } from './LeftColFiller';
import { Alignments } from './Alignments';

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