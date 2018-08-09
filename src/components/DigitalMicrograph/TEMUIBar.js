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
      <div className='fileMenuBar windowsText'>
        <span className='fileMenuBarButton disabled'>File</span>
        <span className='fileMenuBarButton disabled'>Mode</span>
        <span className='fileMenuBarButton disabled'>Help</span>
      </div>
    </div>
  );
};

export { TEMUIBar };