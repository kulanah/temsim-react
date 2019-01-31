import React from 'react';

import { Checkbox } from 'components/MSWindow/Checkbox';

import leftarrow from 'img/leftarrow.svg';
import rightarrow from 'img/rightarrow.svg';
import expandImg from 'img/expandArrow.png';

import 'windows.css';
import 'components/css/HighTension.css';

class HighTension extends React.Component{
  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
          High Tension
          <span className='leftColExpand'>
            <button className='expandBox'><img src={expandImg} alt='' /></button>
          </span>
        </div>
        <div className='leftColContent vacuumText'>
          <div className='contentRow spaceBetween'>
            <button className='windowsButton' id='highTensionButton'>High Tension</button>
            <span id='HighTensionVoltage'>200 kV</span>
          </div>
          <div className='contentRow'>
            <select className='windowsSelect'>
              <option value='200kv'>200kv</option>
            </select>
            <button className='windowsButton'><img className='highTensionArrow' src={leftarrow} alt=''/></button>
            <button className='windowsButton'><img className='highTensionArrow' src={rightarrow} alt=''/></button>
          </div>
          <div className='contentRow flexRow'>
            <span>
              <Checkbox label='Free High Tension' />
            </span>
            <span id='emptyLine'></span>
          </div>
        </div>
      </div>
    );
  }
}

export { HighTension };