import React from 'react';

import 'windows.css';


const Popup = (props) => {
  let cssVal = 'top: ' + props.clientY + '; left: ' + props.clientX + ';';
  return (
    <div className='testDiv' css={cssVal}> {props.header} </div>
  );
};

export { Popup };