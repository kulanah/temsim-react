import React from 'react';
import '../windows.css';

import { Tabs } from './Tabs';
import { LeftColumnWindows } from './LeftColumnWindows';

class LeftColumn extends React.Component{
  render(){
    return(
      <div className='leftCol'>
        <Tabs />
        <LeftColumnWindows />
      </div>
    );
  }

}

export {LeftColumn};


