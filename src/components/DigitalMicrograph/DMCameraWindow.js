import React from 'react';

import { MiniTitleBar } from './MiniTitleBar';
import { Dropdown } from 'components/MSWindow/Dropdown';
import { Checkbox } from '../MSWindow/Checkbox';
import { Input } from '../MSWindow/Input';

import DMExpand from 'img/expandDigitalMicrograph.svg';
import disabledLight from 'img/statusLightDisabled.png';
import configButton from 'img/cameraViewConfigButton.png';

import './DigitalMicrograph.css';

class DMCameraWindow extends React.Component{
  render(){
    return(
      <div className='DigitalMicrographCamera DigitalMicrographContent'>
        <MiniTitleBar/>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'>
              <img src={DMExpand} alt='' />
            </span>
            <span className='CenterLeftHeader'>
              Camera View
            </span>
          </div>
        </div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span>
              Setup: 
            </span>
            <Dropdown className='cameraSetupDropdown'/>
          </div>
          <div className='CenterLeftContent'>
            <Checkbox id='autoexposurecheck' label='Auto Exposure'/>
          </div>
          <Input label='Exposure (s)' defaultValue='0.1'/>
          <div className='CenterLeftContent'>

            <span><img src={disabledLight} alt=''/></span>
            <span><button className='windowsButton DMTextButton'>Start View</button></span>
            
          </div>
          <div className='CenterLeftContent'>
            <Checkbox id='autoexposurecheck' label='Focus Loupe'/>
          </div>
          <div className='CenterLeftContent'>
            <Checkbox id='autoexposurecheck' label='Auto Survey'/>
          </div>
          <div className='CenterLeftContent'>
            <Checkbox id='autoexposurecheck' label='Camera Inserted'/>
          </div>
          <div className='RightContent'>
            <button className='windowsButton DMConfigButton'><img src={configButton} alt=''/></button>
          </div>
        </div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'>
              <img src={DMExpand} alt='' />
            </span>
            <span className='CenterLeftHeader'>
              Camera Acquire
            </span>
          </div> 
        </div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span>
              Setup
            </span>
            <Dropdown className='cameraSetupDropdown'/>
          </div>
          <div className='CenterLeftContent'>
            <Checkbox label='Auto Exposure'/>
          </div>
          <div className='CenterLeftContent'>
            <Input label='Exposure (s)' defaultValue='1'/>
          </div>
          <div className='CenterContent'>
            <button className='windowsButton DMTextButton'>Start Acquire</button>
          </div>
          <div className='CenterContent'>
            <span className='emptyBar' />
            <div>
              <button className='windowsButton DMConfigButton'><img src={configButton} alt=''/></button>
            </div>
          </div>
        </div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'>
              <img src={DMExpand} alt='' />
            </span>
            <span className='CenterLeftHeader'>
              Intensity 
            </span>
          </div> 
        </div>
        <div className='DMContentGroup'>
          <div className='DMGradient'></div>
        </div>
      </div>
    );
  }
}

export { DMCameraWindow };