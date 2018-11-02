import React, { Component } from 'react';

class GameChoiceTitle extends Component {
  constructor(props) {
    super(props);

  }
  
  render(){
    return(
      <h1 className="gameChoiceTitle col-12">Välj en person och ett räknesätt</h1>
    )
  }
}

export default GameChoiceTitle;