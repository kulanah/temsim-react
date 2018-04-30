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
      tabs: ['Setup', 'Search', 'Tune', 'TEM', 'Feg Register', 'EFTEM', 'Dark Field']
    };


    this.incrementArray = this.incrementArray.bind(this);
    this.decrementArray = this.decrementArray.bind(this);
  }
  decrementArray(){
    if (this.state.startTab > 0){
      this.setState({
        startTab: this.state.startTab - 1
      });
    }
  }

  incrementArray(){
    if (this.state.startTab < this.state.tabs.length - 2){
      this.setState({
        startTab: this.state.startTab + 1
      });
    }
  }

  render(){
    return(
      <div className='tabsdiv'>
        <div className='titleBar'>Workset</div>
        <div className='tabs'>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 1]}</div>
          <div className='tabsheader'>{this.state.tabs[this.state.startTab + 2]}</div>
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
