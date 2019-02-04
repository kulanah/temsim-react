import React from 'react';

import 'windows.css';
import icon from 'img/icon.png';
import { Window } from '../MSWindow/Window';
import { DMContent } from './DMContent';
import { AutoFilter } from './AutoFilter';

class DMWindow extends React.Component{
  constructor(props){
    super(props);

    this.createWindow = this.createWindow.bind(this);
    this.state= {autoFilter: <AutoFilter />};
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
            disabled: false,
          }, {
            title: 'Open...',
            type: 'hotkey',
            hotkey: 'CTRL+O',
            disabled: false,
          }, {
            title: 'Open Series...',
            type: 'single',
            disabled: true,
          }
        ]
      }, {
        header: 'Process',
        buttons: [
          {
            title: 'FFT',
            type: 'hotkey', 
            hotkey: 'CTRL+F',
            disabled: false,
          }, {
            title: 'Inverse FFT',
            type: 'single',
            disabled: false,
          }
        ]
      }
    ];

    return fileBar;
  }

  displayAutoFilter(){
    return this.state.autoFilter;
  }

  displayAutoFilterConditional(){
    if (this.state.autoFilter.state.visible === true){
      return this.state.autoFilter;
    } else {
      return null;
    }

  }

  componentDidMount(){
    this.displayAutoFilter = this.displayAutoFilterConditional;

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
        {this.displayAutoFilter()}

      </div>
    );
  }
}

export { DMWindow };