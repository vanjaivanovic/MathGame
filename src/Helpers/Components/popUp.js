import React, { Component } from 'react';

class PopUp extends Component {
  constructor(props){
    super(props);

    this.callBackToChapter = this.callBackToChapter.bind(this);
  
    this.callShowProfileFunction = this.callShowProfileFunction.bind(this);
  }
  
  callShowProfileFunction(){
    const { showProfile } = this.props;

    showProfile();
  }

  callBackToChapter(){
   const { backToChapter } = this.props;

    backToChapter();
  }

	render(){
    return(
     
        <div className="popUpMessage col-8">
          <img src={require("../../Images/brokenHeart.png")} className="col-8 col-offset-2 col-sm-6 popUpImg" alt="Broken heart" />
         <div className="popUpContent">
              <p className="popUpquestion">Vill du verkligen sluta?</p>
              <button className="popUpButton" onClick={this.callBackToChapter}>Nej, skojar bara!</button>
              <div>
              <button className="popUpButton2" onClick={this.callShowProfileFunction}>Ja</button>
              </div>
         </div>
        </div>
      
      )
  } 
}

export default PopUp;