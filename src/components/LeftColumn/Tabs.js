import React from 'react';
import leftarrow from 'img/leftarrow.svg';
import rightarrow from 'img/rightarrow.svg';
import 'windows.css';
import 'components/css/Tabs.css';

class Tabs extends React.Component{
  constructor(){
    super();

    this.state = {
      startTab: 0,
      leftTabs: [],
      visibleTabs: [{name: 'Setup', id: 0}, {name: 'Search', id: 1}, {name: 'Tune', id: 2}, {name: 'STEM', id: 3}, 
                    {name: 'Feg Register', id: 4}, {name: 'EFTEM', id: 5}, {name: 'Dark Field', id: 6}],
      hiddenTabs: [],
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
    let oldTabs = [...this.state.visibleTabs];
    let hiddenTabs = [...this.state.hiddenTabs];
    if (this.state.hiddenTabs.length > 0){
      hiddenTabs = [...this.state.hiddenTabs];
      oldTabs = [hiddenTabs.pop(1), ...this.state.visibleTabs];
    }

    this.setState({
      visibleTabs: oldTabs,
      hiddenTabs: hiddenTabs,
    });
  }

  incrementArray(){
    let oldTabs = [...this.state.visibleTabs];
    let hiddenTabs = [...this.state.hiddenTabs];

    if (oldTabs.length > 1){
      hiddenTabs.push(oldTabs.shift(1));
    }

    this.setState({
      visibleTabs: oldTabs,
      hiddenTabs: hiddenTabs
    });
  }

  render(){
    return(
      <div className='tabsdiv'>
        <div className='titleBar'>Workset</div>
        <div className='tabBar'>
          <span className='tabsOuter'>
            <span className='tabs'>
              {this.state.visibleTabs.map(tab =>{
                if (this.state.selected === tab.id){
                  return(
                    <span id={tab.id} key={tab.id} className='tabsheader button selectedTab'>{tab.name}</span>
                  );
                } else {
                  return(
                    <span id={tab.id} key={tab.id} onClick={this.selectTab} className='tabsheader button'>{tab.name}</span>
                  );
                }
              })}
            </span>
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
