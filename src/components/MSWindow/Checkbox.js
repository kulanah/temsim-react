import React from 'react';

class Checkbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected: false};
    this.selectCheckbox = this.selectCheckbox.bind(this);
    this.generateCheckbox = this.generateCheckbox.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  returnState(){
    return this.state.selected;
  }

  selectCheckbox(){
    if(this.state.selected === true){
      this.setState({selected: false});
    } else { 
      this.setState({selected: true});
    }
  }

  generateCheckbox(){
    if (this.state.selected === true){ 
      return (
        <span className='checkbox'><span className='checkmark'>✓</span></span> 
      );
    } else {
      return (
        <span className='checkbox'><span className='checkmark'>‍</span></span> 
      );
    }
  }

  render(){
    return(
      <div onClick={this.selectCheckbox} className='checkboxRow'>
        {this.generateCheckbox()}
        <span className='checkboxLabel'>{this.props.label} </span>
      </div>
    );
  }
}

export { Checkbox };