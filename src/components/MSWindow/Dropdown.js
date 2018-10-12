import React from 'react';
import 'components/css/Dropdown.css';
import ExpandArrow from 'img/expandDropdown.svg';

const Dropdown = (props) => {
  let id = '';
  if (props.id){
    id = props.id;
  }

  let displayArrow = function(){
    return(
      <span>
        <span className='DropdownExpandArrow'>
          <img src={ExpandArrow} className='DropdownArrowImage' alt=''/>
        </span>
      </span>
    )
  }

  return (
    <div className='Dropdown' id={id} >
      <span>
        Search
      </span>
      {displayArrow()}
    </div>
  );
};

export { Dropdown }