import React from 'react';

import 'windows.css';
import { FileMenuButton } from './FileMenuButton';

class FileMenuBar extends React.Component{
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     active: null,
  //   };
  // }

  selectButton(title){
    this.setState({active: title});
  }

  deselectMenu(){
    this.setState({active: null});
  }

  createFileButtons(){
    console.log(props);
    if (props){
      let buttons = [...props.data].map((menuButton, index) => {
        return <FileMenuButton {...menuButton} />;
      });
      return buttons;
    } else {
      return null;
    }

  };

  render(){
    return(
      <div className='fileMenuBar'>
        {createFileButtons()} 
      </div>
    );
  }
};

export { FileMenuBar };