import React from 'react';
import 'components/css/Dropdown.css';
import ExpandArrow from 'img/expandDropdown.svg';

class Dropdown extends React.Component{
  constructor(props){
    super(props);

    
    if (this.props.className){
      this.state = {
        className: this.props.className + ' Dropdown',
        selected: false,
      };
    } else{
      this.state = {
        className: 'Dropdown',
        selected: false,
      };
    }

    this.expandDropdown = this.expandDropdown.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.displayArrow = this.displayArrow.bind(this);
    this.render = this.render.bind(this);
  }

  expandDropdown(){
    this.setState({selected: !this.state.selected});
  }

  displayDropdown(){
    if (this.state.selected){

      if (this.props.options){
        return this.displayOptions();
      } else {
        return this.displayEmpty();
      }

    } else {
      return null;
    }
  }

  displayOptions(){

  }

  displayEmpty(){
    return <div className='EmptyOptions' />;
  }


  displayArrow(){
    return(
      <span>
        <span className='DropdownExpandArrow' onClick={this.expandDropdown}>
          <img src={ExpandArrow} className='DropdownArrowImage' alt=''/>
        </span>
      </span>
    );
  }

  render(){
    return (
      <div className={this.state.className} > 
        <div className='DropdownDisplay'>
          <span>
            Search
          </span>
          {this.displayArrow()}
        </div>
        {this.displayDropdown()}
      </div>
    );
  }
}

export { Dropdown };