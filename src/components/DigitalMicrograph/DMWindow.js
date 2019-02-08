import React from 'react';

import 'windows.css';
import icon from 'img/icon.png';
import { Window } from '../MSWindow/Window';
import { DMContent } from './DMContent';
import { AutoFilter } from './AutoFilter';

import SaveIcon from 'img/SaveIcon.png';
import OpenIcon from 'img/OpenIcon.png';
import GreenIcon from 'img/GreenIcon.png';
import DotsSaveIcon from 'img/DotsSaveIcon.png';
import Save123Icon from 'img/123SaveIcon.png';
import CursorIcon from 'img/CursorIcon.png';
import HandIcon from 'img/HandIcon.png';
import MagnifierIcon from 'img/MagnifierIcon.png';
import TextIcon from 'img/TextIcon.png';

class DMWindow extends React.Component{
  constructor(props){
    super(props);

    this.createWindow = this.createWindow.bind(this);
    this.state= {autoFilter: <AutoFilter />};
  }

  createFileBar(){
    let fileBar = [
      {
        header: 'File',
        buttons: [
          {
            title: 'New...',
            type: 'hotkey',
            hotkey: 'Ctrl+N',
            disabled: false,
          }, {
            title: 'Open...',
            type: 'hotkey',
            hotkey: 'Ctrl+O',
            disabled: false,
          }, {
            title: 'Open Series...',
            type: 'single',
            disabled: true,
          }, {
            type: 'divider',
          }, {
            title: 'New Script...',
            type: 'hotkey',
            hotkey: 'Ctrl+K',
            disabled: true,
          }, {
            title: 'Execute Script...',
            type: 'single',
            disabled: true,
          }, {
            type: 'divider',
          }, {
            title: 'Close',
            type: 'hotkey',
            hotkey: 'Ctrl+W',
            disabled: true,
          }, {
            title: 'Save',
            type: 'hotkey',
            hotkey: 'Ctrl+S',
            disabled: true,
          }
        ]
      }, {
        header: 'Process',
        buttons: [
          {
            title: 'FFT',
            type: 'hotkey', 
            hotkey: 'Ctrl+F',
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

  createIconBar(){
    let icons = [
      {
        type: 'separator',
      }, {
        type: 'icon',
        source: OpenIcon,
      }, {
        type: 'icon', 
        source: GreenIcon,
      }, {
        type: 'icon', 
        source: SaveIcon,
      }, {
        type: 'icon',
        source: Save123Icon,
      }, {
        type: 'icon',
        source: DotsSaveIcon,
      }, {
        type: 'separator',
      }, {
        type: 'icon',
        source: CursorIcon,
      }, {
        type: 'icon',
        source: HandIcon,
      }, {
        type: 'icon',
        source: MagnifierIcon,
      }, {
        type: 'icon',
        source: TextIcon,
      }
    ];

    return icons;
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
    let iconBar = this.createIconBar();
    return <Window content={content} titleBar={titleBar} fileBar={fileBar} iconBar={iconBar}/>;
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