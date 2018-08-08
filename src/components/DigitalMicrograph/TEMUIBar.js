import React from 'react';

import 'windows.css';
import 'components/css/TEMUIBar.css';
import temicon from 'img/temuiicon.png';

const TEMUIBar = () => {
  return(
    <div className='temUiBar'>
      <div className='titleBar'>
        <span>
          <span><img src={temicon} alt=''/></span>
          <span>TEM User Interface</span>
        </span>
        <span>_ O X</span>
      </div>
    </div>
  );
};

export { TEMUIBar };