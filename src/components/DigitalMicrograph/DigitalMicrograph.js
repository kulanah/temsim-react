import React from 'react';
import { DigitalMicrographHeader } from './DigitalMicrographHeader';
import { TEMUIBar } from './TEMUIBar';

import 'windows.css';
import 'components/css/DigitalMicrograph.css';


class DigitalMicrograph extends React.Component{
  render(){
    return(
      <div className='digitalMicrographDiv'>
        <TEMUIBar />
        <DigitalMicrographHeader />
        
      </div>
    );
  }
}

export { DigitalMicrograph };