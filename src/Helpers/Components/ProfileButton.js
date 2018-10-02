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
      <button className="profileButton col-2" onClick={this.callShowProfileFunction}><i className="fas fa-child fa-3x"></i></button>
    )
  }
}

export default ProfileButton;