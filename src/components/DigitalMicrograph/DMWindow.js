import React from 'react';

import 'windows.css';
// import 'components/css/DigitalMicrograph.css';
import icon from 'img/icon.png';
import { Window } from '../MSWindow/Window';

class DMWindow extends React.Component{
  constructor(props){
    super(props);

    this.createWindow = this.createWindow.bind(this);
  }

  createFileBar(){
    let fileBar= [
      {
        header: 'File',
        buttons: [
          {
            title: 'New...',
            type: 'hotkey',
            hotkey: 'CTRL+N',
          }, {
            title: 'Open...',
            type: 'hotkey',
            hotkey: 'CTRL+O'
          }
        ]
      }, {
        header: 'Process',
        buttons: [
          {
            title: 'FFT',
            type: 'hotkey', 
            hotkey: 'CTRL+F',
          }, {
            title: 'Inverse FFT',
            type: 'single'
          }
        ]
      }
    ];

    return fileBar;
  }

  createWindow(){
    let titleBar = {title: 'Digital Micrograph', icon: icon};
    let fileBar = this.createFileBar();
    return <Window titleBar={titleBar} fileBar={fileBar}/>;
    // return <Window titleBar={titleBar} />;

  }

  render(){
    return(
      <div className='digitalMicrographDiv'>
        {this.createWindow()}        
      </div>
    );
  }
}

export { DMWindow };