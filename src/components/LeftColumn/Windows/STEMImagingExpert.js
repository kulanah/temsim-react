import React from 'react';

import expandImg from 'img/expandArrow.png';
import 'windows.css';

class STEMImagingExpert extends React.Component{
  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
          STEM Imaging (Expert) 
          <span className='leftColExpand'>
            <button className='expandBox'><img src={expandImg} alt='' /></button>
          </span>
        </div>
        <div className='leftColContent vacuumText'>
          CONTENT
        </div>
      </div>
    );
  }
}

export { STEMImagingExpert };
