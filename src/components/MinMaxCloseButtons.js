import React from 'react';

import 'windows.css';
import 'components/css/MinMaxCloseButtons.css';
import minIcon from 'img/minimize.svg';
import maxIcon from 'img/maximize.svg';
import closeIcon from 'img/closeicon.svg';

const MinMaxCloseButtons = (props) => {
  

  let buildButtons = function(){ 
    let buttons = [];
    if (props.type === 'empty'){
      buttons.push(<span key='emptyButtons' ></span>);
    } else if (!props.type){
      buttons.push(<span key='minButton' className='windowsButton minMaxCloseButton'><img className='minMaxCloseButtonImg' src={minIcon} alt=''/></span>);
      buttons.push(<span key='maxButton' className='windowsButton minMaxCloseButton'><img className='minMaxCloseButtonImg' src={maxIcon} alt=''/></span>);
    
    }
    if (props.type !== 'empty'){
      buttons.push(<span key='closeButton' className='windowsButton minMaxCloseButton'><img className='minMaxCloseButtonImg' src={closeIcon} alt=''/></span>);
    }

    return buttons;

  };

  return(
    <div className='minMaxCloseButtonsDiv'>
      {buildButtons()}
    </div>
  );
};

export { MinMaxCloseButtons };
