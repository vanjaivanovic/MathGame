import React, { Component } from 'react';
import BubbleGame from '../MathGames/BubbleGame.js';
import CharacterList from './CharacterList.js';
import ChooseCharacter from './Characters.js';
import ChooseOperator from './Operators.js';
import Chapter from '../Chapters/Chapter.js';
import { Container, Row, Col } from 'reactstrap';
import TeacherGame from '../MathGames/TeacherGameComponents/TeacherGame.js';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    additionButton : false,
    characterChoice : false,
    chapter: false,
    newGame: false,
    games: [<TeacherGame/> , <BubbleGame />]

   }

   this.characterChoiceisClicked = this.characterChoiceisClicked.bind(this);
   this.event = this.additionButtonisClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
   this.newGame = this.newGame.bind(this);
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

newGame(){
    this.setState({
      newGame : true
    });
  }

  render(){
   let allGames = this.state.games;
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
    chapter = <Chapter newGame={this.newGame}/>;
    Game= "";
  }

  if(this.state.newGame){
       chapter = "";
       Game = allGames[0];
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


