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
      <div className="col-sm-5 offset-7">
        <button className="col-sm-12 startGameButton" onClick={this.startGame}>Börja spela</button>
      </div>
    )
  }
}

export default StartGameButton;