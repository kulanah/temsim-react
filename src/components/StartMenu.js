import React from 'react';
import './css/StartMenu.css';
import 'windows.css';

import startIcon from 'img/windowsStartImage.png';
import icon from 'img/icon.png';
import icon2 from 'img/icon2.png';

class StartMenu extends React.Component{
  constructor(){
    super();

    this.state = {
      openWindows: [
        {
          'name': 'This is the first itme',
          'icon': icon
        }, {
          'name': 'This is the second item',
          'icon': icon2
        }
      ]
    };
  }

  render(){
    return(
      <div id='startMenuDiv'>
        <div id='startButton' className='taskBarButton'>
          <span><img className='taskBarIcon' src={startIcon} alt=''/></span>
          <span className='windowsText bold'> Start</span>
        </div>
        <span id='startMenuSeparator'>  </span>
        {this.state.openWindows.map((item) => {
          return(
            <div className='taskBarButton windowsTask'>
              <img className='taskBarIcon' src={item.icon} alt=''/>
              <span className='windowsText'>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export { StartMenu };