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
    this.clickOffDropDown= this.clickOffDropDown.bind(this);
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

  render(){
    return(
      <div className='fileMenuBar'>
        {this.createFileButtons()} 
      </div>
    );
  }
}

export { FileMenuBar };