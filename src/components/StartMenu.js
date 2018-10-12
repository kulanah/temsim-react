import React from 'react';
import './css/StartMenu.css';
import 'windows.css';

import startIcon from 'img/windowsStartImage.png';
import icon from 'img/temuiicon.png';
import icon2 from 'img/icon2.png';

class StartMenu extends React.Component{
  constructor(){
    super();

    this.setClock = this.setClock.bind(this);
    this.checkTime = this.checkTime.bind(this);

    this.state = {
      openWindows: [
        {
          'name': 'This is the first item',
          'icon': icon
        }, {
          'name': 'This is the second item',
          'icon': icon2
        }
      ]
    };
    
  }

  componentDidMount(){
    this.setClock();
  }

  setClock(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let ampm = 'AM';

    if (hour > 12){
      hour -= 12;
      ampm = 'PM';
    }

    minutes = this.checkTime(minutes);

    let clockString = hour + ':' + minutes + ' ' + ampm;
    this.setState({clockString: clockString});
    this.t = setTimeout(this.setClock, 5000);
  }

  checkTime(i) {
    if (i < 10){
      i = '0' + i;
    }  // add zero in front of numbers < 10
    return i;
  }

  render(){
    return(
      <div id='startMenuDiv'>
        <span id='startMenuLeft'>
          <div id='startButton' className='taskBarButton'>
            <span><img className='taskBarIcon' src={startIcon} alt=''/></span>
            <span className='windowsText bold'> Start</span>
          </div>
          <span id='startMenuSeparator'>  </span>
          {this.state.openWindows.map((item) => {
            return(
              <div key={item.name} className='taskBarButton windowsTask'>
                <img className='taskBarIcon' src={item.icon} alt=''/>
                <span className='windowsText'>
                  {item.name}
                </span>
              </div>
            );
          })}
        </span>
        <span className='clock'>
          <span>

          </span>
          <span>
            {this.state.clockString}
          </span>
        </span>
      </div>
    );
  }
}

export { StartMenu };