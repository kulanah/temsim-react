import React from 'react';

import 'components/TEMUI/TEMUIStatusBar.css';

class TEMUIStatusBar extends React.Component{
  render(){
    return(
      <div className='TEMUIStatusBar StatusGrow3'>
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