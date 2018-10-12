import React from 'react';

class Input extends React.Component{
  constructor(props){
    super(props);

    this.state = {value: Number(this.props.defaultValue)};
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event){
    this.setState({value: event.target.value});
  }

  getValue(){
    return this.state.value;
  }

  render(){
    return(
      <div className='CenterLeftContent'>
        <span>{this.props.label}</span>

        <span><input onChange={this.changeValue} className='windowsInput removeSpinner' type='number' value={this.state.value}></input></span>
      </div>
    );
  }
}

export { Input };