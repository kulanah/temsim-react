import React from 'react';
import { FileMenuBar } from './FileMenuBar';
import { TitleBar } from './TitleBar';

const Window = (props) => {
  console.log(props);
  return(
    <div className='windowsWindow'>
      <TitleBar props={props.titleBar} />
      {/* <FileMenuBar props={props.fileBar} /> */}
      {/* {React.createElement(props.content)} */}
    </div>
  )
}

export { Window };