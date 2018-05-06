import React from 'react';
import beamsettings from '../img/beamsettings.png';
import darkfield from '../img/darkfield.png';
import detector from '../img/detector.png';
import directalignments from '../img/directalignments.png';
import eftemstigmator from '../img/eftemstigmator.png';
import fegcontrol from '../img/fegcontrol.png';
import fegregister from '../img/fegregister.png';
import hightension from '../img/hightension.png';
import infopanel from '../img/infopanel.png';
import peels from '../img/peels.png';
import stigmator from '../img/stigmator.png';
import vacuummenu from '../img/vacuummenu.png';
import stage from '../img/stage.png';
import '../windows.css';

class LeftColumnWindows extends React.Component{
  constructor(){
    super();

    this.state = {
      images:  [{
        vacuum: vacuummenu,
        hightension: hightension,
        fegcontrol: fegcontrol,
      }, {
        stage: stage,
        beamsettings: beamsettings
      }],
      openTab: 0
    };
  }

  render(){
    console.log(this.state.images[0]);
    // let currentTab = this.state.openTab;
    return(
      <div className='leftcolumnwindowsdiv'>
        <img src={this.state.images[0].vacuum}/>
        {/* {
          this.state.images[0].map(image => {
            return(<img src={image}/>);

          })
        }   */}
      </div>
    );
  }
}

export {LeftColumnWindows};