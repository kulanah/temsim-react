import React from 'react';

import 'windows.css';
import 'components/css/FileBarDropDown.css';

let displayDropdownContent = function(rows){
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
    <span className='DropDownRow'>
      <span className='OneItemRow'>
        {row.title}
      </span>
    </span>
  );

  return returnVal;
};

let displayHotkeyRow = function(row){
  let returnVal = (
    <span className='DropDownRow'>
      <span className='TwoItemRow'>
        {row.title}
        {row.hotkey}
      </span>
    </span>
  );

  return returnVal;
};

const Popup = (props) => {
  let cssVal = 'top: ' + props.clientY + '; left: ' + props.clientX + ';';
  return (
    <div className='FileMenuDropDown' css={cssVal}> 
      <span className='OneItemRow'>
        {displayDropdownContent(props.buttons)}
      </span>
    
    </div>
  );
};

export { Popup };