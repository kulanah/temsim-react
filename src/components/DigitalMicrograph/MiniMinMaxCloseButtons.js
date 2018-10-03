import React from 'react';

import 'windows.css';
import 'components/css/MinMaxCloseButtons.css';
import closeIcon from 'img/closeicon.svg';

const MiniMinMaxCloseButtons = () => {
  return(
    <div className='minMaxCloseButtonsDiv'>
      <span className='windowsButton MiniCloseButton'><img className='MiniCloseButtonImg' src={closeIcon} alt=''/></span>
    </div>
  );
};

export { MiniMinMaxCloseButtons };
