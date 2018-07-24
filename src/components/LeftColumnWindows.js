import React from 'react';
import '../windows.css';
import { SetupTab } from './SetupTab';
import { SearchTab } from './SearchTab';
class LeftColumnWindows extends React.Component{
  constructor(){
    super();

    this.state = {
      openTab: 0,
      tabs: [<SetupTab />, <SearchTab />]
    };
  }

  render(){
    return(
      this.state.tabs.map((tabCol, i) => {
        if (this.state.openTab === i){
          return tabCol;
        }
      })
    );
  }
}

export {LeftColumnWindows};