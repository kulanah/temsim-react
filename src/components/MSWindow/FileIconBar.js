import React, { Component } from 'react';


class FileIconBar extends Component {
  constructor(props){
    super(props);

    this.displayIcons = this.displayIcons.bind(this);
  }

  displayIcons(){

  }

  render() {
    return (
      <div className='FileMenuIconBar'> 
        {this.displayIcons()}
      </div>
    );
  }
}

export { FileIconBar };