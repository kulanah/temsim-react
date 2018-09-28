import React from 'react';

import 'windows.css';
import { MinMaxCloseButtons } from 'components/MinMaxCloseButtons';

const TitleBar = (props) => {
  return(
    <div className='titleBar'>
      <span>
        <span className='titleBarIcon'><img src={props.icon} alt=''/></span>
        <span>{props.title}</span>
      </span>
      <MinMaxCloseButtons />
    </div>
  );
};

export { TitleBar };