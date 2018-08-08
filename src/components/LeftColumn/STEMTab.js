import React from 'react';

import { STEMImagingExpert } from './Windows/STEMImagingExpert';
import { STEMDetectorUser } from './Windows/STEMDetectorUser';
import { DirectAlignments } from './Windows/DirectAlignments';
import { LeftColFiller } from './Windows/LeftColFiller';


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
