
import React from 'react';

import 'windows.css';
import expandImg from 'img/expandArrow.png';

class BeamSettings extends React.Component{
  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
         Beam Settings 
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

export { BeamSettings };
