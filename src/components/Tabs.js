import React from 'react';
import leftarrow from '../img/leftarrow.svg';
import rightarrow from '../img/rightarrow.svg';
import '../windows.css';

class Tabs extends React.Component{
  constructor(){
    super();

    this.state = {
      startTab: 0,
      leftTabs: [],
      visibleTabs: ['Setup', 'Search', 'Tune', 'TEM'],
      rightTabs: ['Feg Register', 'EFTEM', 'Dark Field']
    };

    this.incrementArray = this.incrementArray.bind(this);
    this.decrementArray = this.decrementArray.bind(this);
  }

  componentDidMount(){
    console.log('left: ' + this.state.leftTabs);
    console.log('visible: ' + this.state.visibleTabs);
    console.log('right: ' + this.state.rightTabs);
  }

  decrementArray(){
    if (this.state.leftTabs.length > 0){
      let newTabs = this.state.visibleTabs;
      let newRightTabs = [...this.state.rightTabs];
      let newLeftTabs = [...this.state.leftTabs];

      newRightTabs.push(newTabs.pop());
      newTabs.unshift(newLeftTabs.pop());

      this.setState({
        visibleTabs: newTabs,
        leftTabs: newLeftTabs,
        rightTabs: newRightTabs,
        startTab: this.state.startTab - 1,
      });
    }
  }

  incrementArray(){
    if (this.state.rightTabs.length > 0){
      let newTabs = this.state.visibleTabs;
      let newLeftTabs = [...this.state.leftTabs];

      newLeftTabs.push(newTabs[0]);
      newTabs = newTabs.slice(1);
      newTabs.push(this.state.rightTabs[0]);
      this.setState({
        visibleTabs: newTabs,
        rightTabs: this.state.rightTabs.slice(1),
        leftTabs: newLeftTabs,
        startTab: this.state.startTab + 1,
      });
    }
  }

  render(){
    return(
      <div className='tabsdiv'>
        <div className='titleBar'>Workset</div>
        <div className='tabBar'>
          <span className='tabs'>
            {this.state.visibleTabs.map(tab =>{
              return(
                <span className='tabsheader'>{tab}</span>
              );
            })}
          </span>
          <span className='scrollarrows'>
            <span className='arrowspan' onClick={this.decrementArray}><img className='arrowimage' src={leftarrow} alt='Left arrow for tabs scrolling'/></span>
            <span className='arrowspan' onClick={this.incrementArray}><img className='arrowimage' src={rightarrow} alt='Rightarrow for tabs scrolling'/></span>
          </span>
        </div>
      </div>
    );
  }
}

export { Tabs };
