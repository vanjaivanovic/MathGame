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
    nextGame: 0,
    newChapter: "",
    games: []

   }

   this.characterChoiceisClicked = this.characterChoiceisClicked.bind(this);
   this.event = this.additionButtonisClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
   this.newGame = this.newGame.bind(this);
   this.test = this.test.bind(this);
}


additionButtonisClicked(){
    this.setState({
      additionButton : true,
      newChapter: "vanja"
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
      chapter : true,
    });
  }
}

test(){
  console.log('HEJ');
}

newGame(chapters){
    if(chapters < 10){

        this.setState({
        chapter: false,
        newGame : true,
        nextGame : chapters + 1,
        games: [<BubbleGame />, <TeacherGame testing={this.test} /> , <BubbleGame />]
      });
    } else {
      console.log("game over");
    }
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
    let nextGame = this.state.nextGame;

       chapter = "";
       Game = allGames[this.state.nextGame];



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


