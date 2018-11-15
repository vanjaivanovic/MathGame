import React, { Component } from 'react';

class GoBackButton extends Component {
  constructor(props) {
    super(props);    
  }
 
  render(){
   const { showProfile } = this.props;
    return(
      <button className="col-2 profileButton" onClick={showProfile}>Spelval</button>
    )
  }
}

export default GoBackButton;