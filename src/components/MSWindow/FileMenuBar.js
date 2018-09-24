import React from 'react';

import 'windows.css';

const FileMenuBar = (props) => {
  return(
      <div className='fileMenuBar'>
        {props.items.map((menuButton, index) => {
          return React.createElement(menuButton, index);
        })};
      </div>
  )
}

export { FileMenuBar };