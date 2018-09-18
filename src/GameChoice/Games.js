import React, { Component } from 'react';
import BubbleGame from '../MathGames/BubbleGame.js';
import CharacterList from './CharacterList.js';
import ChooseCharacter from './Characters.js';
import ChooseOperator from './Operators.js';
import Chapter from '../Chapters/Chapter.js';
import { Container, Row, Col } from 'reactstrap';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    additionButton : false,
    characterChoice : false,
    chapter: false

   }

   this.characterChoiceisClicked = this.characterChoiceisClicked.bind(this);
   this.event = this.additionButtonisClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
}


additionButtonisClicked(){
    this.setState({
      additionButton : true
    });
   }

characterChoiceisClicked(){
  this.setState({
      characterChoice : true
    });
}

finishedGame(count){
  if(count === 1){
    this.setState({
      chapter : true
    });
  }
}

  render(){
   
   let Game = "";
   let character = <ChooseCharacter characterChoiceisClicked={this.characterChoiceisClicked} />;
   let operator = <ChooseOperator event={() => this.additionButtonisClicked()} />;
   let chapter = "";

   if(this.state.additionButton && this.state.characterChoice){
    Game = <BubbleGame finishedGame={this.finishedGame} />;
    character = "";
    operator = "";

  }

  if(this.state.chapter){
    chapter = <Chapter />;
    Game= "";
  }

  return(
      <div className="row">  
        {character}
        {operator}
        {Game}
        {chapter}
      </div>
    )
  }
}

export default Games;


