import React from 'react';

import icon from 'img/temuiicon.png';

import { TEMUIContent } from 'components/TEMUI/TEMUIContent';
import { Window } from 'components/MSWindow/Window';

class TEMUI extends React.Component{
  createFileBar(){
    let fileBar= [
      {
        header: 'File',
        buttons: [
          {
            title: 'New...',
            type: 'hotkey',
            hotkey: 'Ctrl+N',
          }, {
            title: 'Open...',
            type: 'hotkey',
            hotkey: 'Ctrl+O'
          }
        ]
      }, {
        header: 'Mode',
        buttons: [
          {
            title: 'FFT',
            type: 'hotkey', 
            hotkey: 'Ctrl+F',
          }, {
            title: 'Inverse FFT',
            type: 'single'
          }
        ]
      }, {
        header: 'Help',
        buttons: [
          {
            title: 'test button',
            type: 'hotkey',
            hotkey: 'Ctrl+H',
          }
        ]
      }
    ];

    return fileBar;
  }

  createWindow(){
    let titleBar = {title: 'TEM User Interface', icon: icon};
    let fileBar = this.createFileBar();
    let content = <TEMUIContent />;
    return <Window content={content} titleBar={titleBar} fileBar={fileBar} />;
  }

  render(){
    return(
      <div id='TEMUI'>
        {this.createWindow()}
      </div>
    );
  }
}

export { TEMUI };