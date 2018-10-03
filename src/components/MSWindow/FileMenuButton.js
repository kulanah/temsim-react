import React from 'react';
import ReactDOM from 'react-dom';

import 'windows.css';
import { Popup } from './Popup';

class FileMenuButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      active: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.disablePopup = this.disablePopup.bind(this);
  }

  showMenu(){
    if(this.state.active == true){
      return <Popup />;
    }
  }

  disablePopup(){
    this.setState({ active: false });
  }

  clickItem(){
    this.setState({
      active: true,
    });
  };

  render(){
    return (
      <div>
        <div className='fileMenuBarButton' onClick={this.clickItem}>{this.props.header}</div>
        {this.showMenu()}
      </div>
    );
  }
};

export { FileMenuButton };