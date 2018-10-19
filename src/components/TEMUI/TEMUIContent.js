import React from 'react';

import { DMWindow } from 'components/DigitalMicrograph/DMWindow';

class TEMUIContent extends React.Component{
  render(){
    return (
      <div id='TEMUIContent'>
        <DMWindow />
      </div>
    );
  } 
}

export { TEMUIContent };