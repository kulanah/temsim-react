import React from 'react';
import 'components/css/Dropdown.css';
import ExpandArrow from 'img/expandDropdown.svg';

class Dropdown extends React.Component{
  constructor(props){
    super(props);

    let className;
    let active;
    let selected = false;
    
    className = this.props.className ? this.props.className + ' Dropdown' : 'Dropdown';
    active = this.props.items ? this.props.items[0] : 'Search';

    this.state = { 
      className: className, 
      active: active, 
      selected: selected,
    };

    this.expandDropdown = this.expandDropdown.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.displayArrow = this.displayArrow.bind(this);
    this.render = this.render.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);

  }

  expandDropdown(){
    this.setState({selected: true});
    global.document.addEventListener('click', this.closeDropdown, false);
  }

  closeDropdown(event){
    if (event.target.className !== 'DropdownOptions'){
      this.setState({selected: false});
      global.document.removeEventListener('click', this.closeDropdown);
    }
  }

  displayDropdown(){
    if (this.state.selected){

      if (this.props.items){
        return this.displayOptions();
      } else {
        return this.displayEmpty();
      }

    } else {
      return null;
    }
  }

  displayOptions(){
    let optionsClassName = 'DropdownOptions ' + this.props.className + 'Options';
    let cssVal = null;

    if (this.props.topOffset){
      cssVal = {top: this.props.topOffset};
    }

    return(
      <div className={optionsClassName} style={cssVal}>
        {this.props.items.map(item => {
          return (<div className='DropdownSelection'>{item.text}</div>);
        })}
      </div>
    );
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
      <div className={this.state.className} onClick={this.expandDropdown}> 
        <div className='DropdownDisplay'>
          <span>
            {this.props.items && this.props.items[0] ? this.props.items[0].text : 'Search'}
          </span>
          {this.displayArrow()}
        </div>
        {this.displayDropdown()}
      </div>
    );
  }
}

export { Dropdown };