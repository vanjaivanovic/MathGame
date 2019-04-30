import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Characters from '../JSON/Stories.json';

import BubbleGame from '../MathGames/BubbleGameComponents/BubbleGame.js';
import CharacterList from './CharacterList.js';
import ChooseCharacter from './Characters.js';
import ChooseOperator from './Operators.js';
import Chapter from '../Chapters/Chapter.js';

import TeacherGame from '../MathGames/TeacherGameComponents/TeacherGame.js';
import DragAndDropGame from '../MathGames/DragAndDropGameComponents/DragAndDropGame.js';
import Hint from '../Helpers/Components/Hint.js';
import HintButton from '../Helpers/Components/HintButton.js';
import ProfileButton from '../Helpers/Components/ProfileButton.js';
import EndOfGame from '../Helpers/Components/EndOfGame.js';

import PopUp from '../PopUp/popUp.js';
import StartPage from '../StartPage/StartPage.js';
import JumpRopeGame from '../MathGames/GameActivitiesComponents/JumpRope.js';
import ThrowDice from '../MathGames/GameActivitiesComponents/ThrowDice.js';
import HeaderTitle from '../Helpers/Components/HeaderTitle.js';
import GameChoiceTitle from './GameChoiceTitle.js';
import GameDescriptionPopUp from '../PopUp/GameDescriptionPopUp.js';
import WholeGameDescriptionPopUp from '../PopUp/WholeGameDescriptionPopUp.js';

import CharacterBook from '../Chapters/CharacterBook.js';
import GoBackButton from '../Helpers/Components/GoBackButton.js';
import QuitGameButton from './QuitGameButton.js';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    startPageBackground: "startPageSleep",
    wholeGameDescription: false,
    gameAndChapterBackground: 
      [

      "teacherGameBackground", "chapterBackground", 
      "dragAndDropGameBackground", "chapterBackground", 
      "bubbleGameBackground", "chapterBackground",
      "jumpRopeGameBackground", "chapterBackground",
      "diceGameBackground", "chapterBackground", 
      
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
    startPage: true,

    characterBook: false,
    characterCompleted: "",
    localStorage: [],
   }

   this.changeStartPageBackground = this.changeStartPageBackground.bind(this);
   this.characterChoiceIsClicked = this.characterChoiceIsClicked.bind(this);
   this.operatorButtonIsClicked = this.operatorButtonIsClicked.bind(this);
   this.startGameButtonIsClicked = this.startGameButtonIsClicked.bind(this);
   this.finishedGame = this.finishedGame.bind(this);
   this.finishedGameOfFive = this.finishedGameOfFive.bind(this);
   this.finishedThrowDiceGame = this.finishedThrowDiceGame.bind(this);
   this.finishedJumpRopeGame = this.finishedJumpRopeGame.bind(this);
   this.finishedGameDragAndDrop = this.finishedGameDragAndDrop.bind(this);
   this.newGameNewChapter = this.newGameNewChapter.bind(this);
   this.showHint = this.showHint.bind(this);
   this.closeHint = this.closeHint.bind(this);
   this.gameOfChoice = this.gameOfChoice.bind(this);
   this.showProfile = this.showProfile.bind(this);
   this.showStartPage = this.showStartPage.bind(this);
   this.popUp = this.popUp.bind(this);
   this.backToChapter = this.backToChapter.bind(this);
   this.showGameDescription = this.showGameDescription.bind(this);
   this.closeGameDescription = this.closeGameDescription.bind(this);
   this.closeWholeGameDescription = this.closeWholeGameDescription.bind(this);
   this.beginingOfGame = this.beginingOfGame.bind(this);
   this.showBookCompleted = this.showBookCompleted.bind(this);
   this.setlocalStorage = this.setlocalStorage.bind(this);
}

setlocalStorage(){
  let chaptersCompleted = this.state.nextChapter;
  let character = this.state.characterChosen;
  let storyCompleted = {chaptersCompleted: chaptersCompleted, character: character};
  
  let localStorageArray = this.state.localStorage;
  localStorageArray.push(storyCompleted);
  localStorage.setItem( 'storyCompleted',  JSON.stringify(localStorageArray) );
}

gameArray(chosenOperator){
   this.setState({
    games: [

      <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
      <DragAndDropGame finishedGameDragAndDrop={this.finishedGameDragAndDrop} operator={chosenOperator} finishedGameOfFive={this.finishedGameOfFive} showGameDescription={this.showGameDescription} />,
      <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
      <JumpRopeGame finishedJumpRopeGame={this.finishedJumpRopeGame} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
      <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} showGameDescription={this.showGameDescription}/>,
    
    ],

    hintButton: <HintButton showHint={this.showHint} closeHint={this.closeHint} />
    
   }); 
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
   let playAudio = new Audio();
    playAudio.src = require('../Audio/click.mp3');

    playAudio.play();
  
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
  if(count === 7){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 1500)  
  }
}

finishedJumpRopeGame(count){
  if(count === 3){
    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        chapter : true,
        newGame: false,
        hint: "",
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
      });
    }.bind(this), 1500)  
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
    }.bind(this), 2000)  
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
    }.bind(this), 2000)  
  }
}

newGameNewChapter(GameAndChapterIndex){
    if(this.state.nextChapter < 4){
        this.setState({
          chapter: false,
          newGame : true,
          game : GameAndChapterIndex + 1,
          gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex + 1,
          nextChapter: GameAndChapterIndex + 1
        });

    } else {
      this.setlocalStorage();
      this.setState({
        endOfGame: true,
        gameAndChapterBackgroundIndex : this.state.gameAndChapterBackgroundIndex
      });
    }
  }

  showHint(index){
    this.setState({
      hint: <Hint hintIndex={index} closeHint={this.closeHint}/>,
    });
  }

  closeHint(){
     this.setState({
      hint: ""
    });
  }

  showGameDescription(index){
    this.setState({
      gameDescriptionPopUp: <GameDescriptionPopUp closeGameDescription={this.closeGameDescription} gameDescriptionIndex={index} />,
    });
  }

  closeGameDescription(){
     this.setState({
      gameDescriptionPopUp: "",
    });
  }

  closeWholeGameDescription(){
    this.setState({
      startPageBackground: "",
      wholeGameDescription: false,
      gameChoice: true
    });
  }

  changeStartPageBackground(){
    this.setState({
      startPageBackground: "startPageAwake"
    })
  }

  beginingOfGame(){
    this.setState({
      startPageBackground: "",
      wholeGameDescription: true,
      startPage: false
    });
  }


  gameOfChoice(){
    this.setState({
      startPage: false,
      gameChoice: true,
      startPageBackground: false,
      wholeGameDescription: true
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
      gameAndChapterBackgroundIndex: 0,
      endOfGame: false,
      game: 0,
      nextChapter: 0,
      startPageBackground: ""

    });
  }

    showStartPage(){
     this.setState({
      gameChoice: false,
      startPage: true,
      chapter: false,
      operatorButton: false,
      characterChoice: false,
      startGameButton: false,
      characterChosen: "",
      popUpDiv: false,
      endOfGame: false,
      startPageBackground: "startPageSleep",
      gameAndChapterBackgroundIndex: 0,
      endOfGame: false,
      game: 0,
      nextChapter: 0,

      characterBook: false
    });
  }

  popUp(){
    this.setState({
      popUpDiv: <PopUp showProfile={this.showProfile} showStartPage={this.showStartPage}/>,
      chapter: false,
      games: false,
      hintButton: false,
      hint: false,
      gameChoice: false,
      startPageBackground: "startPageSleep"
    });
  }

  backToChapter(){
    let chosenOperator = this.state.operator;
     this.setState({
      popUpDiv: false,
      chapter: true,
      hintButton:  <HintButton showHint={this.showHint} closeHint={this.closeHint} />,
      games: [  
        <TeacherGame finishedGameOfFive={this.finishedGameOfFive} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
        <DragAndDropGame finishedGameDragAndDrop={this.finishedGameDragAndDrop} operator={chosenOperator} finishedGameOfFive={this.finishedGameOfFive} showGameDescription={this.showGameDescription} />,
        <BubbleGame finishedGame={this.finishedGame} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
        <JumpRopeGame finishedGame={this.finishedGame} operator={chosenOperator} showGameDescription={this.showGameDescription} />,
        <ThrowDice finishedThrowDiceGame={this.finishedThrowDiceGame} operator={chosenOperator} showGameDescription={this.showGameDescription}/>,        
      ],
     
      
    });
  }

  showBookCompleted(characterBook, characterCompleted){
      let playAudio = new Audio();
        playAudio.src = require('../Audio/book.mp3');
        playAudio.play();

    this.setState({
      characterBook: characterBook,
      characterCompleted: characterCompleted,
      gameChoice: false,
      startPageBackground: "completedBookPage"
    })
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
   let endOfGame = "";
   let startPage = "";
   let headerTitleGameChoice = "";
   let gameChoiceTitle = "";
   let gameDescriptionPopUp = this.state.gameDescriptionPopUp;
   let wholeGameDescription = "";
   let quitGameButton = "";

  let characterBookPage = "";
  let goBackButton = "";

  if(this.state.characterBook){
     characterBookPage = <CharacterBook characterCompleted={this.state.characterCompleted} showProfile={this.showProfile} />;
     goBackButton = <GoBackButton showProfile={this.showProfile} />;
  }


  if(this.state.startPage){
    startPage = <StartPage gameOfChoice={this.beginingOfGame} changeStartPageBackground={this.changeStartPageBackground} />;
    goBackButton = "";
  } else {
    startPage = "";
  }

  if(this.state.wholeGameDescription){
    wholeGameDescription = <WholeGameDescriptionPopUp closeWholeGameDescription={this.closeWholeGameDescription} gameDescriptionIndex="0" />;
  }   

  if(this.state.gameChoice){
    character = <ChooseCharacter characterChoiceIsClicked={this.characterChoiceIsClicked} characterButtonIsClickedStyle={this.state.characterButtonIsClickedStyle} showBookCompleted={this.showBookCompleted} />;
    operator = <ChooseOperator operatorButtonIsClicked={this.operatorButtonIsClicked} startGameButtonIsClicked={this.startGameButtonIsClicked} popUp={this.popUp} showGameDescription={this.showGameDescription} />;
    wholeGameDescription = "";
    Game = "";
    hintButton = "";
    headerTitleGameChoice = <HeaderTitle />;
    gameChoiceTitle = <GameChoiceTitle />;
    characterBookPage = "";
    goBackButton = "";
    quitGameButton = <QuitGameButton popUp={this.popUp} />

  }   

   if(this.state.operatorButton && this.state.characterChoice && this.state.startGameButton){
    Game = allGamesArray[this.state.game];
    hintButton =  this.state.hintButton ;
    character = "";
    operator = "";
    headerTitleGameChoice = "";
    gameChoiceTitle = "";
    gameAndChapterBackground= allGameAndChapterBackgrounds[this.state.gameAndChapterBackgroundIndex];
    wholeGameDescription = "";
    quitGameButton = "";
  }

  if(this.state.chapter){
    chapter = <Chapter newGameNewChapter={this.newGameNewChapter} chapter={this.state.nextChapter} storyToTell={this.state.characterChosen} />;
    Game= "";
    profileButton = <ProfileButton showProfile={this.showProfile} />;
    hintButton = "";
    gameDescriptionPopUp = "";

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
  }


  return(
    <div id={gameAndChapterBackground} className={this.state.startPageBackground}>
      <main>
          <div className="row header">
            {gameChoiceTitle}
            {quitGameButton}
            {headerTitleGameChoice}
            {hintButton}
            {gameDescriptionPopUp}
            {wholeGameDescription}
            {profileButton}
            {goBackButton}     
            {this.state.hint}
          </div>  


          <div className="row">  
            {this.state.popUpDiv} 
            {characterBookPage}    
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


