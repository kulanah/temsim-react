import React from 'react';
import '../windows.css';
import expandImg from '../img/expandArrow.png';

class VacuumWindow extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
          Vacuum (User)
          <span className='leftColExpand'>
            <button><img src={expandImg} alt='' /></button>
          </span>
        </div>
        <div className='leftColContent'>
          TEST CONTESTN
        </div>
      </div>
    );
  }

}


export {VacuumWindow};