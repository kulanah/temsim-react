import React from 'react';
import { Window } from '../MSWindow/Window';
import { AutoFilterContent } from 'components/DigitalMicrograph/AutoFilterContent.js';

import 'components/DigitalMicrograph/AutoFilterGroups.css';

class AutoFilter extends React.Component{
  constructor(props){
    super(props);

    this.state = {visible: true};
  }

  buildTitleBar(){
    return {type: 'close'};
  }

  buildWindow(){

    let titleBar = {title: 'Autofilter', selection: 'close'};
    let content = <AutoFilterContent />;
    return <Window titleBar={titleBar} fileBar={[]} content={content}/>;
  }
  
  render(){
    return(
      <div className='AutoFilterWindow'>
        {this.buildWindow()}

      </div>
    );
  }
}

export { AutoFilter };