import React from 'react';

import 'windows.css';
import 'components/css/FileBarDropDown.css';

let displayDropdownContent = function(rows){
  let dropDown = rows.map(row => {
    if (row.type === 'hotkey'){
      return displayHotkeyRow(row);
    } else if (row.type === 'single'){
      return displaySingleRow(row);
    } else if (row.type === 'divider'){
      return displayDivider();
    } else {
      return 'blank row';
    }
  });

  return dropDown;
};

let displayDivider = function(){
  return (
    <span key={Math.random()} className='DropDownDivider'></span>
  );
};

let displaySingleRow = function(row){
  let className = 'DropDownRow';
  if (row.disabled === true){
    className += ' DisabledDropDown';
  }

  let returnVal = (
    <span className={className} key={row.title}>
      <span className='OneItemRow'>
        {row.title}
      </span>
    </span>
  );

  return returnVal;
};

let displayHotkeyRow = function(row){
  let className = 'DropDownRow';
  if (row.disabled === true){
    className += ' DisabledDropDown';
  }

  let returnVal = (
    <span className={className} key={row.title}>
      <span className='TwoItemRow'>
        <span>{row.title}</span>
        <span>{row.hotkey}</span>
      </span>
    </span>
  );

  return returnVal;
};

const Popup = (props) => {
  return (
    <div className='FileMenuDropDown'> 
      {displayDropdownContent(props.buttons)}
    </div>
  );
};

export { Popup };