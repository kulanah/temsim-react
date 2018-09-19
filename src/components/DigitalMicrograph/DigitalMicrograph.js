import React from 'react';
import { DigitalMicrographHeader } from './DigitalMicrographHeader';
import { TEMUIBar } from './TEMUIBar';

import 'windows.css';
import 'components/css/DigitalMicrograph.css';
import { Window } from './Window';
import icon from 'img/icon.png';


class DigitalMicrograph extends React.Component{
  constructor(props){
    super(props);

    this.createWindow = this.createWindow.bind(this);
  }

  createWindow(){
    let titleBar = {title: 'Digital Micrograph', icon: [icon]};
    let fileButtons = []
    return <Window titleBar={titleBar} />;

  }

  render(){
    return(
      <div className='digitalMicrographDiv'>
        {this.createWindow()}        
      </div>
    );
  }
}

export { DigitalMicrograph };