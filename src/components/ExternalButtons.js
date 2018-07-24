import React from 'react';
import './css/ExternalButtons.css';

class ExternalButtons extends React.Component{

  render(){
    return(
      <div className='externalButtonsDiv'>
        <button className='externalButton'>Microscope Column</button>
        <button className='externalButton'>Microscope Controls</button>
        <button className='externalButton'>Microscope Setup</button>
        <button className='externalButton'>Lecture</button>
        <button className='externalButton'>Q&A</button>
        <button className='externalButton'>Examples and Applications</button>
        <button className='externalButton'>Homework</button>
        <button className='externalButton'>My Curriculum</button>
        <button className='externalButton'>Notepad</button>
        <button className='externalButton'>Help</button>
        <button className='externalButton'>PSU Lab Session</button>
      </div>
    );
  }
}

export { ExternalButtons };