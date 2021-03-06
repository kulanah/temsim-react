import React from 'react';

import 'windows.css';
import { FileMenuButton } from './FileMenuButton';

class FileMenuBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      active: null,
    };

    this.selectButton = this.selectButton.bind(this);
    this.deselectMenu = this.deselectMenu.bind(this);
    this.createFileButtons = this.createFileButtons.bind(this);
    this.hoverButton = this.hoverButton.bind(this);
    this.clickOffDropDown = this.clickOffDropDown.bind(this);
    this.createFileIcons = this.createFileIcons.bind(this);
  }

  selectButton(title){
    this.setState({active: title});

    global.document.addEventListener('click', this.clickOffDropDown, false);
  }

  clickOffDropDown(event){
    if (event.target.className !== 'FileMenuDropDown'){
      this.setState({active: null});
      global.document.removeEventListener('click', this.clickOffDropDown);
    }
  }

  deselectMenu(){
    this.setState({active: null});
  }

  hoverButton(event){
    //state.active represents the currently selected drop down menu.  If one isn't selected value is null
    if (this.state.active !== null){
      this.setState({active: event});
    }
  }

  createFileButtons(){
    if (this.props){
      let buttons = [...this.props.data].map((menuButton, index) => {
        return <FileMenuButton key={index} onMouseOver={this.hoverButton} onClick={this.selectButton} active={this.state.active} {...menuButton} />;
      });
      return buttons;
    } else {
      return null;
    }
  }

  createFileIcons(){
    let iconsArr = [];
    if (this.props.icons){
      iconsArr = this.props.icons.map(icon => {
        if (icon.type === 'icon'){
          return <img src={icon.source} className='FileBarIcon' alt='' key={Math.random()} />;
        } else if (icon.type === 'disabledIcon'){
          return <img src={icon.source} className='DisabledFileBarIcon' alt='' key={Math.random()} />;
        } else if (icon.type === 'separator'){
          return <span className='IconBarSeparator' key={Math.random()}></span>;
        } else {
          return null;
        }
      });
    }
    return iconsArr;
  }

  render(){
    return(
      <div className='fileMenuBar'>
        <span className='FileMenuButtons'>
          {this.createFileButtons()} 
        </span>
        <span className='FileMenuIcons'>
          {this.createFileIcons()}
        </span>
      </div>
    );
  }
}

export { FileMenuBar };