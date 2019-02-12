import React from 'react';
import 'windows.css';
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
      tabs: [<SetupTab key={Math.random} />, <SearchTab key={Math.random} />, <TuneTab key={Math.random} />, <STEMTab key={Math.random} />, <FEGRegisterTab key={Math.random} />, <EFTEMTab key={Math.random} />, <DarkFieldTab key={Math.random} />]
    };
  }

  render(){
    return(
      this.state.tabs.map((tabCol, i) => {
        if (this.props.selectedTab === i){
          return tabCol;
        } else { 
          return null;
        }
      })
    );
  }
}

export {LeftColumnWindows};