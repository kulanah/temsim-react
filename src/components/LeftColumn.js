import React from 'react';
import '../windows.css';

import { Tabs } from './Tabs';
import { LeftColumnWindows } from './LeftColumnWindows';

class LeftColumn extends React.Component{
  constructor(){
    super();

    this.state = {
      selectedTab: 0,
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(newTab){
    this.setState({selectedTab: newTab});
  }

  render(){
    return(
      <div className='leftCol'>
        <Tabs selectedTab={this.state.selectedTab} selectTab={this.selectTab}/>
        <LeftColumnWindows selectedTab={this.state.selectedTab} />
      </div>
    );
  }

}

export {LeftColumn};


