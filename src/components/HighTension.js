import React from 'react';
import '../windows.css';
import leftarrow from '../img/leftarrow.svg';
import rightarrow from '../img/rightarrow.svg';
import './css/HighTension.css';
import expandImg from '../img/expandArrow.png';

class HighTension extends React.Component{
  constructor(){
    super();
  }

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
          <div className='contentRow'>
            <button className='windowsButton' id='highTensionButton'>High Tension</button>
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
              <input type='checkbox' name='' id=''/>
              Free High Tension 
            </span>
            <span id='emptyLine'></span>
          </div>
        </div>
      </div>
    );
  }
}

export { HighTension };