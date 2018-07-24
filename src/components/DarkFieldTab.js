import React from 'react';

import { DarkField } from './DarkField';
import { Holography } from './Holography';
import { LeftColFiller } from './LeftColFiller';

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