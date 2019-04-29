import React, { Component } from 'react';

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "zzzZ...",
      wakeUpMessage: false
    }
  
    this.callGameChoice = this.callGameChoice.bind(this);

  }
 
callGameChoice(){
   let playAudio = new Audio();
    playAudio.src = require('../Audio/wake.mp3');

    playAudio.play();

  const { gameOfChoice } = this.props;
  const { changeStartPageBackground } = this.props;
  changeStartPageBackground();

  this.setState({
    welcomeMessage: "Hellooo!",
    wakeUpMessage: true
  })

  setTimeout(function() { 
      gameOfChoice();
     }.bind(this), 3500)
}


render(){
  let wakeUpMessage =  <p className="wakeUpMessage"><span>zzzZ...</span><br/> Väck mig genom att klicka, <br/> så kan jag igång spelet kicka!</p>;
 
  if(this.state.wakeUpMessage){
     wakeUpMessage =  <p className="wakeUpMessage"><span>Jippi!</span><br/> Nu är jag pigg och glad, <br/> och redo för nästa blad!</p>;
  }

  return(
    <div className="happy">
      {wakeUpMessage}

      <div className="col-9 check">
        <input id="check" type="checkbox" onClick={this.callGameChoice} />
        <label htmlFor="check"></label>
      </div>
    </div>

  )
 }
}


export default StartPage;