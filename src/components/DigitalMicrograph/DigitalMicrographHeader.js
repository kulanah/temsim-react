import React from 'react';
import icon from 'img/icon.png';

import { TitleBar } from 'components/DigitalMicrograph/TitleBar';

class DigitalMicrographHeader extends React.Component{
  render(){
    return(
      <div>
        <TitleBar icon={icon} title="Digital Micrograph"/>
        <div className='fileMenuBar'>TEST HEADER PLEASE SEND HELP</div>
      </div>
    );
  }
}

export { DigitalMicrographHeader };