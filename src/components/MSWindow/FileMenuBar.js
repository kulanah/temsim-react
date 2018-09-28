import React from 'react';

import 'windows.css';
import { FileMenuButton } from './FileMenuButton';

const FileMenuBar = (props) => {
  let createFileButtons = function(){
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

  return(
    <div className='fileMenuBar'>
      {createFileButtons()} 
    </div>
  );
};

export { FileMenuBar };