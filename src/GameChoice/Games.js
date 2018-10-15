import React, { Component } from 'react';
import BubbleGame from '../MathGames/BubbleGame.js';
import CharacterList from './CharacterList.js';
import ChooseCharacter from './Characters.js';
import ChooseOperator from './Operators.js';
import Chapter from '../Chapters/Chapter.js';
import { Container, Row, Col } from 'reactstrap';
import TeacherGame from '../MathGames/TeacherGameComponents/TeacherGame.js';
import DragAndDropGame from '../MathGames/DragAndDropGameComponents/DragAndDropGame.js';
import Hint from '../Helpers/Components/Hint.js';
import HintButton from '../Helpers/Components/HintButton.js';
import ProfileButton from '../Helpers/Components/ProfileButton.js';
import EndOfGame from '../Helpers/Components/EndOfGame/EndOfGame.js';
import FinishButton from '../Helpers/Components/FinishButton.js';
import PopUp from '../Helpers/Components/popUp.js';
import StartPage from '../StartPage/StartPage.js';
import StartGameButton from './StartGameButton.js';
import JumpRopeGame from '../MathGames/GameActivitiesComponents/JumpRope.js';
import ThrowDice from '../MathGames/GameActivitiesComponents/ThrowDice.js';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    operatorButton: false,
    operator: "",
    characterChoice : false,
    characterChosen: "",
    startGameButton: false,
    chapter: false,
    newGame: false,
    nextGame: 0,
    nextChapter: 0,
    game: 0,
    games: [],
    hint: "",
    hintButton: false,
    gameChoice: false,
    endOfGame: false,
    popUpDiv: "",
    bubblegame: false,
    startPage: true
   }

   this.characterChoiceIsClicked = this.characterChoiceIsClicked.bind(this);
   this.operatorButtonIsClicked = this.operatorButtonIsClicked.bind(this);
   this.startGameButtonIsClicked = this.startGameButtonIsClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
   this.finishedGameOfFive = this.finishedGameOfFive.bind(this);
   this.finishedThrowDiceGame = this.finishedThrowDiceGame.bind(this);
   this.newGameNewChapter = this.newGameNewChapter.bind(this);
   this.showHint = this.showHint.bind(this);
   this.closeHint = this.closeHint.bind(this);
   this.gameOfChoice = this.gameOfChoice.bind(this);
   this.showProfile = this.showProfile.bind(this);
   this.showStartPage = this.showStartPage.bind(this);
   this.popUp = this.popUp.bind(this);
   this.backToChapter = this.backToChapter.bind(this);
}

gameArray(chosenOperator){
   this.setState({
    games: [ 
      <JumpRopeGame finishedGame={this.finishedGame} operator={chosenOperator} />,
      <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} />,
      <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />, 
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,  
      <DragAndDropGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,  
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />, 
      <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />, 
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} /> 
    ],

    hintButton: <HintButton showHint={this.showHint}/>
   }) 
}

operatorButtonIsClicked(operator){
  if(operator === "+"){
    this.setState({
      operatorButton: true,
      operator: operator,
    });
   }

  if(operator === "-"){
    this.setState({
      operatorButton: true,
      operator: operator,
    });
   }

  if(operator === "*"){
    this.setState({
      operatorButton: true,
      operator: operator,
    });
   }

   this.gameArray(operator);
}

characterChoiceIsClicked(character){
  this.setState({
      characterChoice : true,
      characterChosen: character,
    });
}

startGameButtonIsClicked(){
  this.setState({
    startGameButton: true
  });
}

finishedThrowDiceGame(){
  setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false
      });
    }.bind(this), 3000)
}

finishedGame(count){
  if(count === 3){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false
      });
    }.bind(this), 1000)  
  }
}

finishedGameOfFive(correctAnswer){
  if(correctAnswer === 5){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false
      });
    }.bind(this), 1000)  
  }
}

newGameNewChapter(GameAndChapterIndex){
    if(this.state.nextChapter < 4){
        this.setState({
          chapter: false,
          newGame : true,
          game : GameAndChapterIndex + 1,
          nextChapter: GameAndChapterIndex + 1
        });

    } else {
      this.setState({
        endOfGame: true
      });

      console.log('end of game');
    }
  }

  showHint(index){
    this.setState({
      hint:  <Hint hintIndex={index} closeHint={this.closeHint}/>,
    });
  }

  closeHint(){
     this.setState({
      hint: ""
    });
  }

  gameOfChoice(){
    this.setState({
      startPage: false,
      gameChoice: true
    });
  }

  showProfile(){
     this.setState({
      gameChoice: true,
      chapter: false,
      operatorButton: false,
      characterChoice: false,
      popUpDiv: false,
      endOfGame: false

    });
  }

    showStartPage(){
     this.setState({
      gameChoice: false,
      startPage: true,
      chapter: false,
      operatorButton: false,
      characterChoice: false,
      popUpDiv: false,
      endOfGame: false

    });
  }

  popUp(){
    this.setState({
      popUpDiv: <PopUp backToChapter={this.backToChapter} showProfile={this.showProfile}/>,
      chapter: false,
      games: false,
      hintButton: false,
      hint: false
    });
  }

  backToChapter(){
     this.setState({
      popUpDiv: false,
      chapter: true,
      games: true,
      hint: true,
      hintButton: <HintButton showHint={this.showHint}/>
    });
  }

  render(){
   let allGamesArray = this.state.games;
   let Game = "";
   let character = "";
   let operator = "";
   let startGameButton = "";
   let chapter = "";
   let hintButton = "";
   let profileButton = "";
   let finishButton =  "";
   let endOfGame = "";
   let startPage = "";


  if(this.state.startPage){
    startPage = <StartPage gameOfChoice={this.gameOfChoice} />;
  } else {
    startPage = "";
  }

  if(this.state.gameChoice){
    character = <ChooseCharacter characterChoiceIsClicked={this.characterChoiceIsClicked} characterButtonIsClickedStyle={this.state.characterButtonIsClickedStyle} />;
    operator = <ChooseOperator operatorButtonIsClicked={this.operatorButtonIsClicked} />;
    startGameButton = <StartGameButton startGameButtonIsClicked={this.startGameButtonIsClicked} />;
    Game = "";
    hintButton = "";
  }   

   if(this.state.operatorButton && this.state.characterChoice && this.state.startGameButton){
    Game = allGamesArray[this.state.game];
    hintButton =  this.state.hintButton ;
    character = "";
    operator = "";
    startGameButton = "";
  }

  if(this.state.chapter){
    chapter = <Chapter newGameNewChapter={this.newGameNewChapter} chapter={this.state.nextChapter} storyToTell={this.state.characterChosen} />;
    Game= "";
    profileButton = <ProfileButton showProfile={this.showProfile} />;
    finishButton = <FinishButton popUp={this.popUp} />;
    hintButton = "";

  }

  if(this.state.newGame){
     chapter = "";
     Game = allGamesArray[this.state.game];
     hintButton =  this.state.hintButton;
     profileButton = "";
  }

  if(this.state.endOfGame){
    endOfGame = <EndOfGame showProfile={this.showProfile} showStartPage={this.showStartPage} />;
    chapter = ""; 
    profileButton = "";
    finishButton = "";
  }


  return(
    <div>
     <header>
        {hintButton}
        {profileButton}
        {finishButton}
        {this.state.hint}   
      </header>

      <main>
        <div className="row">  
          {this.state.popUpDiv}            
          {character}
          {operator}
          {startGameButton}
          {Game}
          {chapter}   
          {endOfGame}  
          {startPage}
         </div>             
      </main>
    </div>
    )
  }
}

export default Games;


