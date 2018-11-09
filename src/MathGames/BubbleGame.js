import React, { Component } from 'react';
import MathExpression from './BubbleGameComponents/Expressions.js';
import BubbleAnswers from './BubbleGameComponents/Bubbles.js';
class BubbleGame extends Component {
constructor(props) {
   super(props);
   this.state = {
     wrapperStyle: "wrapper",
     a: 0,
     b: 0,
     operator: "",
     operatorIcon: "",
     resultOne: "?",
     resultTwo: "?",
     wrongAnswer: [],
     count: 1,
     activeShakeCount: 1,
     bubbleOneCorrect: "bubble",
     bubbleTwoCorrect: "bubble",
     bubbleWrongOne: "bubble",
     bubbleWrongTwo: "bubble",
     bubbleWrongThree: "bubble",
     bubbleWrongFour: "bubble",
     bubbleWrongFive: "bubble"
   };
   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.displayAnswer = this.displayAnswer.bind(this);
   this.activateShake = this.activateShake.bind(this);
 }

componentDidMount(){
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
  
   this.setRandomNumber();
 }

 setRandomNumber(){
   this.setState({
     
     a: this.generateNumbers(),
     b: this.generateNumbers(),
     
     answerBox: "?",
   });
 }
/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 11);
 }

 calc(operator){
  if(operator === "+"){
    this.setState({
     resultOne: this.state.a + this.state.b,
     resultTwo: this.state.a + this.state.b,
     wrongAnswer1: this.wrongAnswerNumber(),
     wrongAnswer2: this.wrongAnswerNumber(),
     wrongAnswer3: this.wrongAnswerNumber(),
     wrongAnswer4: this.wrongAnswerNumber(),
     wrongAnswer5: this.wrongAnswerNumber(),
   });
  }

  if(operator === "*"){
    this.setState({
     resultOne: this.state.a * this.state.b,
     resultTwo: this.state.a * this.state.b,
     wrongAnswer1: this.wrongAnswerNumber(),
     wrongAnswer2: this.wrongAnswerNumber(),
     wrongAnswer3: this.wrongAnswerNumber(),
     wrongAnswer4: this.wrongAnswerNumber(),
     wrongAnswer5: this.wrongAnswerNumber(),
   });
  }  

   if(operator === "-"){
    if(this.state.a < this.state.b){
      let a = this.state.a;
      this.state.a = this.state.b;
      this.state.b = a;
    }
         this.setState({
           resultOne: this.state.a - this.state.b,
           resultTwo: this.state.a - this.state.b
         });
    } 

    this.wrongAnswerNumber();
 }

  wrongAnswerNumber() {
  let wrongAnswerNumber1 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber2 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber3 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber4 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber5 = Math.floor(Math.random() * 15);
  
  if(wrongAnswerNumber1 === this.state.resultOne){
    wrongAnswerNumber1 = wrongAnswerNumber1 + 1;
  }

  if(wrongAnswerNumber2 === this.state.resultOne){
    wrongAnswerNumber2 = wrongAnswerNumber2 + 1;
  }

  if(wrongAnswerNumber3 === this.state.resultOne){
    wrongAnswerNumber3 = wrongAnswerNumber3 + 1;
  }

  if(wrongAnswerNumber4 === this.state.resultOne){
    wrongAnswerNumber4 = wrongAnswerNumber4 + 1;
  }

  if(wrongAnswerNumber5 === this.state.resultOne){
    wrongAnswerNumber5 = wrongAnswerNumber5 + 1;
  }

   this.setState({
     wrongAnswer: [wrongAnswerNumber1, wrongAnswerNumber2, wrongAnswerNumber3, wrongAnswerNumber4, wrongAnswerNumber5]
   });
 }

/* Display answer for the 'Equals to' */
 displayAnswer(correctBubble){
  
   if(correctBubble === 1){
    this.setState({
      bubbleTwoCorrect: "bubbleDisapear",
      bubbleOneCorrect: "bubbleCorrect",
      resultOne: "Rätt!",
      bubbleWrongOne: "bubbleDisapear",
      bubbleWrongTwo: "bubbleDisapear",
      bubbleWrongThree: "bubbleDisapear",
      bubbleWrongFour: "bubbleDisapear",
      bubbleWrongFive: "bubbleDisapear"
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
      bubbleWrongFive: "bubbleDisapear"
    });
  }

  this.setState({
    answerBox: this.state.resultOne,
    wrapperStyle: "wrapper",
    count: this.state.count + 1,
  });
    setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
        this.setRandomNumber();
        this.calc(this.state.operator);
        this.setState({
          wrapperStyle: "wrapper",
          bubbleTwoCorrect: "bubble",
          bubbleOneCorrect: "bubble",
          bubbleWrongOne: "bubble",
          bubbleWrongTwo: "bubble",
          bubbleWrongThree: "bubble",
          bubbleWrongFour: "bubble",
          bubbleWrongFive: "bubble"
        })
  }.bind(this), 1000) 

    this.callFinishedGame();
}
callFinishedGame(){ 
   const { finishedGame } = this.props;
    let count = this.state.count;
    finishedGame(count);
}

activateShake(clickedBubble){

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
       <MathExpression NumberOne={this.state.a} NumberTwo={this.state.b} Operator={this.state.operatorIcon} AnswerBox={this.state.answerBox} />
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
            WrongAnswer1={this.state.wrongAnswer[0]} 
            WrongAnswer2={this.state.wrongAnswer[1]} 
            WrongAnswer3={this.state.wrongAnswer[2]} 
            WrongAnswer4={this.state.wrongAnswer[3]} 
            WrongAnswer5={this.state.wrongAnswer[4]} 
        /> 
    </div>
  )};
}
export default BubbleGame;

