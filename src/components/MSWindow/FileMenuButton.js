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
      return <Popup {...this.state.popup}/>;
    }
  }

  disablePopup(){
    this.setState({ active: false });
  }

  clickItem(event){
    this.setState({
      popup: {
        x: event.clientX,
        y: event.clientY,
        header: this.props.header,
      }
    });
    this.props.onClick(this.props.header);
    this.showHeader();
  }

  showHeader(){
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