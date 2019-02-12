import React from 'react';

import './DigitalMicrograph.css';
import { DMCameraWindow } from './DMCameraWindow';
import { DMBottomWindow } from './DMBottomWindow';

class DMContent extends React.Component{
  render(){
    return(
      <div className='DMContentBackground'>
        <div id='DMLeftColumn'>
          <DMCameraWindow />
          <DMBottomWindow />
        </div>
      </div> 
    );
  }
}

export { DMContent };