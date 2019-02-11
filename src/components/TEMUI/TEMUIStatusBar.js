import React from 'react';
import blueSquare from 'img/bluesquare.svg';
import blueUnderline from 'img/blueunderline.svg';
import closeButton from 'img/closeicon.svg';
import expandButtonUp from 'img/expandDropdownUp.svg';

import 'components/TEMUI/TEMUIStatusBar.css';


import { Dropdown } from 'components/MSWindow/Dropdown';

class TEMUIStatusBar extends React.Component{

  createDropdown(){
    let dropdownProps = {
      expandDirection: 'up',
      items : [
        {
          text: ' - None - ',
          component: null
        }, {
          text: 'Alignments',
          component: null,
        }, {
          text: 'Application Preferences',
          component: null,
        }, {
          text: 'Application Selection',
          component: null,
        }, {
          text: 'Control Pads',
          component: null,
        }, {
          text: 'Dark Field',
          component: null,
        }, {
          text: 'Direct Alignments',
          component: null,
        }, {
          text: 'FEG Control (Expert)',
          component: null,
        }, {
          text: 'FEG Registers',
          component: null,
        }, {
          text: 'Filter',
          component: null,
        }, {
          text: 'High Tension',
          component: null,
        }, {
          text: 'Holography',
          component: null,
        }, {
          text: 'Normalizations',
          component: null,
        }, {
          text: 'PEELS',
          component: null,
        }, {
          text: 'STEM Detector (User)',
          component: null,
        }, {
          text: 'STEM Imaging (Expert)',
          component: null,
        }, {
          text: 'Stigmator',
          component: null,
        }, {
          text: 'System Status',
          component: null,
        }, {
          text: 'Vacuum (User)',
          component: null,
        }, {
          text: 'Vacuum Overview',
          component: null,
        }, {
          text: 'Workspace Layout',
          component: null,
        }
      ],
    };
    
    dropdownProps = {...dropdownProps, topOffset: -dropdownProps.items.length * 1.28 + 'em'};


    return <Dropdown className='StatusDADropdown' {...dropdownProps} />;
  }

  render(){
    return(
      <div className='TEMUIStatusBar'>
        <div className='StatusBarHeader'>
          <span id='StatusExpandUp'>
            <span>
             
            </span>
            <span>
              <button className='windowsButton'><img id='StatusBarDropDownUp' src={expandButtonUp} alt='' /></button>
            </span>
          </span>
          <span id='TecnaiHeader'>Tecnai G²</span>
          <span id='StatusHeaderDropdown'>
            <button className='windowsButton StatusBarDirectAlignButton'><img src={blueSquare} alt='' /></button>
            <button className='windowsButton StatusBarDirectAlignButton'><img src={blueUnderline} alt='' /></button>
            <span>
              {this.createDropdown()}
            </span>
            <button className='windowsButton StatusBarDirectAlignButton'><img id='StatusDAClose' src={closeButton} alt='' /></button>
          </span>
        </div>

        <div className='StatusBarInner'>
          <span>
            Obj Lens:
          </span>

          <span className='StatusBarColumn StatusGrow5'>
            <span>
               
            </span>
            <span>
              SA 34000 x
            </span>
            <span>
              TEM Bright Field
            </span>
          </span>
          
          <span className='StatusBarColumn StatusRightBorder StatusGrow3'>
            91.7359%
          </span>

          <span className='StatusBarColumn StatusGrow5'>
            <span className='StatusSpaceBetween'>
              <span>
                Screen: 
              </span>
              <span>
                0.000 nA
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
                Focus Step:
              </span>
              <span>
                1
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
                Spot Size: 
              </span>
              <span>
                3
              </span>
            </span>
          </span>
          
          <span className='StatusBarColumn StatusRightBorder StatusGrow5'>
            <span className='StatusSpaceBetween'>
              <span>
                Defoc.:
              </span>
              <span>
                -502.89nm
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
                Obj:
              </span>
              <span>
                91.7359 %
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
                C2:
              </span>
              <span>
              49.9573 %
              </span>
            </span>
          </span>

          <span className='StatusBarColumn StatusGrow5'>
            <span className='StatusSpaceBetween'>
              <span>
               X: 
              </span>
              <span>
                2.01 μm
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
               Y: 
              </span>
              <span>
                0.01 μm
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
               Z: 
              </span>
              <span>
                1.01 μm
              </span>
            </span>
          </span>

          <span className='StatusBarColumn StatusGrow5'>
            <span className='StatusSpaceBetween'>
              <span>
               A: 
              </span>
              <span>
                - 0.01 deg
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
               B: 
              </span>
              <span>
                38.83 deg
              </span>
            </span>
            <span className='StatusSpaceBetween'>
              <span>
               Dif: 
              </span>
              <span>
                61.481 %
              </span>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export { TEMUIStatusBar };