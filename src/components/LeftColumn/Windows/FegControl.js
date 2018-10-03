import React from 'react';
import 'windows.css';
import downarrow from 'img/downarrow.svg';
import uparrow from 'img/uparrow.svg';
import enterbutton from 'img/enterbutton.svg';
import expandImg from 'img/expandArrow.png';
import 'components/css/FegControl.css';

class FegControl extends React.Component{
  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
          Feg Control (Expert)
          <span className='leftColExpand'>
            <button className='expandBox'><img src={expandImg} alt='' /></button>
          </span>
        </div>
        <div className='leftColContent vacuumText'>
          <div className='contentRow'>
            <button className='windowsButton' id='highTensionButton'>Operate</button>
            <span className='contentRowText'>Gun Lens: </span>
            <span className='stackedButtons'>
              <button className='windowsButton'><img src={uparrow} alt=''/></button>
              <button className='windowsButton'><img src={downarrow} alt=''/></button>
            </span>
          </div>
          <div className='contentRow'>
            <span className='contentRowText' id='leftSpace'>Extractor: </span>
            <span className='stackedButtons'>
              <button className='windowsButton'><img src={uparrow} alt=''/></button>
              <button className='windowsButton'><img src={downarrow} alt=''/></button>
            </span>
            <span>
              <button className='windowsButton' id='enterButton'><img src={enterbutton} alt=''/></button>
            </span>
          </div>
          <div className='contentRow' id='extractionTitle'>Extraction</div>
          <div className='contentRow extractionRow'></div>
          <div className='contentRow extractionTextRow'><span>4000</span><span>5000</span></div>

          <div className='contentRow extractionTextRow' id='extractionTitle'><span>FEG Emission</span><span></span>µA</div>
          <div className='contentRow extractionRow'></div>
          <div className='contentRow extractionTextRow'><span>0</span><span>100</span></div>
          <div className='contentRow'>Status: </div>
        </div>
      </div>
    );
  }
}

export { FegControl };