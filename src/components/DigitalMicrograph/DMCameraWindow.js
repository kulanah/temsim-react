import React from 'react';
import { MiniTitleBar } from './MiniTitleBar';
import { Dropdown } from 'components/MSWindow/Dropdown';

import DMExpand from 'img/expandDigitalMicrograph.svg';
import './DigitalMicrograph.css';

class DMCameraWindow extends React.Component{
  render(){
    return(
      <div className='DigitalMicrographCamera'>
        <MiniTitleBar/>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'>
              <img src={DMExpand} alt='' />
            </span>
            <span>
              Camera View
            </span>
          </div>
        </div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span>
              Setup: 
            </span>
            <Dropdown id='cameraSetupDropdown'/>
          </div>
        </div>
      </div>
    );
  }
}

export { DMCameraWindow };