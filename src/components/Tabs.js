import React from 'react';
import tab1 from '../img/tabs2.png';
import leftarrow from '../img/leftarrow.svg';
import rightarrow from '../img/rightarrow.svg';
import '../windows.css';

class Tabs extends React.Component{
  constructor(){
    super();

    this.state = {
      startTab: 0,
      tabs: ['Setup', 'Search', 'Tune', 'TEM', 'Feg Register', 'EFTEM', 'Dark Field'],
      shiftedTabs: []
    };


    this.incrementArray = this.incrementArray.bind(this);
    this.decrementArray = this.decrementArray.bind(this);
  }

  decrementArray(){
    if (this.state.shiftedTabs.length > 0){
      let newtabs = this.state.tabs;
      newtabs.unshift(this.state.shiftedTabs[0]);
      this.setState({
        tabs: newtabs,
        shiftedTabs: this.state.shiftedTabs.slice(1)
      });
    }
  }

  incrementArray(){
    if (this.state.startTab < this.state.tabs.length - 1){
      let shifted = this.state.shiftedTabs;
      shifted.unshift(this.state.tabs[0]);
      this.setState({
        shiftedTabs: shifted,
        tabs: this.state.tabs.slice(1)
      });
    }
  }

  render(){
    return(
      <div className='tabsdiv'>
        <div className='titleBar'>Workset</div>
        <div className='tabs'>
          {this.state.tabs.map(tab =>{
            return(
              <div className='tabsheader'>{tab}</div>
            );
          })}
          {/* <div className='tabsheader'>{this.state.tabs[this.state.startTab]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 1]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 2]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 3]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 4]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 5]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 6]}</div> */}
        </div>
        <span className='scrollarrows'>
          <span className='arrowspan' onClick={this.decrementArray}><img className='arrowimage' src={leftarrow} alt='Left arrow for tabs scrolling'/></span>
          <span className='arrowspan' onClick={this.incrementArray}><img className='arrowimage' src={rightarrow} alt='Rightarrow for tabs scrolling'/></span>
        </span>
        <img src={tab1}/>
      </div>
    );
  }
}

export default Tabs;
