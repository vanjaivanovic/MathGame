import React, { Component } from 'react';

class ProfileButton extends Component {
  constructor(props) {
    super(props);

    this.callShowProfileFunction = this.callShowProfileFunction.bind(this);
  }
  
  callShowProfileFunction(){
    const { showProfile } = this.props;

    showProfile();
  }

  render(){
    return(
      <button className="col-2 profileButton" onClick={this.callShowHintFunction}>Spelval</button>
    )
  }
}

export default ProfileButton;