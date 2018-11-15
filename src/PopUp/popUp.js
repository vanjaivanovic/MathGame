import React, { Component } from 'react';

class PopUp extends Component {
  constructor(props){
    super(props);

    this.callBackToProfile = this.callBackToProfile.bind(this);
  
    this.callshowStartPageFunction = this.callshowStartPageFunction.bind(this);
  }
  
  callshowStartPageFunction(){
    const { showStartPage } = this.props;

    setTimeout(function(){
      showStartPage();
    }.bind(this), 1000);
 
  }

  callBackToProfile(){
   const { showProfile } = this.props;

    showProfile();
  }

	render(){
    return(
     
        <div className="popUpMessage col-8">
          <img src={require("../Images/brokenHeart.png")} className="col-8 col-offset-2 col-sm-6 popUpImg" alt="Broken heart" />
         <div className="popUpContent">
              <p className="popUpquestion">Vill du verkligen sluta?</p>
              <button className="popUpButton" onClick={this.callBackToProfile}>Nej, skojar bara!</button>
              <div>
              <button className="popUpButton2" onClick={this.callshowStartPageFunction}>Ja</button>
              </div>
         </div>
        </div>
      
      )
  } 
}

export default PopUp;