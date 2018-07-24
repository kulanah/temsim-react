import React from 'react';

import { STEMImagingExpert } from './STEMImagingExpert';
import { STEMDetectorUser } from './STEMDetectorUser';
import { DirectAlignments } from './DirectAlignments';
import { LeftColFiller } from './LeftColFiller';


const STEMTab = () =>{
  return (
    <div className='leftColWindowsDiv'>
      <STEMImagingExpert />
      <STEMDetectorUser />
      <DirectAlignments />
      <LeftColFiller />
    </div>
  );
};

export { STEMTab };
