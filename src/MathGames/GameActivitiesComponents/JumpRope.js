import React, { Component } from 'react';
import JumpRope from '../../JSON/JumpRope.json';
import JumpRopeInput from './JumpRopeInput.js';
import CorrectMathExpression from './JumpRopeMathExpression.js';

class JumpRopeGame extends Component {
constructor(props){
  super(props);
  this.state = {
    a: "",
    b: "",
    result: "",
    value: "",
    count: 0,
    index: 0,
    operatorIndex: 0,
    operator: "",
    placeHolderMessage: "Skriv ditt svar",
    jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton",
    expression: [],
    jumpRopeInput: true
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.nextJumpRopeQuestion = this.nextJumpRopeQuestion.bind(this);
  this.calc = this.calc.bind(this);
}


componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(4);

  const { operator } = this.props;

    this.setState({
      operator: operator
    })

    if(operator === "-"){
      this.setState({
        operatorIndex: 1
      })
    }

    if(operator === "*"){
      this.setState({
        operatorIndex: 2
      })
    }

  this.calc(operator);
}

 componentWillMount(){
  const { operator } = this.props;

   this.setRandomNumber(operator);

 }


setRandomNumber(operator){
   this.setState({
     a: this.generateNumbers(operator),
     b: this.generateNumbers(operator)
   });
 }

 generateNumbers(operator){
  let randomNumber = "";
  
  if(operator === "*"){
   randomNumber = Math.floor(Math.random() * 3) + 2; 
  } else {
  randomNumber = Math.floor(Math.random() * 11) + 2;
  }

  return randomNumber;
 }

 calc(operator){
  if(operator === "+"){
    this.setState({
         result: this.state.a + this.state.b
       });
  }

   if(operator === "*"){
    this.setState({
         result: this.state.a * this.state.b
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

 handleChange(event){
  this.setState({
    value: event.target.value
  });


  event.preventDefault();
 }

 handleSubmit(event){
  event.preventDefault();

   if(this.state.result == this.state.value){
      let playAudio = new Audio();
      playAudio.src = require('../../Audio/click.mp3');
      playAudio.volume = 0.2;
      playAudio.play();

    document.getElementById("jumpRopeQuestionInvisible").style.color = "transparent";
    document.getElementById("jumpRopeQuestionInvisible").style.height = "220px";

      this.setState({
        jumpRopeInput: false,
        count: this.state.count + 1,
        AnswerIcon: false,
        rightAnswerIcon: true,
        placeHolderMessage: "Skriv ditt svar",
        jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton jumpRopeRightAnswer",
        expression: [this.state.a, this.state.operator, this.state.b, "=", this.state.result]

      });

        this.setRandomNumber(this.state.operator);

    } else {
    this.setState({
      wrongAnswerIcon: true,
      AnswerIcon: false,
      jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton jumpRopeWrongAnswer"
    })

    setTimeout(function() {
       this.setState({
        wrongAnswerIcon: false,
        AnswerIcon: true,
        value: "",
        placeHolderMessage: "Försök igen",
        jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton"
      })
      }.bind(this), 2000);
    } 
 }

 nextJumpRopeQuestion(){ 
  if(this.state.index < 2){
     this.setState({
       index: this.state.index + 1,
       value: "",
       jumpRopeInput: true,
       rightAnswerIcon: false,
       AnswerIcon: true,
       jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton",
     });

   document.getElementById("jumpRopeQuestionInvisible").style.height = "auto"; 
   document.getElementById("jumpRopeQuestionInvisible").style.color = "white";
  }

  this.calc(this.state.operator);
  this.callFinishedGame();
 }

callFinishedGame(){ 
   const { finishedGame } = this.props;
      let count = this.state.count;
      finishedGame(count);
}


  render(){
    let index = this.state.index;
    let operatorIndex = this.state.operatorIndex;

    let JumpRopeGameArray = JumpRope.JumpRopeGame;
    let SectionOne = JumpRopeGameArray[operatorIndex][index].partOne;
    let SectionTwo = JumpRopeGameArray[operatorIndex][index].partTwo;
    let SectionThree = JumpRopeGameArray[operatorIndex][index].partThree;
    let a = this.state.a;
    let b = this.state.b;
    let AnswerIcon = "Rätta";

    if(this.state.rightAnswerIcon){
        AnswerIcon = <i class="fas fa-check"></i>;
      }

      if(this.state.wrongAnswerIcon){
        AnswerIcon = <i class="fas fa-times"></i>;
      }

      if(this.state.AnswerIcon){
        AnswerIcon = "Rätta";
      }


    let jumpRopeInput = <JumpRopeInput AnswerIcon={AnswerIcon} 
    jumpRopeAnswerButton={this.state.jumpRopeAnswerButton} 
    value={this.state.value} placeholder={this.state.placeHolderMessage} 
    onChange={this.handleChange} handleSubmit={this.handleSubmit} />;

    let correctMathExpression = "";

    if(!this.state.jumpRopeInput) {
        jumpRopeInput = "";
        correctMathExpression= <CorrectMathExpression expression={this.state.expression} nextJumpRopeQuestion={this.nextJumpRopeQuestion}/>
      }

  
    return(
      <div className="row">
        <div className="jumpDiv offset-1 col-10">
          <p id="jumpRopeQuestionInvisible" className="jumpRope">{SectionOne} {a} {SectionTwo} {b} {SectionThree} </p>    
            {jumpRopeInput}          
            {correctMathExpression}
        </div>
      </div>
    )
  }
}

export default JumpRopeGame;