import React, { Component } from 'react';

class AFButton extends Component {
  render() {
    return (
      <div className='AFButton'>
        <img src={this.props.img} />
        
      </div>
    );
  }
}

export { AFButton };