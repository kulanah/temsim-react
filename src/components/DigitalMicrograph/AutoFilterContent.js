import React from 'react';
import { TechniqueAFGroup } from './TechniqueAFGroup';
import { ViewAFGroup } from './ViewAFGroup';
import { EnergyAFGroup } from './EnergyAFGroups';
import { CommandsAFGroup } from './CommandsAFGroup';

import 'components/DigitalMicrograph/AutoFilterGroups.css';

class AutoFilterContent extends React.Component{
  render(){
    return(

      <div className='AutoFilterContent'>
        <TechniqueAFGroup />
        <ViewAFGroup />
        <EnergyAFGroup />
        <CommandsAFGroup />
      </div>
    );
  }
}

export { AutoFilterContent };