import React from 'react';

import 'windows.css';
import { MinMaxCloseButtons } from 'components/MinMaxCloseButtons';

const TitleBar = (props) => {
  let icon = null;

  let setIcon = function(){
    if (props.icon){
      icon = <img src={props.icon} alt='' />;
    } else {
      icon = null;
    }
  };

  setIcon();

  return(
    <div className='titleBar'>
      <span>
        <span className='titleBarIcon'>{icon}</span>
        <span>{props.title}</span>
      </span>
      <MinMaxCloseButtons type={props.selection} />
    </div>
  );
};

export { TitleBar };