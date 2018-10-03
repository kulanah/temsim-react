import React from 'react';
import { MiniTitleBar } from './MiniTitleBar';

class DMCameraWindow extends React.Component{
  render(){
    return(
      <div className='DigitalMicrographCamera'>
        <MiniTitleBar/>
        test
      </div>
    );
  }
}

export { DMCameraWindow };