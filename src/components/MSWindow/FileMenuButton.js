import React from 'react';
import 'windows.css';
const FileMenuButton = (props) => {

  console.log(props);
  return (
    <div className='fileMenuBarButton'>{props.header}</div>
  );
};

export { FileMenuButton };