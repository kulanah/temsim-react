import React from 'react';
import { FileMenuBar } from './FileMenuBar';
import { TitleBar } from './TitleBar';

const Window = (props) => {
  return(
    <div className='windowsWindow'>
      <TitleBar {...props.titleBar} />
      <FileMenuBar data={props.fileBar} />
      {props.content}
    </div>
  );
};

export { Window };