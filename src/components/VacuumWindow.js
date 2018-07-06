import React from 'react';
import '../windows.css';
import './css/VacuumWindow.css';
import expandImg from '../img/expandArrow.png';

class VacuumWindow extends React.Component{
  constructor(){
    super();
    this.displayButton = this.displayButton.bind(this);
    this.selectTurbo = this.selectTurbo.bind(this);
    this.selectValves = this.selectValves.bind(this);

    this.state = {
      selectedButton: '',
    };
  }

  selectTurbo(){
    this.setState({
      selectedButton: 'turbo'
    });
  }

  selectValves(){
    this.setState({
      selectedButton: 'valves'
    });
  }

  displayButton(){
    if (this.state.selectedButton == 'valves'){
      return(
        <div className='leftAlignRow'>
          <button className='windowsButton vacuumButton selectedButton' onClick={this.selectValves}>Col. Valves Closed</button>
          <button className='windowsButton vacuumButton' onClick={this.selectTurbo}>Turbo On</button>
        </div>
      );
    } else if(this.state.selectedButton == 'turbo'){
      return(
        <div className='leftAlignRow'>
          <button className='windowsButton vacuumButton' onClick={this.selectValves}>Col. Valves Closed</button>
          <button className='selectedButton windowsButton vacuumButton' onClick={this.selectTurbo}>Turbo On</button>
        </div>
      );
    } else {
      return (
        <div className='leftAlignRow'>
          <button className='windowsButton vacuumButton' onClick={this.selectValves}>Col. Valves Closed</button>
          <button className='windowsButton vacuumButton' onClick={this.selectTurbo}>Turbo On</button>
        </div>
      );
    }
  }

  render(){
    return(
      <div className='leftColWindow'>
        <div className='leftColHeader'>
          Vacuum (User)
          <span className='leftColExpand'>
            <button className='expandBox'><img src={expandImg} alt='' /></button>
          </span>
        </div>
        <div className='leftColContent vacuumText'>
          <p className='redBackground'>Status: COL. VALVES </p>
          <p>Pressure</p>
          <div className='vacuumTable'>
            <p className='row1title tableVal'>Gun</p><p className='row1value greenTableVal'>1</p><p className='row1unit greenTableVal'>Log</p>
            <p className='row2title tableVal'>Column</p><p className='row2value greenTableVal'>1</p><p className='row2unit greenTableVal'>Log</p>
            <p className='row3title tableVal'>Camera</p><p className='row3value greenTableVal'>1</p><p className='row3unit greenTableVal'>Log</p>
            <p className='row4title tableVal'>Buffertank</p><p className='row4value boldTableVal'>1</p><p className='row4unit boldTableVal'>Log</p>
            <p className='row5title tableVal'>Backing Line</p><p className='row5alue boldTableVal'>1</p><p className='row5unit boldTableVal'>Log</p>
          </div>
          {this.displayButton()}
        </div>
      </div>
    );
  }
}

export { VacuumWindow };