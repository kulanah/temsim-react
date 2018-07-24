import React from 'react';
import '../windows.css';
import { SetupTab } from './SetupTab';
import { SearchTab } from './SearchTab';
import { TuneTab } from './TuneTab';
import { STEMTab } from './STEMTab';
import { FEGRegisterTab } from './FEGRegisterTab';
import { EFTEMTab } from './EFTEMTab';
import { DarkFieldTab } from './DarkFieldTab';
class LeftColumnWindows extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tabs: [<SetupTab />, <SearchTab />, <TuneTab />, <STEMTab />, <FEGRegisterTab />, <EFTEMTab />, <DarkFieldTab />]
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