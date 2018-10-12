import React from 'react';
import 'components/css/Dropdown.css';
import ExpandArrow from 'img/expandDropdown.svg';

const Dropdown = (props) => {
  let className = 'Dropdown';
  if (props.className){
    className = props.className + ' Dropdown';
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
    <div className={className} > 
      <span>
        Search
      </span>
      {displayArrow()}
    </div>
  );
};

export { Dropdown }