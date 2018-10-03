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

  }

  selectButton(title){
    this.setState({active: title});
    console.log('selected ' + title);
    console.log(this.state);
  }

  deselectMenu(){
    this.setState({active: null});
  }

  createFileButtons(){
    if (this.props){
      let buttons = [...this.props.data].map((menuButton, index) => {
        return <FileMenuButton onClick={this.selectButton} active={this.state.active} {...menuButton} />;
      });
      return buttons;
    } else {
      return null;
    }
  };

  render(){
    return(
      <div className='fileMenuBar'>
        {this.createFileButtons()} 
      </div>
    );
  }
};

export { FileMenuBar };