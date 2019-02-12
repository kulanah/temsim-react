import React from 'react';

class AutoFilterGroup extends React.Component{

  render(){
    let divTitle = this.props.groupName + 'AFGroup';
    return(
      <div className={divTitle}>
        <p>{this.props.groupName}</p>

      </div>
    )
  }
}

export { AutoFilterGroup };