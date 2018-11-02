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
import JumpRopeGame from '../MathGames/GameActivitiesComponents/JumpRope.js';
import ThrowDice from '../MathGames/GameActivitiesComponents/ThrowDice.js';
import HeaderTitle from '../Helpers/Components/HeaderTitle.js';
import GameChoiceTitle from './GameChoiceTitle.js';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    startPageBackground: "startPageSleep",
    gameAndChapterBackground: 
      [  
      "bubbleGameBackground", "chapterBackground",
      "jumpRopeGameBackground", "chapterBackground",
      "diceGameBackground", "chapterBackground", 
      "teacherGameBackground", "chapterBackground", 
      "dragAndDropGameBackground", "chapterBackground",
      "dragAndDropGameBackground", "chapterBackground",
        "dragAndDropGameBackground", "chapterBackground",
      "teacherGameBackground", "chapterBackground", 
      "dragAndDropGameBackground", "chapterBackground",
      ],

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
    gameAndChapterBackgroundIndex: 0,
    games: [],
    hint: "",
    hintButton: false,
    gameChoice: false,
    endOfGame: false,
    popUpDiv: "",
    bubblegame: false,
    startPage: true
   }

   this.changeStartPageBackground = this.changeStartPageBackground.bind(this);
   this.characterChoiceIsClicked = this.characterChoiceIsClicked.bind(this);
   this.operatorButtonIsClicked = this.operatorButtonIsClicked.bind(this);
   this.startGameButtonIsClicked = this.startGameButtonIsClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
   this.finishedGameOfFive = this.finishedGameOfFive.bind(this);
   this.finishedThrowDiceGame = this.finishedThrowDiceGame.bind(this);
   this.finishedGameDragAndDrop = this.finishedGameDragAndDrop.bind(this);
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
   
    <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
    <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} />,
    
    <JumpRopeGame finishedGame={this.finishedGame} operator={chosenOperator} />,
     <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />, 
    <DragAndDropGame finishedGameDragAndDrop={this.finishedGameDragAndDrop} operator={chosenOperator} finishedGame={this.finishedGame} />,
    
  
        
      <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,  
      <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} />,
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
      <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,  
    ],

    hintButton: <HintButton showHint={this.showHint} closeHint={this.closeHint} />
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
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 3000)
}

finishedGame(count){
  if(count === 3){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 1000)  
  }
}

finishedGameOfFive(correctAnswer){
  if(correctAnswer === 5){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 1000)  
  }
}

finishedGameDragAndDrop(correctAnswer){
  if(correctAnswer === 1){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 1000)  
  }
}

newGameNewChapter(GameAndChapterIndex){
    if(this.state.nextChapter < 5){
        this.setState({
          chapter: false,
          newGame : true,
          game : GameAndChapterIndex + 1,
          gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
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

  changeStartPageBackground(){
    this.setState({
      startPageBackground: "startPageAwake"
    })
  }

  gameOfChoice(){
    this.setState({
      startPage: false,
      gameChoice: true,
      startPageBackground: false
    });
  }

  showProfile(){
     this.setState({
      gameChoice: true,
      chapter: false,
      operatorButton: false,
      characterChoice: false,
      startGameButton: false,
      popUpDiv: false,
      endOfGame: false,
      gameAndChapterBackgroundIndex: 0

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
      endOfGame: false,
      startPageBackground: "startPageSleep"

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
    let chosenOperator = this.state.operator;
     this.setState({
      popUpDiv: false,
      chapter: true,
      games: [  
          <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
          <JumpRopeGame finishedGame={this.finishedGame} operator={chosenOperator} />,
          <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} />,
          <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,   
          <DragAndDropGame finishedGameDragAndDrop={this.finishedGameDragAndDrop} operator={chosenOperator} />, 
          <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,  
          <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} />,
          <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
          <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} />,
          <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} />,  
      ],
      hint: true,
      hintButton: <HintButton showHint={this.showHint}/>
    });
  }

  render(){
   let allGamesArray = this.state.games;
   let allGameAndChapterBackgrounds = this.state.gameAndChapterBackground;
   let gameAndChapterBackground = "";
   let Game = "";
   let character = "";
   let operator = "";
   let chapter = "";
   let hintButton = "";
   let profileButton = "";
   let finishButton =  "";
   let endOfGame = "";
   let startPage = "";
   let headerTitleGameChoice = "";
   let gameChoiceTitle = "";


  if(this.state.startPage){
    startPage = <StartPage gameOfChoice={this.gameOfChoice} changeStartPageBackground={this.changeStartPageBackground} />;
  } else {
    startPage = "";
  }

  if(this.state.gameChoice){
    character = <ChooseCharacter characterChoiceIsClicked={this.characterChoiceIsClicked} characterButtonIsClickedStyle={this.state.characterButtonIsClickedStyle} />;
    operator = <ChooseOperator operatorButtonIsClicked={this.operatorButtonIsClicked} startGameButtonIsClicked={this.startGameButtonIsClicked} />;
    Game = "";
    hintButton = "";
    headerTitleGameChoice = <HeaderTitle />;
    gameChoiceTitle = <GameChoiceTitle />;
  }   

   if(this.state.operatorButton && this.state.characterChoice && this.state.startGameButton){
    Game = allGamesArray[this.state.game];
    hintButton =  this.state.hintButton ;
    character = "";
    operator = "";
    headerTitleGameChoice = "";
    gameChoiceTitle = "";
    gameAndChapterBackground= allGameAndChapterBackgrounds[this.state.gameAndChapterBackgroundIndex];
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
     gameAndChapterBackground = allGameAndChapterBackgrounds[this.state.gameAndChapterBackgroundIndex];
  }

  if(this.state.endOfGame){
    endOfGame = <EndOfGame showProfile={this.showProfile} showStartPage={this.showStartPage} />;
    chapter = ""; 
    profileButton = "";
    finishButton = "";
  }


  return(
    <div id={gameAndChapterBackground} className={this.state.startPageBackground}>
    <main>
       <div className="row header">  
        {gameChoiceTitle}
        {headerTitleGameChoice}
        {hintButton}
        {profileButton}
        {finishButton}      
        {this.state.hint}
        </div>  


        <div className="row">  
          {this.state.popUpDiv}  
              
          {character}
          {operator}
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


