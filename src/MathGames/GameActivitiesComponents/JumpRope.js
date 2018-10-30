import React, { Component } from 'react';
import JumpRope from '../../JSON/AdditionJumpRope.json';
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
}


componentDidMount(){
  const { operator } = this.props;

    this.setState({
      operator: operator
    })

    if(operator === "-"){
      this.setState({
        operatorIndex: 1
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

   if(this.state.result == this.state.value){
      this.setState({
        jumpRopeInput: false,
        count: this.state.count + 1,
        AnswerIcon: false,
        rightAnswerIcon: true,
        placeHolderMessage: "Skriv ditt svar",
        jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton jumpRopeRightAnswer",
        expression: [this.state.a, this.state.operator, this.state.b, "=", this.state.result]

      });
        if(this.state.index < 2){
          setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
            this.setState({
              index: this.state.index + 1,
              value: "",
              jumpRopeInput: true,
              rightAnswerIcon: false,
              AnswerIcon: true,
              jumpRopeAnswerButton: "col-2 jumpRopeAnswerButton",
          
            });
            this.setRandomNumber(this.state.operator);
            this.calc(this.state.operator);
          }.bind(this), 2000);
      }

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

  event.preventDefault();
   this.callFinishedGame();
 
 }

callFinishedGame(){ 
   const { finishedGame } = this.props;
      let count = this.state.count;
      finishedGame(count);
}


  render(){
    this.callFinishedGame();
    
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
        correctMathExpression= <CorrectMathExpression expression={this.state.expression} />
      }

  
    return(
      <div className="row">
        <div className="jumpDiv offset-1 col-10">
          <p className="jumpRope">{SectionOne} {a} {SectionTwo} {b} {SectionThree} </p>    
            {jumpRopeInput}          
            {correctMathExpression}
        </div>
      </div>
    )
  }
}

export default JumpRopeGame;