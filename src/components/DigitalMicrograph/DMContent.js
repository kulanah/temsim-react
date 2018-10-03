import React from 'react';

import './DigitalMicrograph.css';
import { DMCameraWindow } from './DMCameraWindow';

class DMContent extends React.Component{
  render(){
    return(
      <div className='DMContentWindow'>
        <DMCameraWindow />
      </div> 
    );
  }
}

export { DMContent };