import React, { Component } from 'react';

class StartGameButton extends Component {
  constructor(props){
    super(props);

    this.startGame = this.startGame.bind(this);
  }

  startGame(){
    const { startGameButtonIsClicked } = this.props;

    startGameButtonIsClicked();
  }

  render(){
    return(
          <button className="col-12 offset-2 col-sm-8 startGameButton" onClick={this.startGame}>Börja spela</button>
    )
  }
}

export default StartGameButton;