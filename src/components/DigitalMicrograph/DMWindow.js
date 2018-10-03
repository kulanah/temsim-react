import React from 'react';

import 'windows.css';
import icon from 'img/icon.png';
import { Window } from '../MSWindow/Window';
import { DMContent } from './DMContent';

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
    let content = <DMContent />;
    return <Window content={content} titleBar={titleBar} fileBar={fileBar}/>;
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