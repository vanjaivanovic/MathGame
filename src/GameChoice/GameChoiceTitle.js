import React, { Component } from 'react';

class GameChoiceTitle extends Component {
  constructor(props) {
    super(props);

  }
  
  render(){
    return(
      <h1 className="gameChoiceTitle offset-2"><span style={{color: "rgba(79, 0, 255, 1)"}}>Välj</span><span style={{color: "rgba(20, 197, 192, 1)"}}>en</span>
      <span style={{color: "rgba(234, 22, 234, 0.97)"}}>person</span>
      <span style={{color: "red"}}>och</span><span style={{color: "orange"}}>ett</span> 
      <span style={{color: "rgba(23, 218, 23, 1)"}}>räknesätt</span></h1>
    )
  }
}

export default GameChoiceTitle;