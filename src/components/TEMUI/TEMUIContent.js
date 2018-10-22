import React from 'react';

import { DMWindow } from 'components/DigitalMicrograph/DMWindow';
import { TEMUIStatusBar } from 'components/TEMUI/TEMUIStatusBar';

class TEMUIContent extends React.Component{
  render(){
    return (
      <div id='TEMUIContent'>
        <DMWindow />
        <TEMUIStatusBar />
      </div>
    );
  } 
}

export { TEMUIContent };