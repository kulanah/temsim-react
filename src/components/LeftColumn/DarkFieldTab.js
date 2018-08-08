import React from 'react';

import { DarkField } from './Windows/DarkField';
import { Holography } from './Windows/Holography';
import { LeftColFiller } from './Windows/LeftColFiller';

const DarkFieldTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <DarkField />
      <Holography />
      <LeftColFiller />
    </div>
  );
};

export { DarkFieldTab };