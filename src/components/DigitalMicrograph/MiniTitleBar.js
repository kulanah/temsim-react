import React from 'react';

import 'windows.css';
import './DigitalMicrograph.css';

import { MiniMinMaxCloseButtons } from './MiniMinMaxCloseButtons';

const MiniTitleBar = (props) => {
  return(
    <div className='MiniTitleBar'>
      <span>
      </span>
      
      <MiniMinMaxCloseButtons />
    </div>
  );
};

export { MiniTitleBar };