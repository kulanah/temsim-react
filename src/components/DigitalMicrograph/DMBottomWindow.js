import React from 'react';

import { MiniTitleBar } from './MiniTitleBar';


class DMBottomWindow extends React.Component{
  render(){
    return(
      <div className='DigitalMicrographBottom'>
        <MiniTitleBar />
      </div>
    )
  } 
}

export { DMBottomWindow };