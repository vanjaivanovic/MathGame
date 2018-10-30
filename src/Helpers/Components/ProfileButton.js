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
      <button className="col-1 profileButton" onClick={this.callShowHintFunction}>
      <img src={require('../../Images/profileIcon.svg')}/>
      <p className="profileBtnTitle">Byt spel</p></button>
    )
  }
}

export default ProfileButton;