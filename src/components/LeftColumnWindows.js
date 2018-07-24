import React from 'react';
import '../windows.css';
import { SetupTab } from './SetupTab';
import { SearchTab } from './SearchTab';
class LeftColumnWindows extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tabs: [<SetupTab />, <SearchTab />]
    };
  }

  render(){
    return(
      this.state.tabs.map((tabCol, i) => {
        if (this.props.selectedTab === i){
          return tabCol;
        }
      })
    );
  }
}

export {LeftColumnWindows};