import React, { Component } from 'react';
import MathExpression from './BubbleGameComponents/Expressions.js';
import BubbleAnswers from './BubbleGameComponents/Bubbles.js';


class BubbleGame extends Component {
constructor(props) {
   super(props);
   this.state = {
     a: 0,
     b: 0,
     result: "?",
     wrongAnswer1: "",
     wrongAnswer2: "",
     wrongAnswer3: "",
     wrongAnswer4: "",
     count: 0
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.displayAnswer = this.displayAnswer.bind(this);
 }

componentDidMount(){
  this.calc();
}
 componentWillMount(){
   this.setRandomNumber();
 }

 setRandomNumber(){
   this.setState({
     a: this.generateNumbers(),
     b: this.generateNumbers(),
     wrongAnswer1: this.generateNumbers(),
     wrongAnswer2: this.generateNumbers(),
     wrongAnswer3: this.generateNumbers(),
     wrongAnswer4: this.generateNumbers(),
     answerBox: "",
   });
 }

/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 11);
 }

 calc(){
   this.setState({
     result: this.state.a + this.state.b
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
        this.calc();
    }.bind(this), 2500) 
}

  render() {
  	const { finishedGame } = this.props;
  	let count = this.state.count;
  	finishedGame(count);

   return (
    <div id="wrapper">
       <MathExpression NumberOne={this.state.a} NumberTwo={this.state.b} AnswerBox={this.state.answerBox} />
       <BubbleAnswers 
            Answer={this.displayAnswer} Result={this.state.result} 
            WrongAnswer1={this.state.wrongAnswer1} 
            WrongAnswer2={this.state.wrongAnswer2}
            WrongAnswer3={this.state.wrongAnswer3}
            WrongAnswer4={this.state.wrongAnswer4}
         /> 
    </div>
  )};
}


export default BubbleGame;


