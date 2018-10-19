import React from 'react';

import { MiniTitleBar } from './MiniTitleBar';


import DMExpand from 'img/expandDigitalMicrograph.svg';

class DMBottomWindow extends React.Component{
  render(){
    return(
      <div className='DigitalMicrographBottom DigitalMicrographContent'>
        <MiniTitleBar />
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'><img src={DMExpand} alt=''/></span>
            <span className='CenterLeftHeader'>Histogram</span>
          </div>
        </div>
        <div className='DMContentGroup DMBottomContent'></div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'><img src={DMExpand} alt=''/></span>
            <span className='CenterLeftHeader'>Display Control</span>
          </div>
        </div>
        <div className='DMContentGroup DMBottomContent'></div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'><img src={DMExpand} alt=''/></span>
            <span className='CenterLeftHeader'>Image Status</span>
          </div>
        </div>
        <div className='DMContentGroup DMBottomContent'></div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'><img src={DMExpand} alt=''/></span>
            <span className='CenterLeftHeader'>Acquistion Status</span>
          </div>
        </div>
        <div className='DMContentGroup DMBottomContent'></div>
        <div className='DMContentGroup'>
          <div className='CenterLeftContent'>
            <span className='CameraExpand'><img src={DMExpand} alt=''/></span>
            <span className='CenterLeftHeader'>Target</span>
          </div>
        </div>
      </div>
    );
  } 
}

export { DMBottomWindow };