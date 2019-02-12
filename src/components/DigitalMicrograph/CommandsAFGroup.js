import React, { Component } from 'react';

import { AFButton } from 'components/DigitalMicrograph/AFButton';

import 'components/DigitalMicrograph/AutoFilterGroups.css';
import AFAcquireImg from 'img/autofilteracquire.png';
import AFAlignZLP from 'img/autofilteralignzlp.png';
import AFSave from 'img/autofiltersave.png';
import AFTuneGIF from 'img/autofiltertunegif.png';
import AFPrint from 'img/autofiltersave.png';

class CommandsAFGroup extends Component {
  render() {
    return (
      <div className='AFGroup CommandsAFGroup'>
        
        <span className='AFGroupHeader'>Commands</span>
        <span className='AFButtonsSpan AutoFilter2x3'>
          <span className='TopLeft2x3 AFButtonSpan'>
            <span>
              <AFButton img={AFAcquireImg} />
            </span>
            <span className='AFLabel'>
              Acquire
            </span>
          </span>
          <span className='TopRight2x3 AFButtonSpan'>
            <span>
              <AFButton img={AFAlignZLP} />
            </span>
            <span className='AFLabel'>
              Acquire ZLP
            </span>
          </span>

          <span className='MiddleLeft2x3 AFButtonSpan'>
            <span>
              <AFButton img={AFSave} />
            </span>
            <span>
              Save
            </span>
          </span>

          <span className='MiddleRight2x3 AFButtonSpan'>
            <span>
              <AFButton img={AFTuneGIF} />
            </span>
            <span>
              Tune GIF
            </span>
          </span>

          <span className='BottomLeft2x3 AFButtonSpan'>
            <span>
              <AFButton img={AFPrint} />
            </span>
            <span>
              Print 
            </span>
          </span>
        </span>
        
      </div>
    );
  }
}

export { CommandsAFGroup };