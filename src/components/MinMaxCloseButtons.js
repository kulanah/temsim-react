import React from 'react';

import 'windows.css';
import 'components/css/MinMaxCloseButtons.css';
import minIcon from 'img/minimize.svg';
import maxIcon from 'img/maximize.svg';
import closeIcon from 'img/closeicon.svg';

const MinMaxCloseButtons = () => {
  return(
    <div className='minMaxCloseButtonsDiv'>
      <span className='windowsButton minMaxCloseButton'><img src={minIcon} alt=''/></span>
      <span className='windowsButton minMaxCloseButton'><img src={maxIcon} alt=''/></span>
      <span className='windowsButton minMaxCloseButton'><img src={closeIcon} alt=''/></span>
    </div>
  );
};

export { MinMaxCloseButtons };
