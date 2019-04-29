import React, { Component } from 'react';
import MathExpression from './Expressions.js';
import BubbleAnswers from './Bubbles.js';

class BubbleGame extends Component {
constructor(props) {
   super(props);
   this.state = {
     wrapperStyle: "wrapper",
     bubbleGamesAnswerBoxStyle: "",
     a: 0,
     b: 0,
     operator: "",
     operatorIcon: "",
     resultOne: "?",
     resultTwo: "?",
     wrongAnswer1: "",
     wrongAnswer2: "",
     wrongAnswer3: "",
     wrongAnswer4: "",
     wrongAnswer5: "",
     count: 1,
     activeShakeCount: 1,
     bubbleOneCorrect: "bubble",
     bubbleTwoCorrect: "bubble",
     bubbleWrongOne: "bubble",
     bubbleWrongTwo: "bubble",
     bubbleWrongThree: "bubble",
     bubbleWrongFour: "bubble",
     bubbleWrongFive: "bubble",
     x1: "x1",
     x2: "x2",
     x3: "x3",
     x4: "x4",
     x5: "x5",
     x6: "x6",
     x7: "x7"
   };
   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.setStateOnWrongAnswerNumbers = this.setStateOnWrongAnswerNumbers.bind(this);

   this.wrongAnswerNumberOne = this.wrongAnswerNumberOne.bind(this);
   this.wrongAnswerNumberTwo = this.wrongAnswerNumberTwo.bind(this);
   this.wrongAnswerNumberThree = this.wrongAnswerNumberThree.bind(this);
   this.wrongAnswerNumberFour = this.wrongAnswerNumberFour.bind(this);
   this.wrongAnswerNumberFive = this.wrongAnswerNumberFive.bind(this);

   this.displayAnswer = this.displayAnswer.bind(this);
   this.activateShake = this.activateShake.bind(this);
 }

componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(3);

  this.calc(this.state.operator);
}

 componentWillMount(){
  const { operator } = this.props;
  if(operator === "+"){
    this.setState({
    operator: operator, 
    operatorIcon: <i className="fas fa-plus"></i>
    });
  }
   if(operator === "-"){
    this.setState({
    operator: operator, 
    operatorIcon: <i className="fas fa-minus"></i>
    });
  }

   if(operator === "*"){
    this.setState({
    operator: operator, 
    operatorIcon: <i className="fas fa-times"></i>
    });
  }
  
   this.setRandomNumber(operator);
 }

 setRandomNumber(operator){
   this.setState({    
     a: this.generateNumbers(operator),
     b: this.generateNumbers(operator),  
     answerBox: "?",
   });
 }
/*Generates random number between 0-10 to A*/
 generateNumbers(operator){
  let randomNumber = Math.floor(Math.random() * 15);

  if(operator === "*"){
   randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  return randomNumber;
 }

 calc(operator){
  let result = "";
  if(operator === "+"){
    result = this.state.a + this.state.b;
    this.setState({
     resultOne: this.state.a + this.state.b,
     resultTwo: this.state.a + this.state.b,
   });
  }

  if(operator === "*"){
    result = this.state.a * this.state.b;
    this.setState({
     resultOne: this.state.a * this.state.b,
     resultTwo: this.state.a * this.state.b,
   });
  }  

   if(operator === "-"){
    if(this.state.a < this.state.b){
      let a = this.state.a;
      this.state.a = this.state.b;
      this.state.b = a;
    }

    result = this.state.a - this.state.b;
         this.setState({
           resultOne: this.state.a - this.state.b,
           resultTwo: this.state.a - this.state.b,
         });
    } 


  this.setStateOnWrongAnswerNumbers(result);
 }

 setStateOnWrongAnswerNumbers(result){
  this.setState({
     wrongAnswer1: this.wrongAnswerNumberOne(result),
     wrongAnswer2: this.wrongAnswerNumberTwo(result),
     wrongAnswer3: this.wrongAnswerNumberThree(result),
     wrongAnswer4: this.wrongAnswerNumberFour(result),
     wrongAnswer5: this.wrongAnswerNumberFive(result),
  });
 }

  wrongAnswerNumberOne(result) {
  let wrongAnswerNumber1 = Math.floor(Math.random() * 15);

  if(this.state.operator === "*"){
      wrongAnswerNumber1 = Math.floor(Math.random() * 5) + 1;
  }
  
  if(wrongAnswerNumber1 === result){
    wrongAnswerNumber1 ++;
  }

  return wrongAnswerNumber1;
 }

  wrongAnswerNumberTwo(result) {
  let wrongAnswerNumber2 = Math.floor(Math.random() * 15);

  if(this.state.operator === "*"){
      wrongAnswerNumber2 = Math.floor(Math.random() * 5) + 1;
  }
  
  if(wrongAnswerNumber2 === result){
    wrongAnswerNumber2 ++;
  }

  return wrongAnswerNumber2;
 }

  wrongAnswerNumberThree(result) {
  let wrongAnswerNumber3 = Math.floor(Math.random() * 15);

  if(this.state.operator === "*"){
      wrongAnswerNumber3 = Math.floor(Math.random() * 5) + 1;
  }
  
  if(wrongAnswerNumber3 === result){
    wrongAnswerNumber3 ++;
  }

  return wrongAnswerNumber3;
 }

  wrongAnswerNumberFour(result) {
  let wrongAnswerNumber4 = Math.floor(Math.random() * 15);

  if(this.state.operator === "*"){
      wrongAnswerNumber4 = Math.floor(Math.random() * 5) + 1;
  }
  
  if(wrongAnswerNumber4 === result){
    wrongAnswerNumber4 ++;
  }

  return wrongAnswerNumber4;
 }

  wrongAnswerNumberFive(result) {
  let wrongAnswerNumber5 = Math.floor(Math.random() * 15);

  if(this.state.operator === "*"){
      wrongAnswerNumber5 = Math.floor(Math.random() * 5) + 1;
  }
  
  if(wrongAnswerNumber5 === result){
    wrongAnswerNumber5 ++;
  }

  return wrongAnswerNumber5;
 }

/* Display answer for the 'Equals to' */
 displayAnswer(correctBubble){
    let playAudio = new Audio();
    playAudio.src = require('../../Audio/bubbles.mp3');

    playAudio.play();
  
   if(correctBubble === 1){
    this.setState({
      bubbleTwoCorrect: "bubbleDisapear",
      bubbleOneCorrect: "bubbleCorrect",
      resultOne: "Rätt!",
      bubbleWrongOne: "bubbleDisapear",
      bubbleWrongTwo: "bubbleDisapear",
      bubbleWrongThree: "bubbleDisapear",
      bubbleWrongFour: "bubbleDisapear",
      bubbleWrongFive: "bubbleDisapear",
      bubbleGamesAnswerBoxStyle: "bubbleGamesAnswer",
       x1: "",
       x2: "",
       x3: "",
       x4: "",
       x5: "",
       x6: "",
       x7: ""
    });
  }

  if(correctBubble === 2){
    this.setState({
      bubbleTwoCorrect: "bubbleCorrect",
      bubbleOneCorrect: "bubbleDisapear",
      resultTwo: "Rätt!",
      bubbleWrongOne: "bubbleDisapear",
      bubbleWrongTwo: "bubbleDisapear",
      bubbleWrongThree: "bubbleDisapear",
      bubbleWrongFour: "bubbleDisapear",
      bubbleWrongFive: "bubbleDisapear",
      bubbleGamesAnswerBoxStyle: "bubbleGamesAnswer",
       x1: "",
       x2: "",
       x3: "",
       x4: "",
       x5: "",
       x6: "",
       x7: ""
    });
  }

  this.setState({
    answerBox: this.state.resultOne,
    wrapperStyle: "wrapper",
    count: this.state.count + 1,
  });
    setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
        this.setRandomNumber(this.state.operator);
        this.calc(this.state.operator);
        this.setState({
          wrapperStyle: "wrapper",
          bubbleTwoCorrect: "bubble",
          bubbleOneCorrect: "bubble",
          bubbleWrongOne: "bubble",
          bubbleWrongTwo: "bubble",
          bubbleWrongThree: "bubble",
          bubbleWrongFour: "bubble",
          bubbleWrongFive: "bubble",
          bubbleGamesAnswerBoxStyle: "",
           x1: "x1",
           x2: "x2",
           x3: "x3",
           x4: "x4",
           x5: "x5",
           x6: "x6",
           x7: "x7"
        })
  }.bind(this), 1500) 

    this.callFinishedGame();
}
callFinishedGame(){ 
   const { finishedGame } = this.props;
    let count = this.state.count;
    finishedGame(count);
}

activateShake(clickedBubble){
    let playAudio = new Audio();
    playAudio.src = require('../../Audio/wrong.mp3');
    playAudio.play();

  if(clickedBubble === 1){
    this.setState({
      bubbleWrongOne: "bubbleWrong",
      bubbleWrongTwo: "bubble",
      bubbleWrongThree: "bubble",
      bubbleWrongFour: "bubble",
      bubbleWrongFive: "bubble"
    });
  }


  if(clickedBubble === 2){
    this.setState({
      bubbleWrongOne: "bubble",
      bubbleWrongTwo: "bubbleWrong",
      bubbleWrongThree: "bubble",
      bubbleWrongFour: "bubble",
      bubbleWrongFive: "bubble"
    });
  }

  if(clickedBubble === 3){
    this.setState({
      bubbleWrongOne: "bubble",
      bubbleWrongTwo: "bubble",
      bubbleWrongThree: "bubbleWrong",
      bubbleWrongFour: "bubble",
      bubbleWrongFive: "bubble"
    });
  }


  if(clickedBubble === 4){
    this.setState({
      bubbleWrongOne: "bubble",
      bubbleWrongTwo: "bubble",
      bubbleWrongThree: "bubble",
      bubbleWrongFour: "bubbleWrong",
      bubbleWrongFive: "bubble"
    });
  }

  if(clickedBubble === 5){
    this.setState({
      bubbleWrongOne: "bubble",
      bubbleWrongTwo: "bubble",
      bubbleWrongThree: "bubble",
      bubbleWrongFour: "bubble",
      bubbleWrongFive: "bubbleWrong"
   });
  }
  
  setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
    this.setState({
      bubbleWrongOne: "bubble",
      bubbleWrongTwo: "bubble",
      bubbleWrongThree: "bubble",
      bubbleWrongFour: "bubble",
      bubbleWrongFive: "bubble"
    })
  }.bind(this), 1000) 
}

  render() {
   return (
    <div id={this.state.wrapperStyle}>
       <MathExpression NumberOne={this.state.a} NumberTwo={this.state.b} Operator={this.state.operatorIcon} bubbleGamesAnswerBoxStyle={this.state.bubbleGamesAnswerBoxStyle} AnswerBox={this.state.answerBox} />
       <BubbleAnswers 
            Answer={this.displayAnswer} 
            ResultOne={this.state.resultOne}
            ResultTwo={this.state.resultTwo} 
            ShakeHint={this.activateShake}
            BubbleWrongOne={this.state.bubbleWrongOne}
            BubbleWrongTwo={this.state.bubbleWrongTwo}
            BubbleWrongThree={this.state.bubbleWrongThree}
            BubbleWrongFour={this.state.bubbleWrongFour}
            BubbleWrongFive={this.state.bubbleWrongFive}
            BubbleOneCorrect={this.state.bubbleOneCorrect}
            BubbleTwoCorrect={this.state.bubbleTwoCorrect}
            WrongAnswer1={this.state.wrongAnswer1} 
            WrongAnswer2={this.state.wrongAnswer2} 
            WrongAnswer3={this.state.wrongAnswer3} 
            WrongAnswer4={this.state.wrongAnswer4} 
            WrongAnswer5={this.state.wrongAnswer5} 
            x1={this.state.x1}
            x2={this.state.x2}
            x3={this.state.x3}
            x4={this.state.x4}
            x5={this.state.x5}
            x6={this.state.x6}
            x7={this.state.x7}
        /> 
    </div>
  )};
}
export default BubbleGame;

