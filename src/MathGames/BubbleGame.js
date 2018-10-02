import React, { Component } from 'react';
import MathExpression from './BubbleGameComponents/Expressions.js';
import BubbleAnswers from './BubbleGameComponents/Bubbles.js';
class BubbleGame extends Component {
constructor(props) {
   super(props);
   this.state = {
     a: 0,
     b: 0,
     operator: "",
     operatorIcon: "",
     result: "?",
     wrongAnswer: [],
     count: 1,
     activeShakeCount: 1,
   };
   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.displayAnswer = this.displayAnswer.bind(this);
   this.activateShake = this.activateShake.bind(this);
 }

componentDidMount(){
  this.calc(this.state.operator);
  this.wrongAnswerNumber();
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
     
     answerBox: "",
   });
 }
/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 11);
 }

 calc(operator){
  if(operator === "+"){
    this.setState({
     result: this.state.a + this.state.b,
     wrongAnswer1: this.wrongAnswerNumber(),
     wrongAnswer2: this.wrongAnswerNumber(),
     wrongAnswer3: this.wrongAnswerNumber(),
     wrongAnswer4: this.wrongAnswerNumber(),
     wrongAnswer5: this.wrongAnswerNumber(),
   });
  }

  if(operator === "*"){
    this.setState({
     result: this.state.a * this.state.b,
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
           result: this.state.a - this.state.b,
         });
    } 
 }

  wrongAnswerNumber() {
  let wrongAnswerNumber1 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber2 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber3 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber4 = Math.floor(Math.random() * 15);
  let wrongAnswerNumber5 = Math.floor(Math.random() * 15);
  
   this.setState({
           wrongAnswer: [wrongAnswerNumber1, wrongAnswerNumber2, wrongAnswerNumber3, wrongAnswerNumber4, wrongAnswerNumber5]
         });
 }

/* Display answer for the 'Equals to' */
 displayAnswer(){
  this.setState({
    answerBox: this.state.result,
    count: this.state.count + 1
  });
    setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
        this.setRandomNumber();
        this.calc(this.state.operator);
  }.bind(this), 1000) 

    this.callFinishedGame();
}
callFinishedGame(){ 
   const { finishedGame } = this.props;
    let count = this.state.count;
    finishedGame(count);
}

activateShake(){
  if(this.state.activeShakeCount === 3) {
    console.log("shake");
  } 
  this.setState({
    activeShakeCount: this.state.activeShakeCount + 1,
  });
}


  render() {

   return (
    <div id="wrapper">
       <MathExpression NumberOne={this.state.a} NumberTwo={this.state.b} Operator={this.state.operatorIcon} AnswerBox={this.state.answerBox} />
       <BubbleAnswers 
            Answer={this.displayAnswer} Result={this.state.result} 
            ShakeHint={this.activateShake}
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
