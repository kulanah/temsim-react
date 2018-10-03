import React from 'react';

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
    this.showHeader = this.showHeader.bind(this);
  }

  showMenu(){
    if(this.props.active === this.props.header){
      return <Popup text={this.props.header}/>;
    }
  }

  disablePopup(){
    this.setState({ active: false });
  }

  clickItem(event){
    console.log(event);
    console.log(event.clientX);
    this.props.onClick(this.props.header);
    this.showHeader();
  }

  showHeader(){
    console.log(this.props);
    if (this.props.active === this.props.header){
      return <div className='fileMenuBarButtonSelected' onClick={this.clickItem}>{this.props.header}</div>;
    } else {
      return <div className='fileMenuBarButton' onClick={this.clickItem}>{this.props.header}</div>;
    }
  }

  render(){
    return (
      <div>
        {this.showHeader()}
        {this.showMenu()}
      </div>
    );
  }
};

export { FileMenuButton };