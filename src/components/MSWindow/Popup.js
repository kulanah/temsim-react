import React from 'react';

import 'windows.css';
import 'components/css/FileBarDropDown.css';

let displayDropdownContent = function(rows){
  console.log('test');
  let dropDown = rows.map(row => {
    if (row.type === 'hotkey'){
      return displayHotkeyRow(row);
    } else if (row.type === 'single'){
      return displaySingleRow(row);
    } else {
      return 'blank row';
    }
  });

  return dropDown;
};

let displaySingleRow = function(row){
  let returnVal = (
    <span className='DropDownRow' key={row.title}>
      <span className='OneItemRow'>
        {row.title}
      </span>
    </span>
  );

  return returnVal;
};

let displayHotkeyRow = function(row){
  let className = 'DropDownRow';
  console.log(row);
  if (row.disabled === true){
    className += ' DisabledDropDown';
  }

  let returnVal = (
    <span className={className}>
      <span className='TwoItemRow'>
        <span>{row.title}</span>
        <span>{row.hotkey}</span>
      </span>
    </span>
  );

  return returnVal;
};

const Popup = (props) => {
  let cssVal = 'top: ' + props.clientY + '; left: ' + props.clientX + ';';
  return (
    <div className='FileMenuDropDown' css={cssVal}> 
      {displayDropdownContent(props.buttons)}
    </div>
  );
};

export { Popup };