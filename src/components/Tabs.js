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
      visibleTabs: [{name: 'Setup', id: 0}, {name: 'Search', id: 1}, {name: 'Tune', id: 2}, {name: 'TEM', id: 3}],
      rightTabs: [{name: 'Feg Register', id: 4}, {name: 'EFTEM', id: 5}, {name: 'Dark Field', id: 6}],
      selected: 0,
    };

    this.incrementArray = this.incrementArray.bind(this);
    this.decrementArray = this.decrementArray.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(event){
    let newSelected = Number(event.target.id);
    this.setState({
      selected: newSelected,
    });

    this.props.selectTab(newSelected);
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
              if (this.state.selected === tab.id){
                return(
                  <span id={tab.id} className='tabsheader button selectedTab'>{tab.name}</span>
                );
              } else {
                return(
                  <span id={tab.id} onClick={this.selectTab} className='tabsheader button'>{tab.name}</span>
                );
              }
            })}
          </span>
          <span className='scrollarrows'>
            <span className='arrowspan button' onClick={this.decrementArray}><img className='arrowimage' src={leftarrow} alt='Left arrow for tabs scrolling'/></span>
            <span className='arrowspan button' onClick={this.incrementArray}><img className='arrowimage' src={rightarrow} alt='Rightarrow for tabs scrolling'/></span>
          </span>
        </div>
      </div>
    );
  }
}

export { Tabs };
